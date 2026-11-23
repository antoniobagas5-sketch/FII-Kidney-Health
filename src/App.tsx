import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { INITIAL_PORTFOLIO_ITEMS } from './data/companyData';
import { ConsultationCategory, NavSectionId, PortfolioItem } from './types';

const STORAGE_KEY = 'fii_portfolio_items_v1';
const SECTION_IDS: NavSectionId[] = [
  'home',
  'services',
  'portofolio',
  'about',
  'contact',
];

function loadInitialPortfolio(): PortfolioItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PORTFOLIO_ITEMS;
    const parsed = JSON.parse(raw) as PortfolioItem[];
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_PORTFOLIO_ITEMS;
  } catch {
    return INITIAL_PORTFOLIO_ITEMS;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [selectedCategory, setSelectedCategory] =
    useState<ConsultationCategory>('KSO Mesin Haemodialisa');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(
    loadInitialPortfolio
  );

  // Persist portfolio items to localStorage whenever updated
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioItems));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [portfolioItems]);

  // Scroll-spy observer for active navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current: NavSectionId = 'home';

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((section: NavSectionId) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -72;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(section);
  }, []);

  const handleConsultKso = useCallback(
    (category: ConsultationCategory) => {
      setSelectedCategory(category);
      handleNavigate('contact');
      window.setTimeout(() => {
        const input = document.getElementById('contact-full-name');
        if (input) input.focus({ preventScroll: true });
      }, 450);
    },
    [handleNavigate]
  );

  const handleAddPortfolioItem = useCallback((newItem: PortfolioItem) => {
    setPortfolioItems((prev) => [newItem, ...prev]);
  }, []);

  const handleDeletePortfolioItem = useCallback((id: string) => {
    setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleResetPortfolioDefaults = useCallback(() => {
    setPortfolioItems(INITIAL_PORTFOLIO_ITEMS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage error
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onConsultKso={handleConsultKso}
      />

      <main className="flex-1">
        <HeroSection
          onConsultKso={handleConsultKso}
          onNavigate={handleNavigate}
        />

        <ServicesSection onConsultKso={handleConsultKso} />

        <PortfolioSection
          items={portfolioItems}
          onAddItem={handleAddPortfolioItem}
          onDeleteItem={handleDeletePortfolioItem}
          onResetDefaults={handleResetPortfolioDefaults}
          onConsultKso={handleConsultKso}
        />

        <AboutSection />

        <ContactSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
