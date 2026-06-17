$(function () {
  // Mobile nav toggle
  $('#navToggle').on('click', function () {
    $('#mobileMenu').slideToggle(150);
  });

  // Close mobile menu when a link is tapped
  $('#mobileMenu a').on('click', function () {
    $('#mobileMenu').slideUp(150);
  });

  // Highlight the active nav link based on the current page
  var path = window.location.pathname;
  $('.nav-link').each(function () {
    var href = $(this).attr('href');
    if (href === path || (path === '/' && href === '/') || (path.endsWith(href) && href !== '/')) {
      $(this).removeClass('text-muted').addClass('text-accent');
    }
  });

  // Terminal-style typing effect for the hero name (home page only)
  var typedEl = document.getElementById('typedName');
  if (typedEl) {
    var text = 'Eddison Patrimonio';
    var i = 0;
    (function type() {
      typedEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) setTimeout(type, 65);
    })();
  }

  // Scroll-reveal for elements marked .reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
