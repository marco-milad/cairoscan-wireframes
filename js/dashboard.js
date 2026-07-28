/* ==========================================================================
   Review Dashboard renderer — builds the dashboard from js/manifest.js.
   Add a screen to the manifest → it appears here automatically.
   ========================================================================== */
(function () {
  var P = window.CS_PROJECT;
  if (!P) return;

  function set(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  function label(s) { return s === 'ready' ? 'جاهز' : s === 'in-progress' ? 'قيد التنفيذ' : 'مخطط'; }

  set('csName', P.name);
  set('csVersion', 'v' + P.version);
  set('csUpdated', P.updated);
  set('csFidelity', P.fidelity);

  var total = 0, ready = 0, prog = 0, plan = 0;
  P.areas.forEach(function (a) {
    a.screens.forEach(function (s) {
      total++;
      if (s.status === 'ready') ready++;
      else if (s.status === 'in-progress') prog++;
      else plan++;
    });
  });
  var pct = total ? Math.round((ready / total) * 100) : 0;
  var bar = document.getElementById('csBar');
  if (bar) requestAnimationFrame(function () { bar.style.width = pct + '%'; });
  set('csPct', pct + '%');
  set('csCounts', ready + ' جاهزة · ' + prog + ' قيد التنفيذ · ' + plan + ' مخططة · إجمالي ' + total);

  var app = document.getElementById('csAreas');
  if (!app) return;

  P.areas.forEach(function (a) {
    var r = 0;
    a.screens.forEach(function (s) { if (s.status === 'ready') r++; });

    var sec = document.createElement('section');
    sec.className = 'area';

    var html = '<div class="area-head"><h2>' + a.name +
      '<span class="en">' + a.en + '</span></h2>' +
      '<span class="area-count">' + r + '/' + a.screens.length + '</span></div><div class="cards">';

    a.screens.forEach(function (s) {
      var st = s.status;
      var inner =
        '<div class="c-top"><span class="st ' + st + '">' + label(st) + '</span>' +
        (s.rfp ? '<span class="rfp">' + s.rfp + '</span>' : '') + '</div>' +
        '<div class="c-title">' + s.t + '</div>' +
        '<div class="c-en">' + s.en + '</div>';

      if (st === 'ready' || st === 'in-progress') {
        html += '<a class="card-link ' + st + '" href="' + s.path + '">' + inner +
          '<span class="go">فتح ↗</span></a>';
      } else {
        html += '<div class="card-link planned">' + inner +
          '<span class="go muted">قريبًا</span></div>';
      }
    });

    html += '</div>';
    sec.innerHTML = html;
    app.appendChild(sec);
  });
})();
