/* The scrambling tape label. Reveals the target left to right while the tail
   churns random characters. Idles between two names unless the transport drives
   it elsewhere. The type is scaled to fill a fixed-height box, measured once per
   target off a hidden ruler, so a long name cannot resize the deck.

   window.TapeLabel — .start(el, nameA, nameB) / .show(text) / .resume()
*/

(function (global) {
  var CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789<>/&$#@!?'.split('');

  var LETTER_MS = 80;    // time to lock in each character
  var HOLD_MS = 30000;   // how long a settled name sits before the next swap

  var REF_PX = 100;      // ruler size the measurement is scaled from
  var FILL = 0.96;       // leave a hair of breathing room at the edges
  var MIN_PX = 14;
  var ruler = null;

  var el = null;
  var names = [];
  var idleIndex = 0;
  var idling = false;

  var target = '';
  var locked = 0;        // characters revealed so far
  var scrambling = false;
  var lastStep = 0;
  var settledAt = 0;
  var running = false;

  function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  function paint() {
    var out = target.slice(0, locked);
    for (var i = locked; i < target.length; i++) {
      out += randomChar();
    }
    el.textContent = out;
  }

  function makeRuler() {
    ruler = global.document.createElement('span');
    ruler.setAttribute('aria-hidden', 'true');
    ruler.style.cssText =
      'position:absolute;left:-9999px;top:0;white-space:pre;pointer-events:none;visibility:hidden;';
    global.document.body.appendChild(ruler);
  }

  /* fill the box width, capped so short names stay inside its height */
  function fit() {
    if (!el || !target) {
      return;
    }
    if (!ruler) {
      makeRuler();
    }

    var box = el.getBoundingClientRect();
    if (!box.width || !box.height) {
      return;
    }

    var style = global.getComputedStyle(el);
    ruler.style.fontFamily = style.fontFamily;
    ruler.style.fontWeight = style.fontWeight;
    ruler.style.fontStyle = style.fontStyle;
    ruler.style.letterSpacing = style.letterSpacing;
    ruler.style.textTransform = style.textTransform;
    ruler.style.fontSize = REF_PX + 'px';
    ruler.textContent = target;

    var width = ruler.getBoundingClientRect().width;
    if (!width) {
      return;
    }

    var size = REF_PX * (box.width * FILL) / width;
    var max = box.height * 0.82;
    el.style.fontSize = Math.max(MIN_PX, Math.min(max, size)).toFixed(2) + 'px';
  }

  function scrambleTo(text) {
    target = String(text);
    fit();
    locked = 0;
    scrambling = true;
    lastStep = 0;
  }

  function frame(now) {
    if (scrambling) {
      if (!lastStep) {
        lastStep = now;
      }
      while (now - lastStep >= LETTER_MS) {
        lastStep += LETTER_MS;
        locked++;
        if (locked >= target.length) {
          locked = target.length;
          scrambling = false;
          settledAt = now;
          break;
        }
      }
      if (scrambling) {
        paint();
      } else {
        el.textContent = target;
      }
    } else if (idling && names.length > 1 && now - settledAt >= HOLD_MS) {
      idleIndex = (idleIndex + 1) % names.length;
      scrambleTo(names[idleIndex]);
    }

    global.requestAnimationFrame(frame);
  }

  var TapeLabel = {
    start: function (node, nameA, nameB) {
      el = node && node.jquery ? node[0] : node;
      if (!el) {
        return;
      }
      names = [nameA, nameB].filter(Boolean);
      idleIndex = 0;
      idling = true;
      target = names[0] || el.textContent;
      locked = target.length;
      el.textContent = target;

      fit();

      if (!running) {
        running = true;
        settledAt = global.performance ? global.performance.now() : 0;
        global.requestAnimationFrame(frame);

        var resizeTimer = null;
        global.addEventListener('resize', function () {
          global.clearTimeout(resizeTimer);
          resizeTimer = global.setTimeout(fit, 120);
        });
      }
    },

    show: function (text) {
      if (!el) {
        return;
      }
      idling = false;
      scrambleTo(text);
    },

    resume: function () {
      if (!el) {
        return;
      }
      idling = true;
      idleIndex = 0;
      scrambleTo(names[0]);
    }
  };

  global.TapeLabel = TapeLabel;

  /* kept so the existing inline call in index.html still works */
  global.startChange = function (node, nameA, nameB) {
    TapeLabel.start(node, nameA, nameB);
  };
})(window);
