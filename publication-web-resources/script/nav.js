// Navigation entre les pages du programme de match
(function () {
  var pages = ['publication.html','publication-1.html','publication-2.html','publication-3.html',
    'publication-4.html','publication-5.html','publication-6.html','publication-7.html',
    'publication-8.html','publication-9.html','publication-10.html','publication-11.html',
    'publication-12.html','publication-13.html','publication-14.html'];

  var filename = window.location.pathname.split('/').pop();
  var idx = pages.indexOf(filename);
  if (idx === -1) return;

  var style = document.createElement('style');
  style.textContent = [
    '.nav-btn{position:fixed;top:50%;transform:translateY(-50%);',
    'font-size:60px;font-weight:bold;color:white;',
    'text-shadow:0 0 8px rgba(0,0,0,0.9);cursor:pointer;',
    'background:rgba(0,0,0,0.25);padding:16px 10px;',
    'z-index:9999;user-select:none;-webkit-user-select:none;}',
    '.nav-prev{left:0;border-radius:0 6px 6px 0;}',
    '.nav-next{right:0;border-radius:6px 0 0 6px;}'
  ].join('');
  document.head.appendChild(style);

  if (idx > 0) {
    var prev = document.createElement('div');
    prev.className = 'nav-btn nav-prev';
    prev.innerHTML = '&#10094;';
    prev.onclick = function () { window.location.href = pages[idx - 1]; };
    document.body.appendChild(prev);
  }

  if (idx < pages.length - 1) {
    var next = document.createElement('div');
    next.className = 'nav-btn nav-next';
    next.innerHTML = '&#10095;';
    next.onclick = function () { window.location.href = pages[idx + 1]; };
    document.body.appendChild(next);
  }
})();
