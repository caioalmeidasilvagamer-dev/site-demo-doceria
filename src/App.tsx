import './styles/global.css';
import Header from './components/Header';
import HeroContent from './components/HeroContent';

export default function App() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <HeroContent />
      </main>
    </>
  );
}
