/* Transport keys on the landing deck.

   The deck holds five positions: the leader (the name) and one per section.
   << and >> seek between them — the reels kick into a burst of fast winding
   and the label scrambles to the new track. > opens the selected track, and
   the square returns to the leader with the reels stopped.

   Reel motion is all CSS: this only sets a state class on .deck-hero and
   lets index.css read it. */

(function () {
  var SEEK_MS = 650;      // how long the reels wind while seeking
  var COUNTER = ['000', '047', '118', '206', '285', '361', '432'];

  /* position 0 is the leader; the rest map to these, in order */
  var TRACKS = [
    { title: 'A Different Planet', href: 'aDifferentPlanet.html' },
    { title: 'Become Red', href: 'becomeRed.html' },
    { title: 'Hoy', href: 'hoy.html' },
    { key: 'navBar_21', title: 'Everydays', href: 'everydays.html' },
    { key: 'navBar_30', title: 'Studies', href: 'studies.html' },
    { title: 'Immersive Oasis', href: 'immersiveOasis.html' }
  ];

  var STOPPED = 'is-stopped';
  var SEEK_CLASS = { ff: 'is-ff', rew: 'is-rew' };

  var deck, keys, counter, tagline;
  var position = 0;
  var resting = '';       // the reel state to fall back to after a seek
  var seekTimer = null;

  function trackTitle(track) {
    /* prefer the translated section name when there is one */
    if (track.key && window.jQuery && window.jQuery.i18n) {
      var translated = window.jQuery.i18n(track.key);
      if (translated && translated !== track.key) {
        return translated;
      }
    }
    return track.title;
  }

  function message(key, fallback) {
    if (window.jQuery && window.jQuery.i18n) {
      var translated = window.jQuery.i18n(key);
      if (translated && translated !== key) {
        return translated;
      }
    }
    return fallback;
  }

  function setReels(state) {
    deck.classList.remove(STOPPED, 'is-ff', 'is-rew');
    if (state) {
      deck.classList.add(state);
    }
  }

  function setLatched(mode) {
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key.hasAttribute('aria-pressed')) {
        key.setAttribute('aria-pressed', String(key.getAttribute('data-transport') === mode));
      }
    }
  }

  function paintLabel() {
    if (position === 0) {
      if (window.TapeLabel) {
        window.TapeLabel.resume();
      }
      if (tagline) {
        tagline.textContent = message('index_p1', 'Digital storytelling.');
      }
    } else {
      if (window.TapeLabel) {
        window.TapeLabel.show(trackTitle(TRACKS[position - 1]));
      }
      if (tagline) {
        tagline.textContent = message('ui_press_play', 'Press play to open');
      }
    }
    if (counter) {
      counter.textContent = COUNTER[position] || COUNTER[0];
    }
  }

  function seek(direction, key) {
    var total = TRACKS.length + 1;
    position = (position + direction + total) % total;
    paintLabel();

    /* wind the reels for a moment, then settle back to whatever was running */
    window.clearTimeout(seekTimer);
    setReels(SEEK_CLASS[direction > 0 ? 'ff' : 'rew']);
    key.classList.add('is-seeking');
    seekTimer = window.setTimeout(function () {
      setReels(resting);
      for (var i = 0; i < keys.length; i++) {
        keys[i].classList.remove('is-seeking');
      }
    }, SEEK_MS);
  }

  function play() {
    resting = '';
    setReels('');
    setLatched('play');
    if (position > 0) {
      window.location.href = TRACKS[position - 1].href;
    }
  }

  function stop() {
    window.clearTimeout(seekTimer);
    resting = STOPPED;
    setReels(STOPPED);
    setLatched('stop');
    position = 0;
    paintLabel();
  }

  function onKey(key) {
    switch (key.getAttribute('data-transport')) {
      case 'rew':
        seek(-1, key);
        break;
      case 'ff':
        seek(1, key);
        break;
      case 'play':
        play();
        break;
      case 'stop':
        stop();
        break;
    }
  }

  function init() {
    deck = document.querySelector('.deck-hero');
    if (!deck) {
      return;
    }
    keys = deck.querySelectorAll('.transport__key');
    if (!keys.length) {
      return;
    }
    counter = deck.querySelector('.transport__counter');
    tagline = deck.querySelector('.tape__tagline');

    Array.prototype.forEach.call(keys, function (key) {
      key.addEventListener('click', function () {
        onKey(key);
      });
    });

    /* the language switch rewrites the page: put our own text back */
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.lang-switch')) {
        window.setTimeout(paintLabel, 0);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
