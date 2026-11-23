import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react';
import {
  COMPANY_CONFIG,
  CONSULTATION_CATEGORIES,
} from '../data/companyData';
import { ConsultationCategory } from '../types';

interface ContactSectionProps {
  selectedCategory: ConsultationCategory;
  onCategoryChange: (category: ConsultationCategory) => void;
}

interface FormValues {
  fullName: string;
  roleAndHospital: string;
  email: string;
  phone: string;
  category: ConsultationCategory;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    roleAndHospital: '',
    email: '',
    phone: '',
    category: selectedCategory,
    message: '',
  });

  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {}
  );
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  useEffect(() => {
    setValues((prev) => ({ ...prev, category: selectedCategory }));
  }, [selectedCategory]);

  const validateField = (name: keyof FormValues, value: string): string => {
    const trimmed = value.trim();
    switch (name) {
      case 'fullName':
        if (trimmed.length < 3) return 'Nama lengkap wajib diisi (minimal 3 karakter).';
        return '';
      case 'roleAndHospital':
        if (trimmed.length < 4)
          return 'Jabatan dan nama rumah sakit/instansi wajib diisi.';
        return '';
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return 'Masukkan format alamat email yang valid.';
        return '';
      }
      case 'phone': {
        const digitsOnly = trimmed.replace(/\D/g, '');
        if (digitsOnly.length < 9)
          return 'Nomor telepon/WhatsApp minimal 9 digit angka.';
        return '';
      }
      case 'message':
        if (trimmed.length < 20)
          return `Pesan detail minimal 20 karakter (saat ini ${trimmed.length} karakter).`;
        return '';
      default:
        return '';
    }
  };

  const getAllErrors = (form: FormValues): FormErrors => {
    const errors: FormErrors = {};
    (Object.keys(form) as (keyof FormValues)[]).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) errors[key] = err;
    });
    return errors;
  };

  const currentErrors = getAllErrors(values);

  const handleChange = (
    name: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (name === 'category') {
      onCategoryChange(value as ConsultationCategory);
    }
  };

  const handleBlur = (name: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      roleAndHospital: true,
      email: true,
      phone: true,
      category: true,
      message: true,
    });

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    setSubmittedData(values);
  };

  const buildWhatsAppUrl = (data: FormValues) => {
    const text = [
      `Halo Tim ${COMPANY_CONFIG.companyName} (${COMPANY_CONFIG.brandName}),`,
      '',
      `Saya ingin berkonsultasi terkait: *${data.category}*`,
      `Nama: ${data.fullName}`,
      `Jabatan & Instansi: ${data.roleAndHospital}`,
      `Email: ${data.email}`,
      `No. Telepon/WA: ${data.phone}`,
      '',
      `Detail Kebutuhan:`,
      data.message,
    ].join('\n');

    return `https://wa.me/${COMPANY_CONFIG.whatsappNumberRaw}?text=${encodeURIComponent(
      text
    )}`;
  };

  const scrollToFormInput = () => {
    const el = document.getElementById('contact-full-name');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus();
    }
  };

  return (
    <>
      {/* Full-Width Deep Navy Closing CTA Banner */}
      <section className="bg-[#0B2C5F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-balance">
              Siap Meningkatkan Layanan Haemodialisa &amp; Fasilitas Medis Rumah Sakit
              Anda?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-100">
              Diskusikan skema Kerja Sama Operasional (KSO) yang adaptif dan
              menguntungkan bersama tim ahli PT Foremed Indo Industri.
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={scrollToFormInput}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#0B2C5F] text-sm sm:text-base font-bold hover:bg-[#EBF3FA] transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Hubungi Tim Kami Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-3">
              HUBUNGI KAMI
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
              Konsultasi KSO &amp; Pengadaan Alat Kesehatan
            </h2>
            <p className="mt-4 text-base text-[#475569] leading-relaxed">
              Sampaikan kebutuhan fasilitas medis rumah sakit Anda. Tim bisnis dan teknis
              kami siap menjadwalkan presentasi proposal serta simulasi KSO.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Office Info, Google Maps, Social Media */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-7 space-y-5">
                <h3 className="font-display text-lg font-bold text-[#0B2C5F]">
                  Informasi Kantor Pusat
                </h3>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B2C5F]">Alamat Kantor</p>
                    <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                      {COMPANY_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B2C5F]">Email Resmi</p>
                    <a
                      href={`mailto:${COMPANY_CONFIG.email}`}
                      className="mt-1 inline-block text-sm font-medium text-[#1D63B8] hover:underline"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B2C5F]">
                      WhatsApp Konsultasi
                    </p>
                    <a
                      href={`https://wa.me/${COMPANY_CONFIG.whatsappNumberRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-[#0F172A] hover:text-[#1D63B8] tabular-nums"
                    >
                      {COMPANY_CONFIG.whatsappNumberDisplay}
                    </a>
                  </div>
                </div>

                {/* Official Social Media Links */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-semibold text-[#0B2C5F] mb-3">
                    Kanal Resmi PT Foremed Indo Industri
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={COMPANY_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn resmi PT Foremed Indo Industri"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#0B2C5F] hover:border-[#1D63B8] hover:text-[#1D63B8] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={COMPANY_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram resmi FII Kidney Health"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#0B2C5F] hover:border-[#1D63B8] hover:text-[#1D63B8] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={COMPANY_CONFIG.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube resmi FII Kidney Health"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#0B2C5F] hover:border-[#1D63B8] hover:text-[#1D63B8] transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#F8FAFC]">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Lokasi Kantor PT Foremed Indo Industri Jakarta Barat"
                    src={COMPANY_CONFIG.googleMapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <span className="text-[#475569] truncate">
                    Tambora, Jakarta Barat 11330
                  </span>
                  <a
                    href={COMPANY_CONFIG.googleMapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#1D63B8] hover:underline shrink-0"
                  >
                    <span>Buka Peta</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
                {submittedData ? (
                  <div className="py-6 text-center max-w-lg mx-auto">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold text-[#0F172A]">
                      Permintaan Konsultasi Diterima
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base text-[#475569] leading-relaxed">
                      Terima kasih,{' '}
                      <span className="font-semibold text-[#0F172A]">
                        {submittedData.fullName}
                      </span>
                      . Ringkasan pengajuan untuk kategori{' '}
                      <span className="font-semibold text-[#1D63B8]">
                        {submittedData.category}
                      </span>{' '}
                      telah tercatat dan siap ditindaklanjuti oleh tim kemitraan kami.
                    </p>

                    <div className="mt-6 rounded-xl bg-[#F8FAFC] border border-slate-200 p-4 text-left text-xs sm:text-sm space-y-1.5 text-[#475569]">
                      <p>
                        <span className="font-semibold text-[#0F172A]">Instansi:</span>{' '}
                        {submittedData.roleAndHospital}
                      </p>
                      <p>
                        <span className="font-semibold text-[#0F172A]">Email:</span>{' '}
                        {submittedData.email}
                      </p>
                      <p>
                        <span className="font-semibold text-[#0F172A]">
                          Telepon / WA:
                        </span>{' '}
                        {submittedData.phone}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={buildWhatsAppUrl(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Lanjutkan via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmittedData(null);
                          setValues({
                            fullName: '',
                            roleAndHospital: '',
                            email: '',
                            phone: '',
                            category: selectedCategory,
                            message: '',
                          });
                          setTouched({});
                        }}
                        className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#475569] hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
                      >
                        Kirim Pertanyaan Lain
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F172A]">
                        Formulir Pengajuan Proposal &amp; Konsultasi
                      </h3>
                      <p className="mt-1 text-sm text-[#475569]">
                        Lengkapi data di bawah ini untuk mendapatkan respon cepat dari
                        tim spesialis KSO kami.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-full-name"
                          className="block text-sm font-semibold text-[#0F172A] mb-1.5"
                        >
                          Nama Lengkap *
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          value={values.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          onBlur={() => handleBlur('fullName')}
                          placeholder="Dr. Hendra Wijaya, MARS"
                          aria-invalid={Boolean(touched.fullName && currentErrors.fullName)}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 ${
                            touched.fullName && currentErrors.fullName
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                              : 'border-slate-300 focus:border-[#1D63B8] focus:ring-[#1D63B8]/15'
                          }`}
                        />
                        {touched.fullName && currentErrors.fullName && (
                          <p className="mt-1.5 text-xs text-red-600 font-medium">
                            {currentErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-role-hospital"
                          className="block text-sm font-semibold text-[#0F172A] mb-1.5"
                        >
                          Jabatan &amp; Nama Rumah Sakit/Instansi *
                        </label>
                        <input
                          id="contact-role-hospital"
                          type="text"
                          value={values.roleAndHospital}
                          onChange={(e) =>
                            handleChange('roleAndHospital', e.target.value)
                          }
                          onBlur={() => handleBlur('roleAndHospital')}
                          placeholder="Direktur Utama — RS Harapan Sehat"
                          aria-invalid={Boolean(
                            touched.roleAndHospital && currentErrors.roleAndHospital
                          )}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 ${
                            touched.roleAndHospital && currentErrors.roleAndHospital
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                              : 'border-slate-300 focus:border-[#1D63B8] focus:ring-[#1D63B8]/15'
                          }`}
                        />
                        {touched.roleAndHospital && currentErrors.roleAndHospital && (
                          <p className="mt-1.5 text-xs text-red-600 font-medium">
                            {currentErrors.roleAndHospital}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-[#0F172A] mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={values.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="pengadaan@rumahsakit.co.id"
                          aria-invalid={Boolean(touched.email && currentErrors.email)}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 ${
                            touched.email && currentErrors.email
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                              : 'border-slate-300 focus:border-[#1D63B8] focus:ring-[#1D63B8]/15'
                          }`}
                        />
                        {touched.email && currentErrors.email && (
                          <p className="mt-1.5 text-xs text-red-600 font-medium">
                            {currentErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-semibold text-[#0F172A] mb-1.5"
                        >
                          Nomor Telepon / WhatsApp *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={values.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          placeholder="0812-xxxx-xxxx"
                          aria-invalid={Boolean(touched.phone && currentErrors.phone)}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm tabular-nums text-[#0F172A] focus:outline-none focus:ring-2 ${
                            touched.phone && currentErrors.phone
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                              : 'border-slate-300 focus:border-[#1D63B8] focus:ring-[#1D63B8]/15'
                          }`}
                        />
                        {touched.phone && currentErrors.phone && (
                          <p className="mt-1.5 text-xs text-red-600 font-medium">
                            {currentErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-category"
                        className="block text-sm font-semibold text-[#0F172A] mb-1.5"
                      >
                        Kategori Kebutuhan *
                      </label>
                      <select
                        id="contact-category"
                        value={values.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
                      >
                        {CONSULTATION_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Pesan Detail Kebutuhan *
                        </label>
                        <span className="text-xs text-[#475569] tabular-nums">
                          {values.message.trim().length} / min. 20 karakter
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={values.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder="Jelaskan rencana kapasitas unit mesin haemodialisa, lokasi rumah sakit, atau kebutuhan pengadaan alkes yang ingin didiskusikan..."
                        aria-invalid={Boolean(touched.message && currentErrors.message)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 ${
                          touched.message && currentErrors.message
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                            : 'border-slate-300 focus:border-[#1D63B8] focus:ring-[#1D63B8]/15'
                        }`}
                      />
                      {touched.message && currentErrors.message && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {currentErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-[#475569]">
                        Dengan mengirim formulir ini, Anda menyetujui komunikasi tindak
                        lanjut dari tim kemitraan PT Foremed Indo Industri.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors whitespace-nowrap shrink-0 shadow-xs"
                      >
                        <span>Kirim Permintaan Konsultasi</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
