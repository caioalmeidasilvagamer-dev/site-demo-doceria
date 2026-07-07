import { Star } from 'lucide-react';
import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.webp';
import '../styles/Testimonials.css';

const testimonials = [
  {
    stars: 5,
    quote: 'Os melhores cookies que já provei! Minha família inteira ficou viciada no Chocolate Gourmet. Agora faço pedidos toda semana.',
    name: 'Mariana Silva',
    role: 'Cliente desde 2022',
    avatar: avatar1,
  },
  {
    stars: 5,
    quote: 'O cookie recheado de Nutella é simplesmente divino. Derrete na boca e o sabor é incomparável. Recomendo de olhos fechados!',
    name: 'Lucas Mendes',
    role: 'Cliente fiel',
    avatar: avatar2,
  },
  {
    stars: 5,
    quote: 'Encomendei para um evento corporativo e foi um sucesso absoluto! Todos elogiaram a qualidade e o sabor artesanal.',
    name: 'Carolina Prado',
    role: 'Eventos & Festas',
    avatar: avatar1,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-label="Depoimentos">
      <div className="testimonials-header">
        <p className="testimonials-label">Depoimentos</p>
        <h2 className="testimonials-title">O Que Nossos Clientes Dizem</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.name}>
            <Stars count={t.stars} />
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img src={t.avatar} alt={t.name} loading="lazy" />
              </div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
