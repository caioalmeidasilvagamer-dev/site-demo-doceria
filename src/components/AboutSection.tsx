import confeiteira from '../assets/confeiteira.webp';
import '../styles/AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-label="Sobre nós">
      <div className="about-inner">
        {/* Foto da confeiteira */}
        <div className="about-img-wrap">
          <div className="about-blob" aria-hidden="true" />
          <img
            className="about-img"
            src={confeiteira}
            alt="Nossa confeiteira preparando cookies artesanais"
            loading="lazy"
          />
        </div>

        {/* Texto + números */}
        <div className="about-content">
          <span className="about-label">Nossa História</span>
          <h2 className="about-title">
            Feito com Amor, Assado com Paixão
          </h2>
          <p className="about-desc">
            Desde 2018, nossa confeitaria nasceu do sonho de transformar
            ingredientes simples em momentos inesquecíveis. Cada cookie é
            preparado artesanalmente, com receitas exclusivas desenvolvidas
            pela nossa fundadora — combinando tradição familiar com
            criatividade contemporânea.
          </p>
          <p className="about-desc">
            Aqui, cada fornada é uma celebração. Usamos chocolate belga,
            manteiga de primeira e farinhas selecionadas, porque acreditamos
            que o melhor sabor começa com os melhores ingredientes.
          </p>

          <div className="about-highlight">
            <div className="about-stat">
              <span className="about-stat-number">7+</span>
              <span className="about-stat-label">Anos de experiência</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">15k+</span>
              <span className="about-stat-label">Cookies vendidos</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">4.9</span>
              <span className="about-stat-label">Avaliação média</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
