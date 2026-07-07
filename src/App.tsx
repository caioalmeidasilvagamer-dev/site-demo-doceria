import './styles/global.css';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import Hero2Content from './components/Hero2Content';

export default function App() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <HeroContent />
        <Hero2Content />
      </main>
    </>
  );
}
