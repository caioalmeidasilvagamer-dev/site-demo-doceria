import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Marca */}
        <div className="footer-brand">
          <span className="footer-logo">Cookie</span>
          <p className="footer-tagline">
            Freshly baked goodness in every bite. Biscoitos artesanais premium preparados com amor e ingredientes selecionados.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="footer-col-title">Navegação</h4>
          <ul className="footer-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#benefits">Diferenciais</a></li>
            <li><a href="#about">Nossa História</a></li>
            <li><a href="#categories">Cardápio</a></li>
          </ul>
        </div>

        {/* Informações */}
        <div>
          <h4 className="footer-col-title">Funcionamento</h4>
          <ul className="footer-links">
            <li><span style={{ fontSize: '0.85rem' }}>Segunda a Sábado</span></li>
            <li><span style={{ fontSize: '0.85rem', opacity: 0.7 }}>09h às 19h</span></li>
            <li><span style={{ fontSize: '0.85rem' }}>Domingo</span></li>
            <li><span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Fechado</span></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="footer-col-title">Contato</h4>
          <ul className="footer-links">
            <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
            <li><a href="mailto:contato@cookiedoceria.com">contato@cookiedoceria.com</a></li>
            <li><span style={{ fontSize: '0.85rem', opacity: 0.7 }}>São Paulo, SP</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Cookie Doceria. Todos os direitos reservados.
        </p>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
