import { Leaf, Clock, Heart } from 'lucide-react';
import '../styles/BenefitStrip.css';

const benefits = [
  {
    icon: Leaf,
    title: 'Ingredientes Naturais',
    desc: 'Utilizamos apenas ingredientes frescos e selecionados, sem conservantes artificiais.',
  },
  {
    icon: Clock,
    title: 'Feitos na Hora',
    desc: 'Cada cookie é assado diariamente para garantir frescor e crocância perfeitos.',
  },
  {
    icon: Heart,
    title: 'Receitas Artesanais',
    desc: 'Receitas exclusivas desenvolvidas com carinho, tradição e anos de experiência.',
  },
];

export default function BenefitStrip() {
  return (
    <section className="benefit-strip" id="benefits" aria-label="Benefícios">
      <div className="benefit-strip-inner">
        {benefits.map((b) => (
          <article className="benefit-item" key={b.title}>
            <div className="benefit-icon" aria-hidden="true">
              <b.icon size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
