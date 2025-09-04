import { HeroSection } from '@/components/hero-section';
import { ToolsSection } from '@/components/tools-section';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { SEOHead } from '@/components/seo-head';

export default function Home() {
  return (
    <>
      <SEOHead 
        title="VismifyTools – World's #1 Islamic Tools Platform | Prayer Times, Qibla, Halal Checker | Trusted by 500K+ Muslims"
        description="Join 500K+ Muslims using VismifyTools - the most comprehensive Islamic platform. Ultra-accurate Prayer Times with GPS, Qibla Finder, AI-powered Halal Checker, Zakat Calculator, HD Quran Reader & more. 100% free, lightning fast, and completely secure."
        keywords={[
          'islamic tools 2025', 'muslim prayer times app', 'qibla finder GPS', 'halal food checker AI',
          'zakat calculator islamic', 'quran reader HD', 'muslim apps free', 'islamic utilities platform',
          'prayer times accurate', 'mecca direction finder', 'halal haram checker', 'islamic calendar hijri',
          'dhikr counter tasbih', 'muslim community app', 'islamic education tools', 'ramadan tools 2025'
        ]}
        canonical="https://vismifytools.com"
      />
      <PerformanceMonitor />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 transition-colors duration-700 optimize-cls">
        <Navbar />
        <div className="optimize-lcp">
          <HeroSection />
        </div>
        <div className="optimize-inp">
          <ToolsSection />
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
}