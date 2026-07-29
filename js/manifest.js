/* ==========================================================================
   Cairo Scan Wireframe System — MANIFEST (single source of truth)
   The Review Dashboard renders itself from this file.
   To add a screen: create its HTML under pages/<area>/ and add an entry
   here with status "ready" — it appears on the dashboard automatically.
   status: "ready" | "in-progress" | "planned"
   ========================================================================== */
window.CS_PROJECT = {
  name:    'كايرو سكان — نظام الـ Wireframes',
  nameEn:  'Cairo Scan — Wireframe System',
  version: '0.1.0',
  updated: '2026-07-28',
  fidelity:'Mid-Fidelity · Grayscale (brand colour applied at Hi-Fi)',
  rfp:     'RLCAIRO-WEB-2026-01',

  areas: [
    { id:'public', name:'الموقع العام', en:'Public Website', screens:[
      { t:'الصفحة الرئيسية',        en:'Home',                 path:'pages/public/home.html',            status:'ready',   rfp:'§4.1' },
      { t:'من نحن / تاريخنا',        en:'About — Who We Are',   path:'pages/public/about.html',           status:'ready',   rfp:'§4.2' },
      { t:'الرسالة والرؤية والقيم',  en:'Mission/Vision/Values',path:'pages/public/mission.html',         status:'planned', rfp:'§4.2' },
      { t:'الجودة والاعتمادات',      en:'Quality & Accred.',    path:'pages/public/accreditations.html',  status:'planned', rfp:'§4.2' },
      { t:'فريق القيادة',           en:'Leadership',           path:'pages/public/leadership.html',      status:'planned', rfp:'§4.2' },
      { t:'الأخبار والإعلام',        en:'Media & News',         path:'pages/public/media.html',           status:'planned', rfp:'§4.2' },
      { t:'الوظائف',               en:'Careers',              path:'pages/public/careers.html',         status:'planned', rfp:'§4.2' },
      { t:'الخدمات — الجامعة',       en:'Services Landing',     path:'pages/public/services.html',        status:'planned', rfp:'§4.3' },
      { t:'فئة خدمة (قالب)',        en:'Service Category',     path:'pages/public/service-category.html',status:'planned', rfp:'§4.3' },
      { t:'صفحة فحص (قالب)',        en:'Exam Page',            path:'pages/public/exam.html',            status:'planned', rfp:'§4.3' },
      { t:'المواقع — خريطة',        en:'Locations',            path:'pages/public/locations.html',       status:'planned', rfp:'§4.4' },
      { t:'صفحة فرع (قالب)',        en:'Branch Detail',        path:'pages/public/branch.html',          status:'planned', rfp:'§4.4' },
      { t:'للمرضى — الجامعة',       en:'For Patients Hub',     path:'pages/public/for-patients.html',    status:'planned', rfp:'§4.4' },
      { t:'تحضير الفحوصات',         en:'Exam Preparation',     path:'pages/public/exam-prep.html',       status:'planned', rfp:'§4.4' },
      { t:'التأمين والتعاقدات',      en:'Insurance & Contracts',path:'pages/public/insurance.html',       status:'planned', rfp:'§4.4' },
      { t:'الأسئلة الشائعة',        en:'FAQs',                 path:'pages/public/faqs.html',            status:'planned', rfp:'§4.4' },
      { t:'السلامة والبروتوكولات',  en:'Safety & Protocols',   path:'pages/public/safety.html',          status:'planned', rfp:'§4.4' },
      { t:'المكتبة الصحية',         en:'Health Library',       path:'pages/public/health-library.html',  status:'planned', rfp:'§4.6' },
      { t:'مقال صحي (قالب)',        en:'Article',              path:'pages/public/article.html',         status:'planned', rfp:'§4.6' },
      { t:'الشركات / B2B',          en:'Corporate Landing',    path:'pages/public/corporate.html',       status:'planned', rfp:'§4.7' },
      { t:'اتصل بنا',              en:'Contact Us',           path:'pages/public/contact.html',         status:'planned', rfp:'§4.8' },
      { t:'صفحات قانونية',          en:'Legal / Utility',      path:'pages/public/legal.html',           status:'planned', rfp:'§3.2' }
    ]},

    { id:'booking', name:'حجز المريض', en:'Booking Flow', screens:[
      { t:'1 · اختيار الخدمة',   en:'Step 1 — Service',     path:'pages/booking/step-1-service.html',  status:'planned', rfp:'§4.4' },
      { t:'2 · اختيار الفرع',    en:'Step 2 — Branch',      path:'pages/booking/step-2-branch.html',   status:'planned', rfp:'§4.4' },
      { t:'3 · اختيار الموعد',   en:'Step 3 — Slot',        path:'pages/booking/step-3-slot.html',     status:'planned', rfp:'§5.2' },
      { t:'4 · بيانات المريض',   en:'Step 4 — Details',     path:'pages/booking/step-4-details.html',  status:'planned', rfp:'§5.2' },
      { t:'5 · المراجعة والموافقة',en:'Step 5 — Review',     path:'pages/booking/step-5-review.html',   status:'planned', rfp:'§4.4' },
      { t:'6 · الدفع',          en:'Step 6 — Payment',     path:'pages/booking/step-6-payment.html',  status:'planned', rfp:'§4.9' },
      { t:'7 · تأكيد الحجز',     en:'Step 7 — Confirmation',path:'pages/booking/step-7-confirm.html',  status:'planned', rfp:'§4.4' },
      { t:'حالات الحافة',        en:'Edge States',          path:'pages/booking/edge-states.html',     status:'planned', rfp:'§9.2' }
    ]},

    { id:'patient-portal', name:'بوابة المريض', en:'Patient Portal', screens:[
      { t:'تسجيل الدخول (OTP)', en:'Login / OTP',       path:'pages/patient-portal/login.html',       status:'planned', rfp:'§4.9' },
      { t:'لوحة التحكم',        en:'Dashboard',         path:'pages/patient-portal/dashboard.html',   status:'planned', rfp:'§4.9' },
      { t:'مواعيدي',           en:'Appointments',      path:'pages/patient-portal/appointments.html',status:'planned', rfp:'§4.9' },
      { t:'نتائجي وتقاريري',    en:'Results & Reports', path:'pages/patient-portal/results.html',     status:'planned', rfp:'§4.9' },
      { t:'عارض DICOM',        en:'DICOM Viewer',      path:'pages/patient-portal/dicom.html',       status:'planned', rfp:'§5.3' },
      { t:'فواتيري ومدفوعاتي',  en:'Invoices',          path:'pages/patient-portal/invoices.html',    status:'planned', rfp:'§4.9' },
      { t:'ملفي والتاريخ الطبي', en:'Profile & History', path:'pages/patient-portal/profile.html',     status:'planned', rfp:'§4.9' },
      { t:'العائلة والإشعارات',  en:'Family & Notif.',   path:'pages/patient-portal/family.html',      status:'planned', rfp:'§4.9' }
    ]},

    { id:'physician-portal', name:'بوابة الطبيب', en:'Physician Portal', screens:[
      { t:'تسجيل / دخول (توثيق)',en:'Register / Login',  path:'pages/physician-portal/login.html',      status:'planned', rfp:'§4.5' },
      { t:'لوحة التحكم',        en:'Dashboard',         path:'pages/physician-portal/dashboard.html',  status:'planned', rfp:'§4.5' },
      { t:'إرسال إحالة',        en:'Submit Referral',   path:'pages/physician-portal/referral.html',   status:'planned', rfp:'§4.5' },
      { t:'متابعة الإحالات',    en:'Track Referrals',   path:'pages/physician-portal/track.html',      status:'planned', rfp:'§4.5' },
      { t:'عرض النتائج + DICOM', en:'View Results',      path:'pages/physician-portal/results.html',    status:'planned', rfp:'§4.5' },
      { t:'قائمة المرضى',       en:'Patient List',      path:'pages/physician-portal/patients.html',   status:'planned', rfp:'§4.5' },
      { t:'تعليم طبي + تواصل',   en:'CME & Contact',     path:'pages/physician-portal/cme.html',        status:'planned', rfp:'§4.5' }
    ]},

    { id:'corporate-portal', name:'بوابة الشركات', en:'Corporate Portal', screens:[
      { t:'تسجيل الدخول',      en:'Login',             path:'pages/corporate-portal/login.html',      status:'planned', rfp:'§4.7' },
      { t:'حساب الشركة',       en:'Company Account',   path:'pages/corporate-portal/account.html',    status:'planned', rfp:'§4.7' },
      { t:'إدارة الموظفين',    en:'Employees',         path:'pages/corporate-portal/employees.html',  status:'planned', rfp:'§4.7' },
      { t:'كتالوج الباقات',    en:'Package Catalog',   path:'pages/corporate-portal/packages.html',   status:'planned', rfp:'§4.7' },
      { t:'حجز جماعي',        en:'Bulk Booking',      path:'pages/corporate-portal/bulk-booking.html',status:'planned',rfp:'§4.7' },
      { t:'تاريخ الحجوزات',    en:'Booking History',   path:'pages/corporate-portal/history.html',    status:'planned', rfp:'§4.7' },
      { t:'فواتير الشركة',     en:'Corporate Invoices',path:'pages/corporate-portal/invoices.html',   status:'planned', rfp:'§4.7' },
      { t:'إدارة التأمين / TPA',en:'Insurance / TPA',   path:'pages/corporate-portal/tpa.html',        status:'planned', rfp:'§4.7' }
    ]},

    { id:'admin', name:'الأدمن + CMS', en:'Admin & CMS', screens:[
      { t:'تسجيل دخول آمن',    en:'Secure Login',      path:'pages/admin/login.html',        status:'planned', rfp:'§5.3' },
      { t:'لوحة العمليات',     en:'Ops Dashboard',     path:'pages/admin/dashboard.html',    status:'planned', rfp:'§9.4' },
      { t:'إدارة المحتوى',     en:'Content Management',path:'pages/admin/content.html',      status:'planned', rfp:'§5.7' },
      { t:'متابعة المرضى/المواعيد',en:'Oversight',       path:'pages/admin/oversight.html',    status:'planned', rfp:'§9.4' },
      { t:'اعتماد الشركات',    en:'Corporate Approval',path:'pages/admin/corporate.html',    status:'planned', rfp:'§9.4' },
      { t:'توثيق الأطباء',     en:'Physician Verify',  path:'pages/admin/physicians.html',   status:'planned', rfp:'§9.4' },
      { t:'طلبات الحجز + الاحتيال',en:'Requests / Fraud', path:'pages/admin/requests.html',     status:'planned', rfp:'§9.2' },
      { t:'SEO والتحليلات',    en:'SEO & Analytics',   path:'pages/admin/analytics.html',    status:'planned', rfp:'§5.5' }
    ]}
  ]
};
