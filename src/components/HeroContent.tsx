import { useState, useCallback } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import cookieHero      from '../assets/cookie-hero.webp';
import cookieChocolate from '../assets/cookie-chocolate.webp';
import cookieButter    from '../assets/cookie-butter.webp';
import milkshakeHero   from '../assets/ChatGPT-Image-7-jul.webp';
import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.webp';
import bgVideo       from '../assets/0706-1.mp4';
import bgVideoMobile from '../assets/0706-1-1.mp4';
import '../styles/Hero.css';

/* ============================================================
   SLIDES DE PRODUTO
   Cada slide define as letras da esquerda (atrás do produto) e
   as letras da direita (na frente do produto) para manter a ilusão 3D.
   ============================================================ */
interface SlideCard {
  img: string;
  alt: string;
  title: string;
  desc: string;
}

interface Slide {
  key: string;
  labelLeft: string;
  labelRight: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  accentHue: number;
  cards: [SlideCard, SlideCard];
}

const SLIDES: Slide[] = [
  {
    key: 'cookie',
    labelLeft: 'COO',
    labelRight: 'KIE',
    image: cookieHero,
    imageAlt: 'Cookie Artesanal de Chocolate',
    subtitle: 'Bondade Fresca em Cada Mordida',
    accentHue: 20, // marrom chocolate
    cards: [
      {
        img: cookieChocolate,
        alt: 'Cookie de Chocolate',
        title: 'Cookie de Chocolate',
        desc: 'Perfeição intensa e cremosa.\nMacio, repleto de pedaços generosos de chocolate.',
      },
      {
        img: cookieButter,
        alt: 'Cookie de Manteiga',
        title: 'Cookie de Manteiga',
        desc: 'Leve, crocante e irresistível.\nDerrete na boca com sabor artesanal.',
      },
    ],
  },
  {
    key: 'milkshake',
    labelLeft: 'MILK',
    labelRight: 'SHAKE',
    image: milkshakeHero,
    imageAlt: 'Milkshake de Morango Supremo',
    subtitle: 'Cremosidade e Frescor Irresistíveis',
    accentHue: 340, // rosa morango
    cards: [
      {
        img: milkshakeHero,
        alt: 'Milkshake de Morango',
        title: 'Morango Supremo',
        desc: 'Batido com morangos frescos.\nChantilly artesanal e calda premium.',
      },
      {
        img: cookieChocolate,
        alt: 'Acompanhamento',
        title: 'Dupla Perfeita',
        desc: 'Combine seu milkshake com\nos nossos cookies artesanais.',
      },
    ],
  },
];

export default function HeroContent() {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [animating, setAnimating] = useState(false);

  const navigate = useCallback((dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrent(prev =>
        dir === 'right'
          ? (prev + 1) % SLIDES.length
          : (prev - 1 + SLIDES.length) % SLIDES.length
      );
      setDirection(null);
      setAnimating(false);
    }, 420); // Duração da transição CSS
  }, [animating]);

  const slide = SLIDES[current];

  const charsLeft  = slide.labelLeft.split('');
  const charsRight = slide.labelRight.split('');

  return (
    <section
      className="hero"
      id="home"
      aria-label={`Hero — ${slide.labelLeft}${slide.labelRight}`}
      data-hero={slide.key}
      style={{ '--accent-hue': slide.accentHue } as React.CSSProperties}
    >
      {/* ── Vídeo de fundo ── */}
      <video className="hero-video-bg hero-video-desktop" src={bgVideo}
        autoPlay loop muted playsInline aria-hidden="true" />
      <video className="hero-video-bg hero-video-mobile"  src={bgVideoMobile}
        autoPlay loop muted playsInline aria-hidden="true" />

      {/* ── Overlays ── */}
      <div className="hero-overlay"  aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      {/* ── Navegação de produto (botões ← →) ── */}
      <nav className="hero-slider-nav" aria-label="Navegar entre produtos">
        <button
          id="hero-prev"
          className="hero-nav-btn"
          onClick={() => navigate('left')}
          aria-label="Produto anterior"
          disabled={animating}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Dots indicadores */}
        <div className="hero-nav-dots" role="tablist" aria-label="Produtos disponíveis">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === current}
              aria-label={`Produto ${i + 1}: ${s.labelLeft}${s.labelRight}`}
              className={`hero-nav-dot${i === current ? ' hero-nav-dot--active' : ''}`}
              onClick={() => {
                if (i === current || animating) return;
                navigate(i > current ? 'right' : 'left');
              }}
            />
          ))}
        </div>

        <button
          id="hero-next"
          className="hero-nav-btn"
          onClick={() => navigate('right')}
          aria-label="Próximo produto"
          disabled={animating}
        >
          <ChevronRight size={22} />
        </button>
      </nav>

      {/* ── Palco central ── */}
      <div
        className={`hero-stage${animating ? ` hero-stage--exit-${direction}` : ''}`}
        aria-live="polite"
      >
        {/* Título gigante + imagem do produto */}
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            {charsLeft.map((ch, i) => (
              <span key={i} className={`char char-left char-l${i}`}>{ch}</span>
            ))}

            {/* Imagem do produto (sobreposta no meio) */}
            <div className="hero-cookie-wrap" aria-hidden="true">
              <img
                className="hero-cookie-img"
                src={slide.image}
                alt={slide.imageAlt}
                loading="eager"
              />
            </div>

            {charsRight.map((ch, i) => (
              <span key={i} className={`char char-right char-r${i}`}>{ch}</span>
            ))}
          </h1>
        </div>

        {/* Subtítulo */}
        <p className="hero-subtitle">{slide.subtitle}</p>

        {/* Social Proof */}
        <aside className="hero-social-proof" aria-label="Clientes felizes">
          <div className="social-proof-avatars" aria-hidden="true">
            <div className="avatar"><img src={avatar1} alt="" /></div>
            <div className="avatar"><img src={avatar2} alt="" /></div>
            <div className="avatar">
              <img src={avatar1} alt="" style={{ filter: 'hue-rotate(25deg)' }} />
            </div>
          </div>
          <p className="social-proof-text">
            +5.000 clientes satisfeitos em todo o Brasil.<br />
            Qualidade artesanal que você sente no sabor.
          </p>
        </aside>

        {/* CTAs */}
        <div className="hero-ctas" role="group" aria-label="Ações principais">
          <a href="#categories" className="btn-hero btn-hero-primary">Cardápio</a>
          <a href="#order"      className="btn-hero btn-hero-secondary">Pedir Agora</a>
        </div>
      </div>

      {/* ── Cards de rodapé ── */}
      <div className="hero-bottom-cards">
        <div className="preview-card">
          <div className="preview-card-img">
            <img src={slide.cards[0].img} alt={slide.cards[0].alt} />
          </div>
          <div className="preview-card-info">
            <h4>{slide.cards[0].title}</h4>
            <p>{slide.cards[0].desc.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow" aria-hidden="true">
            <ChevronDown size={14} />
          </div>
          <p>Role para baixo para<br />ver mais informações</p>
        </div>

        <div className="preview-card">
          <div className="preview-card-img">
            <img src={slide.cards[1].img} alt={slide.cards[1].alt} />
          </div>
          <div className="preview-card-info">
            <h4>{slide.cards[1].title}</h4>
            <p>{slide.cards[1].desc.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
