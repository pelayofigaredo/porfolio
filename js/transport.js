/* Transport keys on the landing deck.

   The keys latch, the way they do on a real deck: whichever one is down stays
   down until another is pressed. All they do is drive the reels — the state
   class goes on .deck-hero and the CSS reads it from there. */

(function () {
  var MODE_CLASS = {
    play: '',
    ff: 'is-ff',
    rew: 'is-rew',
    stop: 'is-stopped'
  };
  var ALL = 'is-ff is-rew is-stopped';

  function init() {
    var deck = document.querySelector('.deck-hero');
    if (!deck) {
      return;
    }

    var keys = deck.querySelectorAll('.transport__key');
    if (!keys.length) {
      return;
    }

    Array.prototype.forEach.call(keys, function (key) {
      key.addEventListener('click', function () {
        var mode = key.getAttribute('data-transport');
        if (!(mode in MODE_CLASS)) {
          return;
        }

        ALL.split(' ').forEach(function (c) {
          deck.classList.remove(c);
        });
        if (MODE_CLASS[mode]) {
          deck.classList.add(MODE_CLASS[mode]);
        }

        Array.prototype.forEach.call(keys, function (other) {
          other.setAttribute('aria-pressed', String(other === key));
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
