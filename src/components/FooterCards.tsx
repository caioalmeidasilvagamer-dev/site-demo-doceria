import cookieChocolate from '../assets/cookie-chocolate.webp';
import cookieButter from '../assets/cookie-butter.webp';
import '../styles/FooterCards.css';

export default function FooterCards() {
  return (
    <div className="footer-cards" role="complementary" aria-label="Destaques de produtos">

      {/* Card Esquerdo — Chocolate Cookie */}
      <article className="footer-card footer-card-left" aria-label="Cookie de Chocolate">
        <div className="footer-card-img">
          <img src={cookieChocolate} alt="Cookie de Chocolate em uma assadeira" loading="lazy" />
        </div>
        <div className="footer-card-body">
          <h3 className="footer-card-title">Cookie de Chocolate</h3>
          <p className="footer-card-desc">
            Perfeição intensa e cremosa
          </p>
          <p className="footer-card-tags">
            Macio, repleto de pedaços generosos<br />de chocolate belga.
          </p>
        </div>
      </article>

      {/* Indicador de Scroll — Central */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-mouse-dot" />
        </div>
        <p className="scroll-label">
          Role para baixo para<br />ver mais informações
        </p>
      </div>

      {/* Card Direito — Butter Cookie */}
      <article className="footer-card footer-card-right" aria-label="Cookie de Manteiga">
        <div className="footer-card-img">
          <img src={cookieButter} alt="Cookie de Manteiga em um recipiente" loading="lazy" />
        </div>
        <div className="footer-card-body">
          <h3 className="footer-card-title">Cookie de Manteiga</h3>
          <p className="footer-card-desc">
            Leve, crocante e irresistível
          </p>
          <p className="footer-card-tags">
            Derrete na boca com sabor<br />artesanal de manteiga.
          </p>
        </div>
      </article>
    </div>
  );
}
