import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useI18n } from './i18n/useI18n';
import { Faq } from './sections/Faq';
import { Features } from './sections/Features';
import { FinalCta } from './sections/FinalCta';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { MeetSoli } from './sections/MeetSoli';
import { Pricing } from './sections/Pricing';
import { ProblemSolution } from './sections/ProblemSolution';
import { TrustStrip } from './sections/TrustStrip';

/** The public one-page site. */
export function App() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t('meta.title');
  }, [t]);

  return (
    <div id="top" className="min-h-full bg-canvas">
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <MeetSoli />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
