import { useState } from 'react';
import { Heart, Star, Plus, Cake, Award, Candy, Cookie as CookieIcon } from 'lucide-react';
import cookieChocolate from '../assets/cookie-chocolate.webp';
import cookieButter from '../assets/cookie-butter.webp';
import cookieRecheado from '../assets/cookie-recheado.webp';
import '../styles/ProductGrid.css';

const categories = [
  { id: 'classic', label: 'CLÁSSICOS', icon: Cake },
  { id: 'gourmet', label: 'GOURMET', icon: Award },
  { id: 'desserts', label: 'SOBREMESAS', icon: Candy },
  { id: 'cookies', label: 'TODOS', icon: CookieIcon },
];

const products = [
  {
    img: cookieChocolate,
    name: 'Cookie Trufa de Chocolate',
    desc: 'Intenso, fudgy e repleto de pedaços generosos de chocolate belga 70%.',
    price: '12,90',
    stars: 5,
    tag: 'cookies',
  },
  {
    img: cookieRecheado,
    name: 'Chocolate com Nutella',
    desc: 'Massa crocante por fora, recheio cremoso de Nutella derretendo por dentro.',
    price: '16,90',
    stars: 5,
    tag: 'cookies',
  },
  {
    img: cookieButter,
    name: 'Manteiga com Amêndoas',
    desc: 'Leve, crocante e com aquele sabor inconfundível de manteiga artesanal com amêndoas.',
    price: '10,90',
    stars: 4,
    tag: 'classic',
  },
  {
    img: cookieChocolate,
    name: 'Chocolate Duplo Especial',
    desc: 'Chocolate duplo com gotas de chocolate meio amargo e um toque de flor de sal.',
    price: '14,90',
    stars: 5,
    tag: 'gourmet',
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('cookies');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredProducts = products.filter(p => p.tag === activeCategory || activeCategory === 'cookies');

  return (
    <section className="products" id="categories" aria-label="Nossos Cookies">
      <div className="products-header">
        <p className="products-label">Cardápio</p>
        <h2 className="products-title">O que você vai querer?</h2>
      </div>

      {/* Seletor de Categorias Estilo Dakingo */}
      <div className="categories-menu" role="tablist" aria-label="Categorias de produtos">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <div className="category-icon-box">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <span className="category-label">{cat.label}</span>
            </button>
          );
        })}
      </div>

      <div className="products-subheader">
        <h3 className="products-section-title">Mais Vendidos do Brasil</h3>
      </div>

      {/* Grid de Cards Dakingo */}
      <div className="products-grid">
        {filteredProducts.map((p) => {
          const isFavorited = !!favorites[p.name];
          return (
            <article className="product-card" key={p.name}>
              <div className="product-card-img">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="product-card-body">
                <div className="product-card-meta">
                  <button
                    className={`favorite-btn ${isFavorited ? 'active' : ''}`}
                    onClick={() => toggleFavorite(p.name)}
                    aria-label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  >
                    <Heart size={18} fill={isFavorited ? 'var(--cor-accent)' : 'none'} />
                  </button>
                  <h4 className="product-card-name">{p.name}</h4>
                </div>

                <div className="product-card-footer">
                  <div className="price-rating-box">
                    <span className="product-price">
                      R$ {p.price}
                    </span>
                    <div className="product-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < p.stars ? 'var(--cor-accent-light)' : 'none'}
                          color={i < p.stars ? 'var(--cor-accent-light)' : '#ccc'}
                        />
                      ))}
                    </div>
                  </div>

                  <button className="btn-add-product" aria-label="Adicionar ao carrinho">
                    <Plus size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Botão VIEW ALL abaixo */}
      <div className="products-view-all">
        <a href="#categories" className="btn-view-all">
          VER TODOS
        </a>
      </div>
    </section>
  );
}
