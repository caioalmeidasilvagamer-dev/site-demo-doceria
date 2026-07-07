import cookieChocolate from '../assets/cookie-chocolate.webp';
import cookieButter from '../assets/cookie-butter.webp';
import '../styles/FooterCards.css';

export default function FooterCards() {
  return (
    <div className="footer-cards" role="complementary" aria-label="Destaques de produtos">

      {/* Card Esquerdo — Chocolate Cookie */}
      <article className="footer-card footer-card-left" aria-label="Chocolate Cookie">
        <div className="footer-card-img">
          <img src={cookieChocolate} alt="Chocolate Cookie em uma assadeira" loading="lazy" />
        </div>
        <div className="footer-card-body">
          <h3 className="footer-card-title">Chocolate Cookie</h3>
          <p className="footer-card-desc">
            Indulge in rich, fudgy perfection
          </p>
          <p className="footer-card-tags">
            Rich, Soft, And Packed With<br />Real Chocolate Chunks.
          </p>
        </div>
      </article>

      {/* Indicador de Scroll — Central */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-mouse-dot" />
        </div>
        <p className="scroll-label">
          Please Scroll Down For<br />More Information
        </p>
      </div>

      {/* Card Direito — Butter Cookie */}
      <article className="footer-card footer-card-right" aria-label="Butter Cookie">
        <div className="footer-card-img">
          <img src={cookieButter} alt="Butter Cookie em um recipiente" loading="lazy" />
        </div>
        <div className="footer-card-body">
          <h3 className="footer-card-title">Butter Cookie</h3>
          <p className="footer-card-desc">
            Indulge in rich, fudgy perfection
          </p>
          <p className="footer-card-tags">
            Light, Crisp, And Melt-In-Your-<br />Mouth Buttery Goodness.
          </p>
        </div>
      </article>
    </div>
  );
}
