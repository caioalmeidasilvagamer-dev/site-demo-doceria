import { useEffect, useRef } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import avatar1 from '../assets/avatar-1.webp';
import '../styles/Header.css';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header" role="banner">
      <a href="#" className="header-logo" aria-label="Cookie — Início">
        Cookie
      </a>

      <nav className="header-nav" role="navigation" aria-label="Navegação principal">
        <a href="#home">Início</a>
        <a href="#categories">Cardápio</a>
        <a href="#about">Sobre Nós</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="header-actions">
        <button aria-label="Carrinho de compras" className="cart-btn">
          <ShoppingCart size={19} strokeWidth={1.7} />
          <span className="header-cart-badge">1</span>
        </button>
        <button aria-label="Buscar">
          <Search size={19} strokeWidth={1.7} />
        </button>
        <div className="header-avatar" role="img" aria-label="Perfil do usuário">
          <img src={avatar1} alt="" />
        </div>
      </div>
    </header>
  );
}
