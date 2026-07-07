import { ChevronDown } from 'lucide-react';
import milkshakeHero   from '../assets/ChatGPT-Image-7-jul.webp';
import cookieChocolate from '../assets/cookie-chocolate.webp';
import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.webp';
import milkshakeBg   from '../assets/milkshake-explosion.mp4';
import '../styles/Hero.css';

const TITLE_LEFT  = 'MILK';
const TITLE_RIGHT = 'SHAKE';

const CARDS = [
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
] as const;

export default function Hero2Content() {
  const charsLeft  = TITLE_LEFT.split('');
  const charsRight = TITLE_RIGHT.split('');

  return (
    <section
      className="hero"
      id="milkshake"
      aria-label="Hero — Milkshake"
      data-hero="milkshake"
      style={{ '--accent-hue': 340 } as React.CSSProperties}
    >
      {/* ── Vídeo de fundo ── */}
      <video className="hero-video-bg hero-video-desktop" src={milkshakeBg}
        autoPlay loop muted playsInline aria-hidden="true" />
      <video className="hero-video-bg hero-video-mobile"  src={milkshakeBg}
        autoPlay loop muted playsInline aria-hidden="true" />

      {/* ── Overlays ── */}
      <div className="hero-overlay"  aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      {/* ── Palco central ── */}
      <div className="hero-stage" aria-live="polite">
        {/* Título gigante + imagem do produto */}
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            {charsLeft.map((ch, i) => (
              <span key={i} className={`char char-left char-l${i}`}>{ch}</span>
            ))}

            <div className="hero-cookie-wrap" aria-hidden="true">
              <img
                className="hero-cookie-img"
                src={milkshakeHero}
                alt="Milkshake de Morango Supremo"
                loading="eager"
              />
            </div>

            {charsRight.map((ch, i) => (
              <span key={i} className={`char char-right char-r${i}`}>{ch}</span>
            ))}
          </h1>
        </div>

        {/* Subtítulo */}
        <p className="hero-subtitle">Cremosidade e Frescor Irresistíveis</p>

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
            <img src={CARDS[0].img} alt={CARDS[0].alt} />
          </div>
          <div className="preview-card-info">
            <h4>{CARDS[0].title}</h4>
            <p>{CARDS[0].desc.split('\n').map((line, i) => (
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
            <img src={CARDS[1].img} alt={CARDS[1].alt} />
          </div>
          <div className="preview-card-info">
            <h4>{CARDS[1].title}</h4>
            <p>{CARDS[1].desc.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
