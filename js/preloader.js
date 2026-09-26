(function () {
  var preloader = document.getElementById('preloader');
  if (!preloader) return;

  var path = window.location.pathname.replace(/\/+$/, ''); // hilangkan trailing slash
  var isHome = (path === '' || path === '/index.html' || path === '/index');

  // Kalau bukan home → langsung hapus preloader, jangan tampil
  if (!isHome) {
    preloader.remove();
    return;
  }

  document.documentElement.classList.add('is-loading');

  function finish() {
    preloader.classList.add('is-done');
    document.documentElement.classList.remove('is-loading');
    setTimeout(function () {
      if (preloader.parentNode) preloader.remove();
    }, 1000);
  }

  if (document.readyState === 'complete') {
    setTimeout(finish, 3100);
  } else {
    window.addEventListener('load', function () {
      setTimeout(finish, 2800);
    });
    setTimeout(finish, 4200);
  }
})();