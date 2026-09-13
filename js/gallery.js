/* Cassette transport keys driving the gallery carousel.

   Bootstrap owns the slides; this only talks to its API and keeps the counter
   and the key states honest. The keys behave like a real deck: you cannot
   wind and play at once, so stepping takes it out of play. */

(function ($) {
  var SEEK_MS = 260;

  $(function () {
    var $reel = $('#everydaysReel');
    if (!$reel.length) {
      return;
    }

    var $keys = $('.transport__key[data-gallery]');
    var $counter = $('#reelCounter');
    var $items = $reel.find('.carousel-item');
    var total = $items.length;
    var seekTimer = null;

    function pad(n) {
      return (n < 10 ? '0' : '') + n;
    }

    function paintCounter() {
      var i = $reel.find('.carousel-item').index($reel.find('.carousel-item.active')) + 1;
      $counter.text(pad(i) + '/' + pad(total));
    }

    /* only play and stop latch; winding is momentary */
    function latch(mode) {
      $keys.each(function () {
        if (this.hasAttribute('aria-pressed')) {
          this.setAttribute('aria-pressed', String(this.getAttribute('data-gallery') === mode));
        }
      });
    }

    function flash(key) {
      window.clearTimeout(seekTimer);
      $keys.removeClass('is-seeking');
      key.classList.add('is-seeking');
      seekTimer = window.setTimeout(function () {
        $keys.removeClass('is-seeking');
      }, SEEK_MS);
    }

    function step(direction, key) {
      $reel.carousel('pause');
      latch('stop');
      flash(key);
      $reel.carousel(direction);
    }

    $reel.on('slid.bs.carousel', paintCounter);
    paintCounter();

    $keys.on('click', function () {
      switch (this.getAttribute('data-gallery')) {
        case 'rew':
          step('prev', this);
          break;
        case 'ff':
          step('next', this);
          break;
        case 'play':
          $reel.carousel('cycle');
          latch('play');
          break;
        case 'stop':
          $reel.carousel('pause');
          latch('stop');
          break;
      }
    });

    /* nobody asked for a slideshow that moves on its own */
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $reel.carousel('pause');
      latch('stop');
    }
  });
})(jQuery);
