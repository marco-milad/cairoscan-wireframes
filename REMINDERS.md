# Reminders & Deferred Items

Things intentionally **not** built in the wireframe phase — to implement later
(mostly Phase 3 development). Tracked here so nothing quietly drops off.

## Phase 3 — Development
- [ ] **Cookie Consent Banner** — required by the Egyptian PDPL Law 151/2020 that we
      committed to in the proposal. Not part of the mid-fi wireframes; add during
      Phase 3 dev with proper consent management (accept/reject/preferences) and a
      link to the Privacy Policy. *(Reminder raised 2026-07-29.)*

## Competitive enhancements (from RFP §7 benchmarking — web-researched 2026-07-29)
The client benchmarks us against SimonMed & Health Images (gold standards) plus RadNet,
DINW, Imaging Healthcare Specialists and Memorial. Weave these in so our work "matches
or exceeds" them (RFP §7). Priority: 🔴 high · 🟡 medium · 🟢 standard.

- [ ] 🔴 **AI-assisted imaging highlight** (SimonMed, RadNet EBCD) — a Home section/badge +
      a short "Technology / AI" story; call out AI-supported detection as a differentiator.
      → Home + a services/tech page.
- [ ] 🔴 **Price estimate / Good Faith Estimate at booking** (RadNet) — show an estimated cost
      / self-pay estimate and insurance-coverage check during booking. → Booking flow + For Patients.
- [ ] 🔴 **Physician portal depth** (RadNet + 2026 best-practice) — turnaround-time SLA per
      modality, **real-time case status**, radiology prep protocols, prior-auth support, e-fax.
      Revenue driver. → Physician Referral Portal (planned).
- [ ] 🟡 **Whole-Body / Longevity premium screening** (SimonMed) — a flagship premium package.
      → Screening Programs.
- [ ] 🟡 **Upload previous exam images + share via share-code** (SimonMed, Health Images) —
      patients upload priors and grant third-party access by code. → Patient Portal (planned).
- [ ] 🟡 **Online check-in / pre-registration** (DINW) — reduce in-branch wait. → Booking / Portal.
- [ ] 🟡 **Condition-based SEO hub** (RadNet) — a guide per condition ("when do I need an MRI?").
      → Health Library (planned).
- [ ] 🟢 **Two-way confirmation + easy reschedule via SMS/email link** (best-practice) — no phone
      call needed. → Booking + Patient Portal.

## Already covered (for reference)
- **Accreditations (JCI · ACR · CAP · ISO · Lab Med Dortmund)** — present on the Home
  page in the "Why Cairo Scan / Trust" section, **and** a dedicated About screen
  `pages/public/accreditations.html` (RFP §4.2) is in the manifest.
- **PDPL consent checkbox** on the booking form — already specced in the execution
  plan (Booking flow, step "Review + Consent").
