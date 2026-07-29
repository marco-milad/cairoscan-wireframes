/* ==========================================================================
   Lightweight AR ⇆ EN toggle for the wireframes.
   Arabic is the source text in the HTML; English lives in the dictionary below.
   The engine walks text nodes, swaps AR⇆EN, flips <html dir/lang>, and persists
   the choice. No per-element markup needed. Click the "AR / EN" pill to toggle.
   Skips: scripts/styles, the Review-Mode UI, the .lang pill, and the phone mock.
   ========================================================================== */
(function () {
  var LS = 'cs_lang';

  var DICT = {
    /* —— top strip —— */
    "🚑 خط الطوارئ: 19144": "🚑 Emergency: 19144",
    "💬 واتساب: 01272203421": "💬 WhatsApp: 01272203421",
    "🔍 ابحث عن فحص، خدمة، أو فرع…": "🔍 Search exams, services, branches…",

    /* —— brand / nav —— */
    "كايرو سكان": "Cairo Scan",
    "للأشعة والتحاليل": "Radiology & Labs",
    "من نحن": "About",
    "خدماتنا ▾": "Services ▾",
    "خدماتنا": "Services",
    "الرنين المغناطيسي MRI": "MRI",
    "الأشعة المقطعية CT": "CT Scan",
    "الطب النووي": "Nuclear Medicine",
    "أشعة النساء": "Women's Imaging",
    "السونار / الدوبلر": "Ultrasound / Doppler",
    "الأشعة العادية": "X-Ray",
    "المعامل والتحاليل": "Laboratory",
    "الخدمات المنزلية": "Home Services",
    "للمرضى": "For Patients",
    "للأطباء": "For Physicians",
    "المكتبة الصحية": "Health Library",
    "الشركات": "Corporate",
    "الفروع": "Locations",
    "اتصل بنا": "Contact",
    "عرض نتائجي": "View Results",
    "احجز موعد": "Book Appointment",
    "احجز": "Book",

    /* —— hero —— */
    "شبكة تشخيصية رائدة منذ 1983": "A leading diagnostic network since 1983",
    "أشعة وتحاليل": "Diagnostic Imaging",
    "تثق فيها مصر": "Egypt Trusts",
    "دقة، سرعة، و+40 عامًا من الثقة — نتائج خلال 24 ساعة، 18 فرعًا، ومعامل معتمدة ألمانيًا.":
      "Accuracy, speed, and 40+ years of trust — results within 24 hours, 18 branches, and German-certified labs.",
    "✔ معامل معتمدة ألمانيًا": "✔ German-certified labs",
    "✔ نتائج في 24 ساعة": "✔ Results in 24h",
    "✔ +200 شركة تأمين": "✔ 200+ insurers",
    "اختر الفحص": "Choose exam",
    "الفرع": "Branch",
    "الموعد": "Time",
    "ابدأ": "Start",
    "نقبل:": "We accept:",
    "+200 شركة": "200+ insurers",
    "▶ فيديو طبي — مرضى ومنشآت وأجهزة كايرو سكان": "▶ Medical video — Cairo Scan patients, facilities & devices",

    /* —— quick access —— */
    "اعثر على فرع": "Find a branch", "18 فرعًا": "18 branches",
    "اعثر على طبيب": "Find a doctor", "حسب التخصص": "By specialty",
    "التأمين": "Insurance", "تحقق من تغطيتك": "Check your coverage",
    "نتائجي": "My results", "حمّل تقاريرك": "Download reports",
    "واتساب": "WhatsApp", "احجز في الشات": "Book in chat",

    /* —— services —— */
    "خدمات تشخيصية بمعايير عالمية": "World-class diagnostic services",
    "اعرف كل فئة بلمحة — عدد الفحوصات، وتفاصيل التحضير والحجز المباشر.":
      "Know each category at a glance — number of exams, prep details, and direct booking.",
    "الرنين المغناطيسي (MRI)": "MRI (Magnetic Resonance Imaging)",
    "تصوير دقيق للمخ والعمود والمفاصل والقلب بدون إشعاع.": "Precise imaging of brain, spine, joints and heart — radiation-free.",
    "الأشعة المقطعية (CT)": "CT (Computed Tomography)",
    "مقاطع سريعة عالية الدقة للصدر والبطن والأوعية.": "Fast, high-resolution slices of the chest, abdomen and vessels.",
    "السونار والدوبلر": "Ultrasound & Doppler",
    "فحوصات آمنة للبطن والحمل والأوعية الدموية.": "Safe scans for the abdomen, pregnancy and blood vessels.",
    "ماموجرام، سونار الثدي، ومتابعة الحمل.": "Mammography, breast ultrasound and pregnancy follow-up.",
    "PET-CT ومسح العظام والغدة والكلى.": "PET-CT and bone, thyroid and renal scans.",
    "المعامل والتحاليل": "Laboratory",
    "شراكة ألمانية Lab Med Dortmund — دقة معتمدة.": "German partnership with Lab Med Dortmund — certified accuracy.",
    "12 فحص": "12 exams", "11 فحص": "11 exams", "15 فحص": "15 exams",
    "8 فحوصات": "8 exams", "7 فحوصات": "7 exams", "+300 تحليل": "300+ tests",
    "استعرض ←": "Explore ←",

    /* —— trust / accreditations —— */
    "لماذا كايرو سكان؟": "Why Cairo Scan?",
    "ثقة مبنية على الاعتماد والخبرة": "Trust built on accreditation & experience",
    "اعتمادات دولية، شراكة معملية ألمانية، وأكبر شبكة تأمين في مصر.":
      "International accreditations, a German lab partnership, and Egypt's largest insurance network.",
    "الاعتماد الدولي لجودة الرعاية الصحية": "International healthcare quality accreditation",
    "اعتماد نظام إدارة الجودة الدولي": "International quality-management certification",
    "الشريك المعملي الألماني للدقة المعتمدة": "German lab partner for certified accuracy",
    "سنة خبرة": "years of experience", "فرعًا": "branches", "مريض سنويًا": "patients / year",
    "رضا +10,000 مريض": "rated by 10,000+ patients",
    "شاهد كيف نعمل": "See how we work",
    "جولة 60 ثانية داخل مراكزنا وأحدث أجهزتنا التشخيصية.": "A 60-second tour inside our centers and latest devices.",
    "▶ تشغيل الفيديو": "▶ Play video",
    "جولة داخل كايرو سكان — الأجهزة والمنشآت والفريق": "Inside Cairo Scan — devices, facilities and team",

    /* —— screening —— */
    "برامج الفحص": "Screening Programs",
    "باقات فحص مصمّمة لصحتك": "Check-up packages designed for your health",
    "كل البرامج": "All programs",
    "الأكثر طلبًا": "Most requested", "كشف مبكر": "Early detection", "شامل": "Comprehensive",
    "رعاية القلب": "Cardiac Care", "تقييم شامل للقلب والأوعية والشرايين.": "Full assessment of the heart and vessels.",
    "سرطان الثدي": "Breast Cancer", "ماموجرام وسونار الثدي حسب العمر.": "Mammography and breast ultrasound by age.",
    "فحص المرأة الكامل": "Full Women's Check-up", "باقة صحية متكاملة للسيدات.": "A complete health package for women.",
    "احجز الباقة ←": "Book package ←",

    /* —— journey —— */
    "رحلتك معنا": "Your journey", "ثلاث خطوات فقط": "Just three steps",
    "أونلاين أو واتساب في دقيقة": "Online or WhatsApp in a minute",
    "زُر الفرع": "Visit the branch", "أو اطلب الخدمة المنزلية": "Or request the home service",
    "استلم النتائج": "Get your results", "عبر البوابة خلال 24 ساعة": "Via the portal within 24 hours",

    /* —— booking —— */
    "احجز أونلاين": "Book online", "احجز فحصك في 4 خطوات": "Book your exam in 4 steps",
    "حجز فوري — الأماكن المتاحة لحظية من نظام الحجز (تُربط بالـ API لاحقًا).":
      "Instant booking — live availability from the booking system (API wired later).",
    "الفحص": "Exam", "اختر نوع الفحص": "Choose the exam type",
    "الفرع والموعد": "Branch & time", "المتاح لحظيًا": "Live availability",
    "بياناتك": "Your details", "اسم وموبايل": "Name & mobile",
    "تأكيد": "Confirm", "SMS / واتساب": "SMS / WhatsApp",
    "الخطوة 1 من 4 — اختيار الفحص": "Step 1 of 4 — choose exam",
    "① تفاصيل الفحص": "① Exam details", "② بيانات المريض": "② Patient details",
    "نوع الفحص": "Exam type", "الفرع المفضّل": "Preferred branch",
    "التاريخ": "Date", "الوقت": "Time", "الاسم": "Name", "رقم الموبايل": "Mobile number",
    "اختر الفرع": "Choose branch", "اختر التاريخ": "Choose date", "اختر الوقت": "Choose time",
    "اكتب اسمك": "Your name",
    "متابعة الحجز": "Continue booking", "أو عبر واتساب · أو مركز الاتصال 19144": "Or via WhatsApp · or call center 19144",

    /* —— insurance / testimonials / articles —— */
    "موثوق من أكثر من 200 شركة تأمين و TPA": "Trusted by 200+ insurers and TPAs",
    "شعار": "logo",
    "آراء المرضى": "Patient reviews", "تجارب حقيقية موثّقة": "Real, verified experiences",
    "فرع مصر الجديدة": "Heliopolis branch", "فرع المهندسين": "Mohandessin branch", "فرع المعادي": "Maadi branch",
    "✔ موثّق": "✔ Verified",
    "\"حجزت رنين على المخ أونلاين واستلمت النتيجة نفس اليوم. تنظيم ممتاز.\"":
      "\"Booked a brain MRI online and got the result same day. Excellent organization.\"",
    "\"دقة التحاليل عالية جدًا بفضل الشراكة الألمانية. أنصح بها.\"":
      "\"Lab accuracy is very high thanks to the German partnership. Highly recommend.\"",
    "\"فروع قريبة وتغطية تأمين ممتازة، والخدمة المنزلية وفّرت عليّ وقت.\"":
      "\"Nearby branches, great insurance coverage, and the home service saved me time.\"",
    "🧲 رنين مغناطيسي": "🧲 MRI", "🧪 تحاليل معملية": "🧪 Lab tests", "📡 سونار": "📡 Ultrasound",
    "المكتبة الصحية": "Health Library", "اعرف أكثر عن صحتك": "Learn more about your health", "كل المقالات": "All articles",
    "متى تحتاج رنينًا مغناطيسيًا؟": "When do you need an MRI?",
    "جدول فحص سرطان الثدي حسب العمر": "Breast cancer screening schedule by age",
    "تقييم مخاطر أمراض القلب": "Heart disease risk assessment",
    "أشعة": "Radiology", "صحة المرأة": "Women's Health", "قلب": "Cardiac", "اقرأ ←": "Read ←",

    /* —— branches —— */
    "18 فرعًا في خدمتك": "18 branches at your service", "اعثر على أقرب فرع": "Find your nearest branch",
    "🗺️ خريطة تفاعلية — أقرب 3 فروع (Google Maps)": "🗺️ Interactive map — nearest 3 branches (Google Maps)",
    "مصر الجديدة": "Heliopolis", "المهندسين 1": "Mohandessin 1", "المعادي": "Maadi",
    "2.1 كم · مفتوح حتى 10م": "2.1 km · open until 10pm", "4.3 كم · مفتوح حتى 10م": "4.3 km · open until 10pm",
    "6.0 كم · مفتوح حتى 9م": "6.0 km · open until 9pm", "كل الفروع": "All branches",

    /* —— app —— */
    "تطبيق الموبايل": "Mobile app", "تطبيق كايرو سكان في جيبك": "Cairo Scan in your pocket",
    "احجز، تابع مواعيدك، واستلم نتائجك وصورك (DICOM) من موبايلك — في أي وقت.":
      "Book, track your appointments, and get your results and DICOM images from your phone — anytime.",
    "⭐ 4.8 · App Store": "⭐ 4.8 · App Store", "⭐ 4.7 · Google Play": "⭐ 4.7 · Google Play",

    /* —— footer —— */
    "شبكة مصر الرائدة للأشعة التشخيصية والتحاليل منذ 1983 — تابعة لـ RayLab Holding. 18 فرعًا · معامل معتمدة ألمانيًا.":
      "Egypt's leading diagnostic imaging & labs network since 1983 — part of RayLab Holding. 18 branches · German-certified labs.",
    "الخدمات": "Services", "المعامل": "Labs",
    "النتائج والتقارير": "Results & Reports", "تحضير الفحص": "Exam Preparation", "الأسئلة الشائعة": "FAQs",
    "الشركة": "Company", "الاعتمادات": "Accreditations", "الشركات B2B": "Corporate B2B", "وظائف": "Careers",
    "روابط": "Links", "بوابة المريض": "Patient Portal", "الخصوصية": "Privacy", "الشروط": "Terms",
    "🚑 خط الطوارئ": "🚑 Emergency line",
    "© 2026 كايرو سكان — جميع الحقوق محفوظة": "© 2026 Cairo Scan — All rights reserved",
    "بيان إتاحة الوصول · سياسة الكوكيز · ": "Accessibility · Cookies · ",
    "تواصل معنا": "Contact us",

    /* —— About page —— */
    "الرئيسية": "Home",
    "← من نحن": "› About",
    "الشركة الأم:": "Parent company:",
    "صورة — أحد مراكز كايرو سكان": "Image — a Cairo Scan center",
    "روّاد الأشعة التشخيصية في مصر منذ 1983": "Pioneers of diagnostic imaging in Egypt since 1983",
    "أكثر من 40 عامًا من التميّز في التشخيص الطبي — 18 فرعًا، معامل معتمدة ألمانيًا، وأكبر شبكة تأمين في مصر. تابعة لـ RayLab Holding.":
      "40+ years of excellence in medical diagnostics — 18 branches, German-certified labs, and Egypt's largest insurance network. Part of RayLab Holding.",
    "تاريخنا": "Our History", "الرسالة والقيم": "Mission & Values", "الجودة والاعتمادات": "Quality & Accreditations",
    "القيادة": "Leadership", "الإعلام والأخبار": "Media & News", "الوظائف": "Careers",
    "رعاية تشخيصية تثق فيها الأجيال": "Diagnostic care trusted across generations",
    "تأسّست كايرو سكان عام 1983 كأولى مراكز الأشعة التشخيصية الخاصة في مصر، وتطوّرت لتصبح شبكة رائدة من 18 فرعًا تقدّم الأشعة والطب النووي والتحاليل بأحدث الأجهزة وأعلى معايير الجودة.":
      "Cairo Scan was founded in 1983 as Egypt's first private diagnostic-imaging center, growing into a leading 18-branch network delivering radiology, nuclear medicine and labs with the latest devices and highest quality standards.",
    "مجموعة رعاية تشخيصية متعددة الجنسيات.": "a multinational diagnostic-healthcare group.",
    "سنة التأسيس": "founded", "موظف": "employees",
    "مسيرتنا": "Our journey", "محطات على مدى 40 عامًا": "Milestones across 40 years",
    "التأسيس": "Founded", "افتتاح أول مركز أشعة تشخيصية خاص في مصر.": "Opening Egypt's first private diagnostic-imaging center.",
    "التوسّع": "Expansion", "افتتاح فروع جديدة في القاهرة الكبرى وإدخال الرنين المغناطيسي.": "New branches across Greater Cairo and the introduction of MRI.",
    "الطب النووي و PET-CT": "Nuclear Medicine & PET-CT", "إضافة خدمات الطب النووي والتصوير المتقدّم.": "Adding nuclear-medicine and advanced-imaging services.",
    "الشراكة الألمانية": "German Partnership", "شراكة معملية مع Lab Med Dortmund لضمان دقة معتمدة عالميًا.": "A lab partnership with Lab Med Dortmund for globally-certified accuracy.",
    "التحوّل الرقمي": "Digital Transformation", "18 فرعًا، بوابة مرضى، وحجز أونلاين متكامل.": "18 branches, a patient portal, and integrated online booking.",
    "رسالتنا": "Our Mission", "تقديم أعلى معايير خدمات التشخيص الطبي في الأشعة والتحاليل لأفراد مجتمعنا.":
      "To deliver the highest standards of diagnostic health services in imaging and labs to our community.",
    "رؤيتنا": "Our Vision", "أن نصبح المزوّد الرائد للخدمات التشخيصية والفحوصات الطبية الخاصة في مصر والمنطقة.":
      "To become the preeminent provider of private diagnostic and medical-investigative services across Egypt and the region.",
    "قيمنا": "Our Values", "ست قيم توجّه كل ما نقدّمه": "Six values guiding everything we do",
    "الكفاءة": "Competence", "أعلى مستوى من الدقة والاحترافية.": "The highest level of accuracy and professionalism.",
    "الاحترام": "Respect", "كرامة المريض أولًا.": "Patient dignity first.",
    "الوحدة": "Unity", "فريق واحد لهدف واحد.": "One team, one goal.",
    "الفخر": "Pride", "فخر بإرثنا وخدمتنا.": "Proud of our heritage and service.",
    "الطموح": "Ambition", "نطوّر باستمرار.": "We continuously improve.",
    "التفاؤل": "Optimism", "رعاية بإيجابية وأمل.": "Care with positivity and hope.",
    "جودة معتمدة دوليًا": "Internationally certified quality",
    "اعتمادات عالمية، أجهزة من كبرى الشركات، ومعايير صارمة للأمان والحماية من الإشعاع.":
      "Global accreditations, devices from leading brands, and strict safety and radiation-protection standards.",
    "أجهزة معتمدة": "Certified devices",
    "الأمان والحماية من الإشعاع": "Safety & radiation protection",
    "بروتوكولات صارمة للجرعات، حماية المرضى والعاملين، ومكافحة العدوى.": "Strict dose protocols, patient and staff protection, and infection control.",
    "أحدث الأجهزة من": "Latest devices from",
    "صيانة ومعايرة دورية لضمان الدقة.": "routine maintenance and calibration for accuracy.",
    "الشريك المعملي الألماني": "German lab partner",
    "د. — —": "Dr. — —",
    "أ. — —": "Mr. — —",
    "فريق طبي وإداري متمرّس": "An experienced medical & management team",
    "المدير الطبي": "Medical Director", "كبير أطباء الأشعة": "Chief Radiologist",
    "استشاري الطب النووي": "Nuclear-Medicine Consultant", "الرئيس التنفيذي": "Chief Executive Officer",
    "أحدث أخبارنا ومبادراتنا": "Our latest news & initiatives", "كل الأخبار": "All news",
    "افتتاح فرع جديد بأحدث أجهزة الرنين": "New branch opens with the latest MRI devices",
    "حملة كشف مبكر مجانية للسيدات": "Free early-detection campaign for women",
    "جولة داخل مراكز كايرو سكان": "A tour inside Cairo Scan centers",
    "خبر": "News", "مبادرة CSR": "CSR initiative", "فيديو": "Video", "شاهد ←": "Watch ←",
    "انضم إلى فريق كايرو سكان": "Join the Cairo Scan team",
    "فرص للأطباء والفنيين والإداريين — بيئة عمل داعمة وتطوّر مستمر.": "Opportunities for doctors, technicians and admins — a supportive workplace with continuous growth.",
    "الوظائف المتاحة": "Open positions", "أرسل سيرتك الذاتية": "Submit your CV",
    "أخصائي أشعة": "Radiology Specialist", "فني معمل": "Lab Technician", "خدمة عملاء": "Customer Service",
    "القاهرة · دوام كامل": "Cairo · Full-time", "الجيزة · دوام كامل": "Giza · Full-time", "مصر الجديدة · دوام كامل": "Heliopolis · Full-time",
    "تقديم": "Apply",
    "من نحن": "About", // (kept last on purpose; duplicate keys are fine)
    "رعاية تشخيصية بمعايير عالمية": "World-class diagnostic care"
  };

  var SKIP = 'script,style,.cs-rev-toolbar,.cs-rev-badge,.cs-guides,.lang,.phone-mock';
  var nodes = [];
  var KEYS = Object.keys(DICT).sort(function (a, b) { return b.length - a.length; }); // longest first

  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = w.nextNode())) nodes.push({ node: n, ar: n.nodeValue });
  }

  function apply(lang) {
    var en = lang === 'en';
    document.documentElement.dir = en ? 'ltr' : 'rtl';
    document.documentElement.lang = en ? 'en' : 'ar';
    nodes.forEach(function (it) {
      if (en) {
        var v = it.ar;
        for (var i = 0; i < KEYS.length; i++) { var k = KEYS[i]; if (v.indexOf(k) !== -1) v = v.split(k).join(DICT[k]); }
        it.node.nodeValue = v;
      } else it.node.nodeValue = it.ar;
    });
    document.querySelectorAll('.lang').forEach(function (p) { p.textContent = en ? 'العربية' : 'English'; });
    try { localStorage.setItem(LS, lang); } catch (e) {}
  }

  function toggle() { apply(document.documentElement.lang === 'en' ? 'ar' : 'en'); }

  collect();
  document.querySelectorAll('.lang').forEach(function (p) { p.style.cursor = 'pointer'; p.addEventListener('click', toggle); });
  var saved = 'ar';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    saved = (q === 'en' || q === 'ar') ? q : (localStorage.getItem(LS) || 'ar');
  } catch (e) {}
  apply(saved);
})();
