import './styles/global.css';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import BenefitStrip from './components/BenefitStrip';
import AboutSection from './components/AboutSection';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import NewsletterCTA from './components/NewsletterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <HeroContent />
        <BenefitStrip />
        <AboutSection />
        <ProductGrid />
        <Testimonials />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
