import '../styles/NewsletterCTA.css';

export default function NewsletterCTA() {
  return (
    <section className="newsletter-cta" id="contact" aria-label="Newsletter e contato">
      <div className="newsletter-inner">
        <span className="newsletter-label">Fique por Dentro</span>
        <h2 className="newsletter-title">
          Não Perca Nenhuma Novidade Deliciosa
        </h2>
        <p className="newsletter-desc">
          Cadastre-se para receber ofertas exclusivas, novos sabores em
          primeira mão e promoções especiais direto no seu e-mail.
        </p>

        <form
          className="newsletter-form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Formulário de newsletter"
        >
          <input
            className="newsletter-input"
            type="email"
            placeholder="Seu melhor e-mail"
            aria-label="Endereço de e-mail"
            required
          />
          <button className="btn-newsletter" type="submit">
            Quero Receber
          </button>
        </form>

        <p className="newsletter-disclaimer">
          Sem spam. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
