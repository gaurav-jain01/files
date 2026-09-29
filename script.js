// Career Point University — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }



  /* Countdown to conference date (29 July 2027, 09:00 local) */
  var cdEl = document.getElementById('countdown');
  if (cdEl) {
    var target = new Date('2027-07-29T09:00:00');
    var dEl = document.getElementById('cd-days');
    var hEl = document.getElementById('cd-hours');
    var mEl = document.getElementById('cd-mins');
    var sEl = document.getElementById('cd-secs');

    function tick() {
      var diff = target - new Date();
      if (diff <= 0) {
        cdEl.querySelector('.cd-label').textContent = 'The conference is underway';
        dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00';
        return;
      }
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var mins = Math.floor((diff / (1000 * 60)) % 60);
      var secs = Math.floor((diff / 1000) % 60);
      dEl.textContent = String(days).padStart(2, '0');
      hEl.textContent = String(hours).padStart(2, '0');
      mEl.textContent = String(mins).padStart(2, '0');
      sEl.textContent = String(secs).padStart(2, '0');
    }
    tick();
    setInterval(tick, 1000);
  }

  /* Generic form handling (no backend — demonstrates the intended flow) */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = form.getAttribute('data-success-message') ||
          'Thank you — your submission has been recorded.';
        status.classList.add('ok');
      }
      form.reset();
    });
  });
});
