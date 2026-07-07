import { ChevronDown } from 'lucide-react';
import cookieHero from '../assets/cookie-hero.webp';
import cookieChocolate from '../assets/cookie-chocolate.webp';
import cookieButter from '../assets/cookie-butter.webp';
import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.webp';
import bgVideo from '../assets/0706-1.mp4';
import bgVideoMobile from '../assets/0706-1-1.mp4';
import '../styles/Hero.css';

export default function HeroContent() {
  return (
    <section className="hero" id="home" aria-label="Hero — Freshly Baked Cookies">
      {/* Layer 0: Video background */}
      <video
        className="hero-video-bg hero-video-desktop"
        src={bgVideo}
        autoPlay loop muted playsInline
        aria-hidden="true"
      />
      <video
        className="hero-video-bg hero-video-mobile"
        src={bgVideoMobile}
        autoPlay loop muted playsInline
        aria-hidden="true"
      />

      {/* Layer 1: Gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Layer 2: Vignette */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* Center Stage */}
      <div className="hero-stage">
        {/* Layer 3: COOKIE title + cookie image */}
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="char char-c">C</span>
            <span className="char char-o1">O</span>
            <span className="char char-o2">O</span>

            {/* Cookie image floating over the title, nested in stacking context */}
            <div className="hero-cookie-wrap" aria-hidden="true">
              <img
                className="hero-cookie-img"
                src={cookieHero}
                alt="Artisan Chocolate Cookie"
                loading="eager"
              />
            </div>

            <span className="char char-k">K</span>
            <span className="char char-i">I</span>
            <span className="char char-e">E</span>
          </h1>
        </div>

        {/* Layer 4: Subtitle */}
        <p className="hero-subtitle">
          Freshly Baked Goodness in Every Bite
        </p>

        {/* Social Proof — absolute on desktop, flows above CTAs on mobile */}
        <aside className="hero-social-proof" aria-label="Happy customers">
          <div className="social-proof-avatars" aria-hidden="true">
            <div className="avatar"><img src={avatar1} alt="" /></div>
            <div className="avatar"><img src={avatar2} alt="" /></div>
            <div className="avatar">
              <img src={avatar1} alt="" style={{ filter: 'hue-rotate(25deg)' }} />
            </div>
          </div>
          <p className="social-proof-text">
            Lorem Ipsum Dolor Sit Amet Consectetur.<br />
            Viverra Quam Tincidunt Pretium.
          </p>
        </aside>

        {/* Layer 5: CTA Buttons */}
        <div className="hero-ctas" role="group" aria-label="Main actions">
          <a href="#categories" className="btn-hero btn-hero-primary">
            Menu
          </a>
          <a href="#order" className="btn-hero btn-hero-secondary">
            Order Now
          </a>
        </div>
      </div>

      {/* Bottom Preview Cards */}
      <div className="hero-bottom-cards">
        <div className="preview-card">
          <div className="preview-card-img">
            <img src={cookieChocolate} alt="Chocolate Cookie" />
          </div>
          <div className="preview-card-info">
            <h4>Chocolate Cookie</h4>
            <p>Indulge in rich, fudgy perfection.<br />
            Rich, Soft, And Packed With Real Chocolate Chunks.</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow" aria-hidden="true">
            <ChevronDown size={14} />
          </div>
          <p>Please Scroll Down For<br />More Information</p>
        </div>

        <div className="preview-card">
          <div className="preview-card-img">
            <img src={cookieButter} alt="Butter Cookie" />
          </div>
          <div className="preview-card-info">
            <h4>Butter Cookie</h4>
            <p>Indulge in rich, fudgy perfection.<br />
            Light, Crisp, And Melt-In-Your-Mouth Buttery Goodness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
