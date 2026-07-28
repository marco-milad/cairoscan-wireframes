/* ==========================================================================
   Review Mode controller (shared across every wireframe page).
   - Injects a floating toolbar (Review Mode + Layout Guides + links)
   - Shows per-section annotations from [data-rev] / [data-rfp] / [data-comp]
   - Persists state in localStorage so it survives navigation
   Depends on: styles/review.css
   ========================================================================== */
(function () {
  var LS_REV = 'cs_review', LS_GU = 'cs_guides';
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  /* ---- inject annotation badges on every [data-rev] host ---- */
  document.querySelectorAll('[data-rev]').forEach(function (host) {
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    var badge = el('span', 'cs-rev-badge');
    var rfp = host.getAttribute('data-rfp');
    var comp = host.getAttribute('data-comp');
    badge.innerHTML =
      '<span class="n">' + host.getAttribute('data-rev') + '</span>' +
      (rfp ? '<span class="rfp">' + rfp + '</span>' : '') +
      (comp ? '<span class="comp">' + comp + '</span>' : '');
    host.appendChild(badge);
  });

  /* ---- layout-guides overlay ---- */
  var guides = el('div', 'cs-guides');
  var cols = el('div', 'cols');
  for (var i = 0; i < 12; i++) cols.appendChild(el('span'));
  guides.appendChild(cols);
  document.body.appendChild(guides);

  /* ---- toolbar ---- */
  var bar = el('div', 'cs-rev-toolbar');
  bar.innerHTML =
    '<label class="sw" id="csRevSw"><input type="checkbox" id="csRev"><span class="dot"></span><b>وضع المراجعة</b></label>' +
    '<label class="sw guides-toggle" id="csGuSw"><input type="checkbox" id="csGu"><span class="dot"></span><b>أدلة التخطيط</b></label>' +
    '<span class="sep"></span>' +
    '<a href="../../index.html" title="لوحة المراجعة">🏠 اللوحة</a>' +
    '<a href="../../feedback.html" title="أضف ملاحظة">💬 ملاحظات</a>';
  document.body.appendChild(bar);

  var rev = document.getElementById('csRev'), gu = document.getElementById('csGu');
  var revSw = document.getElementById('csRevSw'), guSw = document.getElementById('csGuSw');

  function applyRev(on) {
    document.body.classList.toggle('review-on', on);
    bar.classList.toggle('rev', on);
    revSw.classList.toggle('on', on);
    rev.checked = on;
    if (!on) applyGu(false); // guides only make sense inside review mode
  }
  function applyGu(on) {
    document.body.classList.toggle('guides-on', on);
    guSw.classList.toggle('on', on);
    gu.checked = on;
    try { localStorage.setItem(LS_GU, on ? '1' : '0'); } catch (e) {}
  }

  rev.addEventListener('change', function () {
    var on = rev.checked; applyRev(on);
    try { localStorage.setItem(LS_REV, on ? '1' : '0'); } catch (e) {}
  });
  gu.addEventListener('change', function () {
    if (!document.body.classList.contains('review-on')) { gu.checked = false; return; }
    applyGu(gu.checked);
  });

  /* ---- restore persisted state ---- */
  var savedRev = false, savedGu = false;
  try { savedRev = localStorage.getItem(LS_REV) === '1'; savedGu = localStorage.getItem(LS_GU) === '1'; } catch (e) {}
  applyRev(savedRev);
  if (savedRev && savedGu) applyGu(true);
})();
