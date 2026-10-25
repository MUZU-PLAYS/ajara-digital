import React, { useState } from 'react';
///import founderImage from './assets/aistudio/muzammil.jpeg';

// Screen Navigation
export type Screen = 'home' | 'demos' | 'pricing' | 'enquiry' | 'more';
export type DemoCategory = 'all' | 'food' | 'retail' | 'stay' | 'wellness';

interface DemoCard {
  id: string;
  category: 'food' | 'retail' | 'stay' | 'wellness';
  badge: string;
  title: string;
  subtitle: string;
  icon: string;
  imgUrl: string;
  fallbackSvg: string;
  altText: string;
  tags: string[];
  description: string;
}

interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  badge?: string;
  isPopular?: boolean;
  scope: string;
  timeline: string;
  revisions: string;
  features: string[];
}

const BUSINESS_WHATSAPP_NUMBER = '919322493776';
const DISPLAY_WHATSAPP_NUMBER = '+91 93224 93776';

// Reusable SVG fallbacks for offline or network image failures
const SVG_FALLBACK_FOOD = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%2300251c" width="600" height="400"/><text fill="%2346edc5" font-family="sans-serif" font-size="28" font-weight="bold" x="50%" y="45%" text-anchor="middle">Hotel Ajara Darbar</text><text fill="%23b9cbbf" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle">Maharashtrian Special Thali Demo</text></svg>';
const SVG_FALLBACK_RETAIL = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%2300251c" width="600" height="400"/><text fill="%2346edc5" font-family="sans-serif" font-size="28" font-weight="bold" x="50%" y="45%" text-anchor="middle">Mauli Sarees &amp; Menswear</text><text fill="%23b9cbbf" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle">Traditional Silk &amp; Clothing Shop Demo</text></svg>';
const SVG_FALLBACK_STAY = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%2300251c" width="600" height="400"/><text fill="%2346edc5" font-family="sans-serif" font-size="28" font-weight="bold" x="50%" y="45%" text-anchor="middle">Sahyadri Valley Homestay</text><text fill="%23b9cbbf" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle">Agro Tourism &amp; Cottages Demo</text></svg>';
const SVG_FALLBACK_WELLNESS = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%2300251c" width="600" height="400"/><text fill="%2346edc5" font-family="sans-serif" font-size="28" font-weight="bold" x="50%" y="45%" text-anchor="middle">Glamour Hair &amp; Beauty Studio</text><text fill="%23b9cbbf" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle">Salon &amp; Bridal Studio Demo</text></svg>';

const DEMO_CARDS: DemoCard[] = [
  {
    id: 'food',
    category: 'food',
    badge: 'खाद्यपदार्थ व हॉटेल्स',
    title: 'Hotel Ajara Darbar & Khanawal',
    subtitle: 'Amboli Road • Veg & Non-Veg Special Thali',
    icon: 'restaurant_menu',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFWxGvA_hTGMgzzeEDxD885Wnrucpf66DcWCY8R2pB82-BRdLXIFbZ2uvQ0HQwVd3kKxQY2lMqNG32a3PFH2GiQAbGuGolTfnq9B4EIyqEICBzLOr-LSHufTTyBnsv2f0cAm7_H4xFso-6LN5PBJ2gLiKKQ-VWV3TKxYZWsl43DzoyRE0mRV2MWrcTImL4SNUmb2WMepCZH2kxsrq40jWzcbg4di2b5UuDYaImlO0kySVi1eauExM',
    fallbackSvg: SVG_FALLBACK_FOOD,
    altText: 'Traditional Maharashtrian thali with copper bowls, fresh bhakri, and aromatic local spices served in an Ajara dining setting',
    tags: ['QR Digital Menu', 'WhatsApp Parcel Order', 'Daily Spl. Thali'],
    description: 'Designed for quick customer browsing with a scannable QR menu, daily thali rates, and direct WhatsApp parcel orders.',
  },
  {
    id: 'retail',
    category: 'retail',
    badge: 'कापड व साडी दालन',
    title: 'Mauli Sarees & Menswear',
    subtitle: 'Main Road Bazaar, Ajara',
    icon: 'styler',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWdZcHHL86Q4THN5mo31mHf9hYhwxpKipG_wc1mC2qK9AGb-M1VglKlpm1HI6ctRB_sbNQD_ayOsejgxAnb5C2WkhDzxVbl8fB_dUWiwCX-D0suge7KH8MojmFMBZb6VvHbfZeHMMry7w1qyT2Fu1WTAUJA5q-6K1SQlT-4HeOxsatfahlKQK9VVkpeQDFcZ6-tznsPzzLomO4IYKQSRnYXUu5lAF-tvHOw7rHSrOEjEy6px30h9c',
    fallbackSvg: SVG_FALLBACK_RETAIL,
    altText: 'Silk and Paithani sarees neatly displayed on wooden boutique shelves in an Indian traditional clothing shop',
    tags: ['Festive Lookbook', 'New Stock Gallery', 'Direct Inquiry'],
    description: 'Showcases seasonal arrival saree collections, festive menswear, and gives customers a direct tap to ask about stock on WhatsApp.',
  },
  {
    id: 'stay',
    category: 'stay',
    badge: 'पर्यटन व ॲग्रो होमस्टे',
    title: 'Sahyadri Valley Homestay & Rooms',
    subtitle: 'Ajara-Amboli Belt • Family & Group Stays',
    icon: 'cottage',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4FIHHcbHYTC6xhb-A6t4M0a-81KlbOJ1BJIkOmdbxkLEhD6D2pbG7DOd3nZ5QpSN3L4r415arvUgDZCh39ySquLj_9TH9hzjNVNfYsLuimvgF27Fl8_DTRYVzTxXwToGEjEkF6n0cyVI_OvZDWDxvHg1ukUQi9U79-THTGmKhmxfzq1UO3OPkhP4w4o_JR1XHti3LlQxx3R9QPg90E-5pnZuKQ-XDXj6NbU3IZZfYETt6v5fZ7Q',
    fallbackSvg: SVG_FALLBACK_STAY,
    altText: 'Lush green Sahyadri hills agro homestay cottage near Ajara Ghats with serene outdoor patio',
    tags: ['Room Photo Tour', 'Tariff Cards', 'WhatsApp Booking Inquiry'],
    description: 'Highlights room amenities, seasonal tariffs, location map, and enables tourists heading to Amboli to inquire directly on WhatsApp.',
  },
  {
    id: 'wellness',
    category: 'wellness',
    badge: 'सौंदर्य व सलून',
    title: 'Glamour Hair & Beauty Studio',
    subtitle: 'Near Bus Stand, Ajara',
    icon: 'spa',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdo6T1xDG3FhdFPkk7j6ArlpWmQEHOxafjMLclI4dOrfjC6OdUjZ-k28E5GixqLMOmc1QzL10bZ3xxMcILNKArmKByA81-7sdHmzstDgHXBgcJPUBe3XfLYAjFOJGmtKBiLS_4fNz743NOXDX1AZ9P8OBiNHyQgKg7eeYdhoyq17Lnt8IthddAvIH1-b0HS-aDmsgUv94Wv_c6eNDuugx5quq78WnuVvtt3m4eWRiyUwvYMiC2dmQ',
    fallbackSvg: SVG_FALLBACK_WELLNESS,
    altText: 'Modern hair styling salon studio interior with clean mirror stations and beauty care setup',
    tags: ['Bridal Packages', 'Service Rate List', 'WhatsApp Appointment'],
    description: 'Displays transparent grooming rates, bridal packages, and allows local clients to schedule appointments via WhatsApp.',
  },
];

const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Web Presence',
    tagline: 'Ideal for Clinics, Doctors & Single Retail Shops',
    price: '₹3,999',
    badge: 'Digital Visiting Card',
    scope: 'Fixed Scope: 1 Sleek Mobile-First Page',
    timeline: '7–14 Working Days (starts after required content & initial advance)',
    revisions: '1 Revision Round included',
    features: [
      '1 Custom Mobile-First Landing Page',
      '1 Revision Round to refine text and layout',
      '7–14 Working Days delivery timeline',
      'Direct Click-to-WhatsApp Chat Integration',
      'Google Business Profile Setup Assistance & Local SEO Basics',
      'Domain & Cloud Hosting setup assistance (provider fees separate; renewals at host rates)',
      '30-Day Post-Launch Support (minor bug fixes and initial guidance)',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Multi-Page',
    tagline: 'Hotels, Salons, Bakeries & Retail Stores',
    price: '₹7,499',
    badge: 'Recommended • शिफारस केलेले',
    isPopular: true,
    scope: 'Fixed Scope: Up to 5 Custom Mobile Pages',
    timeline: '14–21 Working Days (starts after required content & initial advance)',
    revisions: '2 Revision Rounds included',
    features: [
      'Up to 5 Custom Mobile Pages (Home, Menu/Products, About, Gallery, Contact)',
      '2 Revision Rounds to refine content and layouts',
      '14–21 Working Days delivery timeline',
      'Digital Menu or Product Catalog (up to 25 items)',
      'Direct Click-to-WhatsApp Inquiry on all items',
      'Google Business Profile Setup Assistance & Local SEO Basics',
      'Domain & Cloud Hosting setup assistance (provider fees separate; renewals at host rates)',
      '30-Day Post-Launch Support (minor bug fixes and initial guidance)',
    ],
  },
  {
    id: 'business-plus',
    name: 'Business Plus',
    tagline: 'Agro Homestays, Resorts & Academies',
    price: '₹12,999',
    badge: 'Comprehensive Scope',
    scope: 'Custom Scope & Requirements agreed in advance',
    timeline: '14–21 Working Days (starts after required content & initial advance)',
    revisions: '3 Revision Rounds included',
    features: [
      'Custom Multi-Page Architecture (Agreed in advance)',
      '3 Revision Rounds included during development',
      'Bilingual Marathi + English Language Switcher',
      'Custom WhatsApp Booking / Inquiry Form (Direct to your WhatsApp, zero complex database required)',
      'Photo Showcase & High-Res Gallery for Rooms / Facility',
      'Google Business Profile Setup Assistance & Local SEO Basics',
      'Domain & Cloud Hosting setup assistance (provider fees separate; renewals at host rates)',
      '30-Day Post-Launch Support (minor bug fixes and initial guidance)',
    ],
  },
];

const CATEGORY_MAP: Record<string, string> = {
  hotel: 'हॉटेल / खानावळ / बेकरी (Dining & Food)',
  clothing: 'कापड / साडी / गारमेंट्स (Clothing & Fashion)',
  homestay: 'रिसॉर्ट / ॲग्रो होमस्टे (Homestay & Tourism)',
  salon: 'सलून / ब्युटी पार्लर (Salon & Wellness)',
  clinic: 'दवाखाना / लॅब / मेडिकल (Doctor & Clinic)',
  retail: 'किराणा / जनरल स्टोअर / हार्डवेअर (Retail)',
  academy: 'क्लासेस / शाळा / कोचिंग (Academy)',
  other: 'इतर स्थानिक व्यवसाय (Other Local Business)',
};

export default function App() {
  // Screen state
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  // Demos state
  const [demoCategory, setDemoCategory] = useState<DemoCategory>('all');
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  // Enquiry form persistent state
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [bizType, setBizType] = useState('hotel');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Form feedback state
  const [validationError, setValidationError] = useState<string | null>(null);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);

  // Helper to switch screens and scroll to top
  const navigateTo = (screen: Screen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Carry Demo into Enquiry Screen
  const handleSelectDemo = (demo: DemoCard) => {
    setSelectedDemo(demo.title);
    if (demo.category === 'food') setBizType('hotel');
    if (demo.category === 'retail') setBizType('clothing');
    if (demo.category === 'stay') setBizType('homestay');
    if (demo.category === 'wellness') setBizType('salon');
    setValidationError(null);
    navigateTo('enquiry');
  };

  // Carry Package into Enquiry Screen
  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackage(`${pkg.name} (${pkg.price})`);
    setValidationError(null);
    navigateTo('enquiry');
  };

  // Image error fallback handler
  const handleImageError = (id: string) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  // Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanShop = shopName.trim();
    const cleanOwner = ownerName.trim();
    const cleanPhone = phone.replace(/[^0-9]/g, '');

    if (!cleanShop) {
      setValidationError('कृपया तुमच्या व्यवसायाचे नाव प्रविष्ट करा (Please enter your business name).');
      return;
    }
    if (!cleanOwner) {
      setValidationError('कृपया मालकाचे किंवा संपर्काचे नाव प्रविष्ट करा (Please enter owner name).');
      return;
    }
    if (cleanPhone.length !== 10) {
      setValidationError('कृपया अचूक १० अंकी भारतीय WhatsApp मोबाईल नंबर प्रविष्ट करा (Mobile number must be exactly 10 digits).');
      return;
    }

    const categoryText = CATEGORY_MAP[bizType] || bizType;

    // Build truthful message structure
    let message = `नमस्ते AjaraDigital, मला माझ्या व्यवसायासाठी वेबसाईट संदर्भात माहिती हवी आहे.\n\n• व्यवसाय: ${cleanShop}\n• नाव: ${cleanOwner}\n• मोबाईल: +91 ${cleanPhone}\n• प्रकार: ${categoryText}`;

    if (selectedPackage) {
      message += `\n• निवडलेले पॅकेज: ${selectedPackage}`;
    }
    if (selectedDemo) {
      message += `\n• नमुना संदर्भ (Demo): ${selectedDemo}`;
    }
    if (additionalNotes.trim()) {
      message += `\n• अधिक माहिती / गरजा: ${additionalNotes.trim()}`;
    }

    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encoded}`;

    setPreparedWhatsAppUrl(targetUrl);

    // Attempt to open WhatsApp window safely
    try {
      const opened = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        // Handled via visible fallback UI in the form
      }
    } catch {
      // Handled via visible fallback UI in the form
    }
  };

  const filteredDemos = DEMO_CARDS.filter(
    (card) => demoCategory === 'all' || card.category === demoCategory
  );

  return (
    <div className="bg-[#001711] font-body-md text-[#b5eedb] flex flex-col min-h-screen selection:bg-[#00feb4] selection:text-[#003825]">
      
      {/* ============================================================ */}
      {/* PERSISTENT HEADER (Responsive Desktop Nav + Mobile Brand)     */}
      {/* ============================================================ */}
      <header className="w-full px-4 py-3 bg-[#00110c] shadow-md sticky top-0 z-40 border-b border-[#00251c]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand Lockup */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00feb4] rounded-lg p-1"
            aria-label="AjaraDigital Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#f4fff6] flex items-center justify-center text-[#003825] font-headline-md font-bold relative shadow-sm shrink-0">
              <span>A</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#45ffba]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="font-headline-sm font-extrabold tracking-tight text-[#b5eedb]">Ajara</span>
                <span className="font-headline-sm font-extrabold tracking-tight text-[#f4fff6]">Digital</span>
              </div>
              <span className="font-label-md text-[#46edc5] tracking-wider uppercase text-[0.65rem] -mt-1 font-semibold">
                Websites • Ajara 416505
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#002019] p-1.5 rounded-full border border-[#00251c]" aria-label="Desktop primary navigation">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className={`px-3.5 py-1.5 rounded-full font-label-md font-semibold transition-all cursor-pointer ${
                activeScreen === 'home'
                  ? 'bg-[#f4fff6] text-[#003825] shadow-sm'
                  : 'text-[#b9cbbf] hover:text-[#b5eedb] hover:bg-[#00251c]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigateTo('demos')}
              className={`px-3.5 py-1.5 rounded-full font-label-md font-semibold transition-all cursor-pointer ${
                activeScreen === 'demos'
                  ? 'bg-[#f4fff6] text-[#003825] shadow-sm'
                  : 'text-[#b9cbbf] hover:text-[#b5eedb] hover:bg-[#00251c]'
              }`}
            >
              Demos
            </button>
            <button
              type="button"
              onClick={() => navigateTo('pricing')}
              className={`px-3.5 py-1.5 rounded-full font-label-md font-semibold transition-all cursor-pointer ${
                activeScreen === 'pricing'
                  ? 'bg-[#f4fff6] text-[#003825] shadow-sm'
                  : 'text-[#b9cbbf] hover:text-[#b5eedb] hover:bg-[#00251c]'
              }`}
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => navigateTo('enquiry')}
              className={`px-3.5 py-1.5 rounded-full font-label-md font-semibold transition-all cursor-pointer ${
                activeScreen === 'enquiry'
                  ? 'bg-[#f4fff6] text-[#003825] shadow-sm'
                  : 'text-[#b9cbbf] hover:text-[#b5eedb] hover:bg-[#00251c]'
              }`}
            >
              Enquiry
            </button>
            <button
              type="button"
              onClick={() => navigateTo('more')}
              className={`px-3.5 py-1.5 rounded-full font-label-md font-semibold transition-all cursor-pointer ${
                activeScreen === 'more'
                  ? 'bg-[#f4fff6] text-[#003825] shadow-sm'
                  : 'text-[#b9cbbf] hover:text-[#b5eedb] hover:bg-[#00251c]'
              }`}
            >
              More &amp; FAQ
            </button>
          </nav>

          {/* Quick Direct WhatsApp Header Action */}
          <a
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#f4fff6] text-[#003825] font-label-md transition-all active:scale-95 shadow-sm hover:bg-[#45ffba] shrink-0"
            href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('नमस्ते AjaraDigital, मला माझ्या व्यवसायासाठी वेबसाईटची माहिती हवी आहे.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp contact with AjaraDigital"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>संपर्क करा</span>
          </a>

        </div>
      </header>

      {/* ============================================================ */}
      {/* SCREEN ROUTING & CONTENT CONTAINER                           */}
      {/* ============================================================ */}
      <main className="flex-1 w-full max-w-5xl mx-auto pb-24 md:pb-12">

        {/* ------------------------------------------------------------ */}
        {/* SCREEN 1: HOME                                               */}
        {/* ------------------------------------------------------------ */}
        {activeScreen === 'home' && (
          <div className="flex flex-col animate-fadeIn">
            
            {/* HERO SECTION */}
            <section className="w-full px-4 pt-6 pb-8 bg-gradient-to-b from-[#00110c] via-[#001711] to-[#001711] flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00feb4]/10 text-[#f4fff6] font-label-md self-start border border-[#00feb4]/20">
                <span className="material-symbols-outlined text-[#46edc5] text-[18px]">location_on</span>
                <span className="font-medium text-[0.8rem] leading-tight">Ajara (PIN 416505) • आपला व्यवसाय आता डिजिटल</span>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-headline-lg-mobile text-[#b5eedb] font-extrabold tracking-tight leading-tight md:text-3xl">
                  Your Business Deserves to Be Online.
                </h1>
                <p className="font-label-marathi text-[#f4fff6] font-semibold text-[1.05rem] leading-snug">
                  आजऱ्यातील दुकाने, हॉटेल्स आणि स्थानिक व्यवसायांसाठी आधुनिक वेबसाईट!
                </p>
                <p className="font-body-md text-[#b9cbbf] leading-relaxed text-[0.95rem] pt-1">
                  Affordable, transparent, fixed-scope websites crafted by a local independent designer for Ajara's shops, clinics, hotels, and retail. Showcase products, get setup assistance for your Google Business Profile, and receive direct customer WhatsApp messages.
                </p>
              </div>

              {/* Action Buttons to Switch Screens */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigateTo('enquiry')}
                  className="w-full sm:w-auto px-6 h-12 rounded-lg bg-[#f4fff6] text-[#003825] font-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform hover:bg-[#45ffba] cursor-pointer"
                >
                  <span>Get Your Business Online</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('demos')}
                  className="w-full sm:w-auto px-5 h-12 rounded-lg bg-[#003126] text-[#b5eedb] font-label-lg font-semibold flex items-center justify-center gap-2 active:bg-[#00251c] transition-colors border border-[#3a4a41]/50 hover:bg-[#003d30] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#46edc5]">visibility</span>
                  <span>View Sample Demos (नमुने पहा)</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('pricing')}
                  className="w-full sm:w-auto px-5 h-12 rounded-lg bg-[#002019] text-[#b5eedb] font-label-lg font-semibold flex items-center justify-center gap-2 active:bg-[#00251c] transition-colors border border-[#00251c] hover:bg-[#00251c] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#46edc5]">sell</span>
                  <span>View Pricing Plans (दर पत्रक)</span>
                </button>
              </div>

              {/* Quick Trust Bar */}
              <div className="w-full p-4 rounded-xl bg-[#002019] flex flex-col gap-2 shadow-sm mt-1 border border-[#00251c]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[#b9cbbf] font-label-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#46edc5] text-[18px]">schedule</span>
                    <span>7–14 Days (One-Page)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#46edc5] text-[18px]">date_range</span>
                    <span>14–21 Days (Multi-Page)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#46edc5] text-[18px]">assignment_turned_in</span>
                    <span>Fixed-Scope One-Time Build</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#46edc5] text-[18px]">smartphone</span>
                    <span>100% Mobile Ready</span>
                  </div>
                </div>
                <p className="text-[0.72rem] text-[#46edc5] leading-normal border-t border-[#00251c] pt-2 mt-1">
                  * Project timelines begin after all required content (photos, text, pricing) &amp; agreed initial milestone advance payment are received.
                </p>
              </div>
            </section>

            {/* LOCAL VALUE PROPOSITION */}
            <section className="w-full px-4 py-8 bg-[#00110c] flex flex-col gap-5 border-t border-[#002019]">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-[#9eebff] uppercase tracking-wider font-bold">स्थानिक बाजारपेठ व गरज</span>
                <h2 className="font-headline-sm text-[#b5eedb] font-bold">Why Ajara Businesses Need a Website Now</h2>
                <p className="font-body-sm text-[#b9cbbf]">More travelers, tourists heading to Amboli, and local shoppers search their phones first.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-[#002019] flex flex-col gap-2 shadow-sm border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5]">
                    <span className="material-symbols-outlined text-[22px]">travel_explore</span>
                  </div>
                  <h3 className="font-title-md text-[#b5eedb] font-bold">Google Business Profile Setup Assistance &amp; Local SEO Basics</h3>
                  <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs">
                    Assistance with creating or claiming your Google Business Profile pin and implementing standard local SEO markup. Helps customers discover accurate opening hours, location, and photos. (Note: Google Business Profile verification depends on Google's policies; search rankings, visibility, and leads cannot be guaranteed).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#002019] flex flex-col gap-2 shadow-sm border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5]">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <h3 className="font-title-md text-[#b5eedb] font-bold">Direct WhatsApp Enquiries (0% Commission)</h3>
                  <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs">
                    Skip high aggregator commissions and middlemen. Customers browse your products or services and tap one button to send you a pre-filled WhatsApp message directly to your phone.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#002019] flex flex-col gap-2 shadow-sm border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5]">
                    <span className="material-symbols-outlined text-[22px]">contact_page</span>
                  </div>
                  <h3 className="font-title-md text-[#b5eedb] font-bold">Professional Digital Visiting Card</h3>
                  <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs">
                    Share your branded link effortlessly via WhatsApp Status, print QR codes on your billing receipts, and build instant trust with local and visiting customers.
                  </p>
                </div>
              </div>
            </section>

            {/* WHAT EVERY WEBSITE INCLUDES */}
            <section className="w-full px-4 py-8 bg-[#001711] flex flex-col gap-5 border-t border-[#00251c]">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-[#46edc5] font-bold uppercase tracking-wider">सर्वोत्तम सुविधा</span>
                <h2 className="font-headline-sm text-[#b5eedb] font-bold">What Every Website Includes</h2>
                <p className="font-body-sm text-[#b9cbbf]">Clean craftsmanship, mobile optimization, and zero proprietary agency lock-in.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">language</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">Domain &amp; Cloud Hosting Setup Assistance</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Configured transparently in your name (.in/.com) with zero vendor lock-in. Domain registration and hosting charges are separate; renewals are billed directly at host actual rates.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">add_location_alt</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">Google Business Profile Assistance &amp; Local SEO</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Guidance on Google Maps location pin and clean local SEO markup so local customers can locate your business. (Rankings, visibility, and approval cannot be guaranteed).</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">1-Click WhatsApp Direct Chat</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Direct click-to-WhatsApp button with pre-filled Marathi or English order/inquiry text straight to your phone.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">photo_library</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">Clean Photo Gallery</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Showcase your showroom, clinic, rooms, or products nicely formatted and optimized for smartphones.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">Service &amp; Rate List (किंमत सूची)</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Clear digital pricing or menu display to save time on repetitive customer phone calls and questions.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-3 border border-[#00251c]">
                  <div className="w-9 h-9 rounded-lg bg-[#00251c] flex items-center justify-center text-[#46edc5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-[0.95rem]">30-Day Post-Launch Support</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs mt-1">Minor bug fixes and initial guidance included for 30 days post-launch. (Does not include redesigns or new feature developments).</p>
                  </div>
                </div>
              </div>

              {/* Call to action Banner to Demos & Pricing */}
              <div className="mt-2 p-5 rounded-2xl bg-[#00251c] border border-[#00feb4]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="font-title-md text-[#f4fff6] font-bold">Ready to see design styles or check pricing?</span>
                  <span className="font-body-sm text-[#b9cbbf] text-xs">Explore sample prototypes for restaurants, clothing stores, and homestays.</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => navigateTo('demos')}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#003126] text-[#b5eedb] font-label-md font-semibold hover:bg-[#003d30] border border-[#3a4a41]/50 cursor-pointer"
                  >
                    View Demos
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('pricing')}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#f4fff6] text-[#003825] font-label-md font-bold hover:bg-[#45ffba] cursor-pointer"
                  >
                    Check Pricing
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SCREEN 2: DEMOS                                              */}
        {/* ------------------------------------------------------------ */}
        {activeScreen === 'demos' && (
          <div className="flex flex-col px-4 py-6 gap-6 animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#05d0aa]/20 text-[#46edc5] font-label-md self-start border border-[#05d0aa]/30">
                <span className="material-symbols-outlined text-[15px]">devices</span>
                <span>काल्पनिक संकल्पना डेमो (Fictional Demo Concepts)</span>
              </div>
              <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl md:text-2xl">
                Sample Design Concepts for Ajara Businesses
              </h2>
              <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs md:text-sm">
                Realistic demo prototypes created to illustrate design styles and user experience for local Ajara businesses. These are illustrative concepts, not claimed past clients. Your website will feature your exact photos, logo, catalog, and pricing.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-1" role="tablist" aria-label="Demo category filter">
              <button
                type="button"
                role="tab"
                aria-selected={demoCategory === 'all'}
                className={`px-3.5 py-1.5 rounded-full font-label-md transition-all cursor-pointer ${
                  demoCategory === 'all'
                    ? 'bg-[#f4fff6] text-[#003825] font-bold shadow-sm'
                    : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126]'
                }`}
                onClick={() => setDemoCategory('all')}
              >
                All Industries ({DEMO_CARDS.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={demoCategory === 'food'}
                className={`px-3.5 py-1.5 rounded-full font-label-md transition-all cursor-pointer ${
                  demoCategory === 'food'
                    ? 'bg-[#f4fff6] text-[#003825] font-bold shadow-sm'
                    : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126]'
                }`}
                onClick={() => setDemoCategory('food')}
              >
                Food &amp; Hotels
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={demoCategory === 'retail'}
                className={`px-3.5 py-1.5 rounded-full font-label-md transition-all cursor-pointer ${
                  demoCategory === 'retail'
                    ? 'bg-[#f4fff6] text-[#003825] font-bold shadow-sm'
                    : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126]'
                }`}
                onClick={() => setDemoCategory('retail')}
              >
                Clothing &amp; Saree
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={demoCategory === 'stay'}
                className={`px-3.5 py-1.5 rounded-full font-label-md transition-all cursor-pointer ${
                  demoCategory === 'stay'
                    ? 'bg-[#f4fff6] text-[#003825] font-bold shadow-sm'
                    : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126]'
                }`}
                onClick={() => setDemoCategory('stay')}
              >
                Homestays
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={demoCategory === 'wellness'}
                className={`px-3.5 py-1.5 rounded-full font-label-md transition-all cursor-pointer ${
                  demoCategory === 'wellness'
                    ? 'bg-[#f4fff6] text-[#003825] font-bold shadow-sm'
                    : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126]'
                }`}
                onClick={() => setDemoCategory('wellness')}
              >
                Salon &amp; Clinic
              </button>
            </div>

            {/* Demo Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredDemos.map((card) => {
                const isImgBroken = brokenImages[card.id];
                return (
                  <div
                    key={card.id}
                    className="demo-card rounded-xl bg-[#00110c] overflow-hidden shadow-sm flex flex-col border border-[#00251c]"
                  >
                    <div className="relative w-full h-48 bg-[#00251c] overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={isImgBroken ? card.fallbackSvg : card.imgUrl}
                        alt={card.altText}
                        loading="lazy"
                        onError={() => handleImageError(card.id)}
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#001711]/80 text-[#b5eedb] font-label-md backdrop-blur-sm border border-[#3a4a41]/40">
                        {card.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#f4fff6] text-[#003825] font-label-md font-semibold text-xs shadow-sm">
                        काल्पनिक संकल्पना डेमो (Sample Concept)
                      </div>
                    </div>

                    <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-title-md text-[#b5eedb] font-bold leading-snug">{card.title}</h3>
                            <p className="font-body-sm text-[#46edc5] text-xs">{card.subtitle}</p>
                          </div>
                          <span className="material-symbols-outlined text-[#46edc5] text-[24px] shrink-0">{card.icon}</span>
                        </div>
                        <p className="font-body-sm text-[#b9cbbf] text-xs leading-relaxed">
                          {card.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {card.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded bg-[#00251c] font-label-md text-[#b9cbbf] text-[0.7rem] border border-[#003126]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#002019]">
                        <button
                          type="button"
                          onClick={() => handleSelectDemo(card)}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#f4fff6] text-[#003825] font-label-md font-bold text-center active:scale-[0.98] hover:bg-[#45ffba] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Request Similar Website</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                        <a
                          href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello AjaraDigital, I am interested in a website similar to your concept demo: "${card.title}". Please share details.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-lg bg-[#003126] text-[#b5eedb] font-label-md font-semibold text-center hover:bg-[#003d30] border border-[#3a4a41]/40 transition-colors flex items-center justify-center gap-1"
                          aria-label={`Ask about ${card.title} on WhatsApp`}
                        >
                          <span className="material-symbols-outlined text-[16px] text-[#46edc5]">chat</span>
                          <span>Quick Chat</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footnote about concepts without verification badge */}
            <div className="p-3.5 rounded-lg bg-[#002019] flex items-start gap-2.5 text-[#b9cbbf] border border-[#00251c]">
              <span className="material-symbols-outlined text-[#46edc5] text-[20px] shrink-0 mt-0.5">info</span>
              <p className="font-label-md leading-relaxed text-xs">
                <strong>काल्पनिक संकल्पना डेमो (Illustrative Concepts):</strong> These samples demonstrate design structure, typography, and mobile-first layouts suitable for Ajara. Tapping "Request Similar Website" transfers this demo as a reference to your enquiry form.
              </p>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SCREEN 3: PRICING                                            */}
        {/* ------------------------------------------------------------ */}
        {activeScreen === 'pricing' && (
          <div className="flex flex-col px-4 py-6 gap-6 animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#05d0aa]/20 text-[#46edc5] font-label-md self-start border border-[#05d0aa]/30">
                <span className="material-symbols-outlined text-[15px]">sell</span>
                <span>पारदर्शक दर (Estimated Pricing • Agreed Scope)</span>
              </div>
              <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl md:text-2xl">
                Transparent Packages &amp; Estimated Rates
              </h2>
              <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs md:text-sm">
                Fixed-scope one-time website creation. No recurring agency retainers or hidden fees. Final price depends on your confirmed requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRICING_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-5 rounded-2xl flex flex-col justify-between gap-4 shadow-sm relative border ${
                    pkg.isPopular
                      ? 'bg-[#003d30]/60 border-[#00feb4]/40 shadow-md'
                      : 'bg-[#002019] border-[#00251c]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-0 right-0 bg-[#f4fff6] text-[#003825] font-label-md px-3 py-1 rounded-bl-lg font-bold text-xs tracking-wider uppercase">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <div className="pt-2">
                      <h3 className="font-title-md text-[#b5eedb] font-bold text-lg">{pkg.name}</h3>
                      <p className="font-body-sm text-[#46edc5] text-xs">{pkg.tagline}</p>
                    </div>

                    <div className="flex items-baseline gap-1.5 py-1 border-b border-[#00251c]">
                      <span className="font-headline-md font-extrabold text-[#f4fff6] text-2xl">{pkg.price}</span>
                      <span className="font-body-sm text-[#46edc5] text-xs">Estimated Price (अंदाजे दर)</span>
                    </div>

                    <div className="flex flex-col gap-1.5 text-xs text-[#46edc5]">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">devices</span>
                        <span className="font-semibold">{pkg.scope}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">update</span>
                        <span>{pkg.revisions}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span>{pkg.timeline}</span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2 font-body-sm text-[#b9cbbf] text-xs pt-2 border-t border-[#00251c]">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#46edc5] text-[16px] shrink-0 mt-0.5">check_circle</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg)}
                    className={`mt-4 w-full py-3 rounded-lg font-label-md text-center font-bold active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      pkg.isPopular
                        ? 'bg-[#f4fff6] text-[#003825] shadow-sm hover:bg-[#45ffba]'
                        : 'bg-[#00251c] text-[#b5eedb] hover:bg-[#003126] border border-[#3a4a41]/40'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Scope, Hosting & Renewal Policy Callout Box */}
            <div className="p-4 rounded-xl bg-[#002019] border border-[#3a4a41]/50 flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-[#f4fff6] font-label-md font-bold">
                <span className="material-symbols-outlined text-[18px] text-[#46edc5]">info</span>
                <span>महत्त्वाचे नियम व अटी (Scope, Hosting &amp; Renewal Terms)</span>
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-[#b9cbbf] leading-relaxed list-disc pl-4">
                <li><strong>Fixed Scope:</strong> Every project is a fixed-scope, one-time build. Subsequent extra pages or major structural redesigns after delivery are quoted separately.</li>
                <li><strong>Domain &amp; Hosting Fees:</strong> Domain registration (.in/.com) and hosting fees are separate third-party charges unless explicitly agreed otherwise in writing. Annual renewals are billed directly at the host registrar's published rates with 100% client account ownership.</li>
                <li><strong>Revision Limits:</strong> Starter includes 1 revision round, Professional includes 2, and Business Plus includes 3. Revisions are conducted during the staging review phase.</li>
                <li><strong>30-Day Post-Launch Support:</strong> Includes minor bug fixes, correcting typos, and initial operating guidance. It does not include major redesigns, ongoing content writing, or new feature developments.</li>
                <li><strong>Timelines:</strong> Standard timelines are 7–14 working days for single-page and 14–21 working days for multi-page. Work starts once all required text, images, and the agreed advance deposit are received.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SCREEN 4: ENQUIRY                                            */}
        {/* ------------------------------------------------------------ */}
        {activeScreen === 'enquiry' && (
          <div className="flex flex-col px-4 py-6 gap-6 animate-fadeIn max-w-2xl mx-auto">
            <div className="flex flex-col gap-1.5">
              <span className="font-label-md text-[#46edc5] font-bold uppercase tracking-wider">संपर्क व मोफत सल्ला</span>
              <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl md:text-2xl">
                Request a Free Demo or Quote for Your Business
              </h2>
              <p className="font-body-sm text-[#b9cbbf] text-xs md:text-sm">
                Fill in your business details below. We prepare a pre-filled WhatsApp message directly for you. Zero obligation inquiry.
              </p>
            </div>

            {/* Quick Direct WhatsApp Button */}
            <a
              className="w-full h-12 rounded-lg bg-[#f4fff6] text-[#003825] font-label-lg font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-md hover:bg-[#45ffba]"
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello AjaraDigital, I want to inquire about a website for my business in Ajara.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp chat"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat Directly on WhatsApp ({DISPLAY_WHATSAPP_NUMBER})</span>
            </a>

            <div className="flex items-center gap-3 py-1">
              <div className="h-[1px] bg-[#00251c] flex-1"></div>
              <span className="font-label-md text-[#46edc5] text-xs uppercase tracking-wide">किंवा सविस्तर माहिती भरा</span>
              <div className="h-[1px] bg-[#00251c] flex-1"></div>
            </div>

            {/* Selected Context Badges (Package / Demo carried from other screens) */}
            {(selectedPackage || selectedDemo) && (
              <div className="p-3.5 rounded-xl bg-[#00251c] border border-[#00feb4]/30 flex flex-col gap-2">
                <span className="font-label-md text-[#f4fff6] font-semibold text-xs">Attached Selections:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedPackage && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#002019] text-[#46edc5] text-xs border border-[#00feb4]/30">
                      <span className="material-symbols-outlined text-[14px]">sell</span>
                      <span>Package: <strong>{selectedPackage}</strong></span>
                      <button
                        type="button"
                        onClick={() => setSelectedPackage(null)}
                        className="ml-1 text-[#ffb4ab] hover:text-white"
                        aria-label="Remove selected package"
                      >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </div>
                  )}
                  {selectedDemo && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#002019] text-[#46edc5] text-xs border border-[#00feb4]/30">
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      <span>Demo: <strong>{selectedDemo}</strong></span>
                      <button
                        type="button"
                        onClick={() => setSelectedDemo(null)}
                        className="ml-1 text-[#ffb4ab] hover:text-white"
                        aria-label="Remove selected demo"
                      >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Validation Error Alert */}
            {validationError && (
              <div className="p-3 rounded-lg bg-[#ffdad6]/10 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] shrink-0">error</span>
                <span>{validationError}</span>
              </div>
            )}

            {/* The Form */}
            <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[#b5eedb] font-semibold text-xs" htmlFor="shop-name">
                  Business Name (तुमच्या दुकानाचे / व्यवसायाचे नाव) <span className="text-[#05d0aa]">*</span>
                </label>
                <input
                  className="w-full h-12 px-3.5 rounded-lg bg-[#002019] text-[#b5eedb] font-body-md focus:bg-[#001711] focus:outline-none focus:ring-2 focus:ring-[#00feb4] border border-[#00251c] placeholder:text-[#83958a] text-sm"
                  id="shop-name"
                  name="shopName"
                  placeholder="उदा. हॉटेल अजिंठा / माऊली वस्त्रनिकेतन"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[#b5eedb] font-semibold text-xs" htmlFor="owner-name">
                  Owner / Contact Name (मालकाचे नाव) <span className="text-[#05d0aa]">*</span>
                </label>
                <input
                  className="w-full h-12 px-3.5 rounded-lg bg-[#002019] text-[#b5eedb] font-body-md focus:bg-[#001711] focus:outline-none focus:ring-2 focus:ring-[#00feb4] border border-[#00251c] placeholder:text-[#83958a] text-sm"
                  id="owner-name"
                  name="ownerName"
                  placeholder="उदा. सचिन पाटील"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[#b5eedb] font-semibold text-xs" htmlFor="whatsapp-no">
                  WhatsApp Mobile Number (१० अंकी मोबाईल नंबर) <span className="text-[#05d0aa]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 font-label-md text-[#46edc5] font-medium text-sm">+91</span>
                  <input
                    className="w-full h-12 pl-12 pr-3.5 rounded-lg bg-[#002019] text-[#b5eedb] font-body-md focus:bg-[#001711] focus:outline-none focus:ring-2 focus:ring-[#00feb4] border border-[#00251c] placeholder:text-[#83958a] text-sm"
                    id="whatsapp-no"
                    name="phone"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[#b5eedb] font-semibold text-xs" htmlFor="biz-type">
                  Business Category (व्यवसायाचा प्रकार)
                </label>
                <div className="relative">
                  <select
                    className="w-full h-12 px-3.5 rounded-lg bg-[#002019] text-[#b5eedb] font-body-md focus:bg-[#001711] focus:outline-none focus:ring-2 focus:ring-[#00feb4] border border-[#00251c] appearance-none text-sm"
                    id="biz-type"
                    name="bizType"
                    value={bizType}
                    onChange={(e) => setBizType(e.target.value)}
                  >
                    <option value="hotel">हॉटेल / खानावळ / बेकरी (Dining &amp; Food)</option>
                    <option value="clothing">कापड / साडी / गारमेंट्स (Clothing &amp; Fashion)</option>
                    <option value="homestay">रिसॉर्ट / ॲग्रो होमस्टे (Homestay &amp; Tourism)</option>
                    <option value="salon">सलून / ब्युटी पार्लर (Salon &amp; Wellness)</option>
                    <option value="clinic">दवाखाना / लॅब / मेडिकल (Doctor &amp; Clinic)</option>
                    <option value="retail">किराणा / जनरल स्टोअर / हार्डवेअर (Retail)</option>
                    <option value="academy">क्लासेस / शाळा / कोचिंग (Academy)</option>
                    <option value="other">इतर स्थानिक व्यवसाय (Other Local Business)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-[#46edc5] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[#b5eedb] font-semibold text-xs" htmlFor="notes">
                  Additional Notes / Specific Requirements (ऐच्छिक)
                </label>
                <textarea
                  className="w-full h-20 px-3.5 py-2.5 rounded-lg bg-[#002019] text-[#b5eedb] font-body-md focus:bg-[#001711] focus:outline-none focus:ring-2 focus:ring-[#00feb4] border border-[#00251c] placeholder:text-[#83958a] text-sm resize-none"
                  id="notes"
                  name="notes"
                  placeholder="उदा. ५ पानांची वेबसाईट हवी आहे, QR मेनू हवा आहे..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
              </div>

              <button
                className="mt-2 w-full h-12 rounded-lg bg-[#f4fff6] text-[#003825] font-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform hover:bg-[#45ffba] cursor-pointer"
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Send WhatsApp Inquiry</span>
              </button>

              {/* Informative Submission Handling & Fallback Link */}
              {preparedWhatsAppUrl ? (
                <div className="p-4 rounded-xl bg-[#00251c] border border-[#00feb4]/40 text-[#b5eedb] flex flex-col gap-2.5 mt-2 shadow-sm">
                  <div className="flex items-center gap-2 text-[#45ffba] font-bold text-sm">
                    <span className="material-symbols-outlined text-[20px]">mark_chat_read</span>
                    <span>Inquiry Prepared for WhatsApp!</span>
                  </div>
                  <p className="text-xs text-[#b9cbbf] leading-relaxed">
                    Your inquiry has been formulated into a pre-filled WhatsApp message. <strong>Important:</strong> You must press <strong>Send</strong> inside WhatsApp to deliver your inquiry. No information is stored on a remote server.
                  </p>
                  <a
                    href={preparedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-[#00feb4] text-[#002114] font-bold text-center text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    <span>Open WhatsApp Now (Fallback Link)</span>
                  </a>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-[#002019] border border-[#3a4a41]/40 text-[#b9cbbf] text-center font-label-md text-xs leading-relaxed mt-1">
                  <span className="material-symbols-outlined text-[#46edc5] text-[16px] inline-block align-middle mr-1">info</span>
                  Submitting prepares a pre-filled message for WhatsApp ({DISPLAY_WHATSAPP_NUMBER}). You will need to press Send in WhatsApp to deliver it. No information is sent to or stored on a database.
                </div>
              )}
            </form>
          </div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* SCREEN 5: MORE (About Founder, Process, FAQ, Service Area)   */}
        {/* ------------------------------------------------------------ */}
        {activeScreen === 'more' && (
          <div className="flex flex-col px-4 py-6 gap-8 animate-fadeIn">
            
            {/* ABOUT / FOUNDER SECTION */}
            <section className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-[#9eebff] uppercase tracking-wider font-bold">आमच्याबद्दल व ओळख</span>
                <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl">Independent Local Craftsmanship</h2>
              </div>

              <div className="p-5 rounded-2xl bg-[#00110c] flex flex-col gap-4 shadow-sm border border-[#00251c]">
                <div className="flex items-center gap-3.5">
                  <img
                    alt="Independent local web designer serving Ajara businesses"
                    className="w-16 h-16 rounded-full object-cover shrink-0 shadow-sm border border-[#00feb4]/30"
                    src="/assets/aistudio/muzammil.jpeg"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-[#b5eedb] font-bold leading-tight">स्थानिक स्वतंत्र डिझायनर</h3>
                    <p className="font-label-md text-[#46edc5]">Independent Local Web Designer • AjaraDigital</p>
                    <span className="text-[0.75rem] font-medium text-[#f4fff6] mt-0.5">Direct 1-on-1 Communication • प्रत्यक्ष संवाद</span>
                  </div>
                </div>

                <p className="font-body-sm text-[#b9cbbf] leading-relaxed text-xs md:text-sm">
                  "I am an independent web designer based in Ajara (PIN 416505). I help local merchants, clinics, and businesses establish clean, mobile-first websites without agency overheads or complicated technical jargon. In-person discussions can be arranged by prior appointment within Ajara."
                </p>

                <div className="p-2.5 rounded-lg bg-[#002019] flex items-center justify-between text-xs text-[#b9cbbf] border border-[#00251c]">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#46edc5]">location_on</span>
                    <span>Based in Ajara, Maharashtra</span>
                  </span>
                  <span className="font-semibold text-[#46edc5]">PIN 416505</span>
                </div>
              </div>
            </section>

            {/* SIMPLE 3-STEP PROCESS */}
            <section className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-[#9eebff] uppercase tracking-wider font-bold">सुलभ ३ पायऱ्या</span>
                <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl">How It Works (कसे काम करते?)</h2>
                <p className="font-body-sm text-[#b9cbbf] text-xs">Simple, milestone-driven workflow designed to respect your time.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-[#00110c] shadow-sm flex items-start gap-3 border border-[#00251c]">
                  <div className="w-8 h-8 rounded-full bg-[#f4fff6] text-[#003825] font-headline-sm flex items-center justify-center shrink-0 font-bold text-sm">
                    १
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-sm">1. Choose Scope &amp; Send Content</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs leading-relaxed">
                      Select your package, send shop photos, visiting card, and pricing over WhatsApp, and pay agreed initial advance deposit. (Timelines begin once all required content is received).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#00110c] shadow-sm flex items-start gap-3 border border-[#00251c]">
                  <div className="w-8 h-8 rounded-full bg-[#f4fff6] text-[#003825] font-headline-sm flex items-center justify-center shrink-0 font-bold text-sm">
                    २
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-sm">2. Design &amp; Structured Review</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs leading-relaxed">
                      Built within 7–14 working days (One-Page) or 14–21 working days (Multi-Page). Includes 1 revision round for Starter, 2 for Professional, and 3 for Business Plus to refine content and layout.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#00110c] shadow-sm flex items-start gap-3 border border-[#00251c]">
                  <div className="w-8 h-8 rounded-full bg-[#f4fff6] text-[#003825] font-headline-sm flex items-center justify-center shrink-0 font-bold text-sm">
                    ३
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-title-md text-[#b5eedb] font-bold text-sm">3. Final Handover &amp; Go Live</h3>
                    <p className="font-body-sm text-[#b9cbbf] text-xs leading-relaxed">
                      Review staging preview, approve final site, clear remaining milestone payment, and receive complete ownership &amp; login credentials with 30-day post-launch support.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-[#9eebff] uppercase tracking-wider font-bold">शंका व उत्तरे</span>
                <h2 className="font-headline-sm text-[#b5eedb] font-bold text-xl">Frequently Asked Questions</h2>
              </div>

              <div className="flex flex-col gap-2.5">
                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>Who owns the website and domain?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    You do 100%. All domains, hosting accounts, and website files are registered in your name or handed over completely upon final payment. Zero proprietary agency lock-in.
                  </p>
                </details>

                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>What is included in the 30-day post-launch support?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    You receive 30 days of post-launch technical assistance for minor bug fixes, correcting typos, and initial guidance on using your site. It does not include major redesigns or new feature developments. After 30 days, your website operates independently with no mandatory maintenance contract. When you want to update photos or rates in the future, pay-as-you-go updates are available.
                  </p>
                </details>

                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>What is included in the revision rounds?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    Starter includes 1 revision round, Professional includes 2, and Business Plus includes 3. A revision round allows you to consolidate feedback and adjust text, images, colors, and layout before final launch. Subsequent redesigns or additional pages are quoted separately.
                  </p>
                </details>

                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>Are domain and hosting renewals included?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    Domain registration and hosting charges are separate unless explicitly specified in writing. Annual renewals are paid directly to the domain registrar and hosting provider at their actual published prices, ensuring complete control and transparent costs.
                  </p>
                </details>

                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>When do project timelines start?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    Project timelines begin once all required assets (photos, rate cards, business text) and the agreed initial advance milestone payment are received. Standard estimates: 7–14 working days for single-page sites and 14–21 working days for multi-page sites.
                  </p>
                </details>

                <details className="group p-3.5 rounded-xl bg-[#00110c] shadow-sm open:bg-[#002019] transition-colors border border-[#00251c]">
                  <summary className="font-title-md text-[#b5eedb] font-bold text-[0.95rem] flex items-center justify-between cursor-pointer list-none">
                    <span>Do you guarantee #1 Google rankings, profile verification, or sales?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#46edc5] text-[20px]">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-[#b9cbbf] pt-2 text-xs leading-relaxed">
                    No ethical web designer can guarantee Google rankings, profile approval, leads, or sales volumes, as these are controlled by Google's policies and algorithms. We assist with Google Business Profile setup, local SEO tags, fast mobile performance, and direct WhatsApp links to make it as easy as possible for local customers to discover and reach you.
                  </p>
                </details>
              </div>
            </section>

            {/* SERVICE AREA NOTE & FOOTER */}
            <section className="flex flex-col gap-3">
              <div className="p-3.5 rounded-xl bg-[#002019] flex items-start gap-2.5 border border-[#00251c]">
                <span className="material-symbols-outlined text-[#46edc5] text-[20px] shrink-0">map</span>
                <p className="font-body-sm text-[#46edc5] text-xs leading-relaxed">
                  <strong>स्थानिक सेवा क्षेत्र:</strong> Proudly serving businesses across Ajara, Uttur, Gadhinglaj, Nesari, and Chandgad belts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#00110c] border border-[#00251c] flex items-center justify-between">
                <div>
                  <h4 className="font-title-md text-[#f4fff6] font-bold text-sm">Need a custom consultation?</h4>
                  <p className="text-xs text-[#b9cbbf]">Connect directly on WhatsApp to discuss your shop's site.</p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('enquiry')}
                  className="px-4 py-2 rounded-lg bg-[#f4fff6] text-[#003825] font-label-md font-bold text-xs hover:bg-[#45ffba] cursor-pointer"
                >
                  Send Inquiry
                </button>
              </div>
            </section>

            {/* BRAND FOOTER */}
            <footer className="w-full pt-4 pb-6 bg-[#00110c]/50 flex flex-col items-center text-center gap-2 border-t border-[#00251c]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f4fff6] text-[#003825] font-bold text-[10px] flex items-center justify-center">A</div>
                <span className="font-label-lg text-[#b5eedb] font-extrabold tracking-tight text-sm">AjaraDigital</span>
              </div>
              <p className="font-body-sm text-[#46edc5] text-[0.75rem] max-w-xs">
                आजरा - ४१६५०५, जिल्हा कोल्हापूर, महाराष्ट्र.<br />
                Empowering local merchants, clinics, hotels, and retail across Western Maharashtra.
              </p>
              <p className="font-label-md text-[#83958a] text-[0.68rem]">
                © {new Date().getFullYear()} AjaraDigital. Crafted with regional pride.
              </p>
            </footer>

          </div>
        )}

      </main>

      {/* ============================================================ */}
      {/* MOBILE PERSISTENT BOTTOM NAVIGATION BAR                      */}
      {/* ============================================================ */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#00110c] border-t border-[#00251c] px-2 py-1.5 flex items-center justify-around shadow-2xl pb-safe"
        aria-label="Mobile bottom navigation"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            activeScreen === 'home' ? 'text-[#00feb4]' : 'text-[#83958a] hover:text-[#b5eedb]'
          }`}
          aria-label="Navigate to Home screen"
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[10px] font-semibold mt-0.5">Home</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('demos')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            activeScreen === 'demos' ? 'text-[#00feb4]' : 'text-[#83958a] hover:text-[#b5eedb]'
          }`}
          aria-label="Navigate to Demos screen"
        >
          <span className="material-symbols-outlined text-[22px]">visibility</span>
          <span className="text-[10px] font-semibold mt-0.5">Demos</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('pricing')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            activeScreen === 'pricing' ? 'text-[#00feb4]' : 'text-[#83958a] hover:text-[#b5eedb]'
          }`}
          aria-label="Navigate to Pricing screen"
        >
          <span className="material-symbols-outlined text-[22px]">sell</span>
          <span className="text-[10px] font-semibold mt-0.5">Pricing</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('enquiry')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer relative ${
            activeScreen === 'enquiry' ? 'text-[#00feb4]' : 'text-[#83958a] hover:text-[#b5eedb]'
          }`}
          aria-label="Navigate to Enquiry screen"
        >
          {(selectedPackage || selectedDemo) && (
            <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#00feb4]" title="Selections attached" />
          )}
          <span className="material-symbols-outlined text-[22px]">chat</span>
          <span className="text-[10px] font-semibold mt-0.5">Enquiry</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('more')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            activeScreen === 'more' ? 'text-[#00feb4]' : 'text-[#83958a] hover:text-[#b5eedb]'
          }`}
          aria-label="Navigate to More and FAQ screen"
        >
          <span className="material-symbols-outlined text-[22px]">info</span>
          <span className="text-[10px] font-semibold mt-0.5">More</span>
        </button>
      </nav>

    </div>
  );
}
