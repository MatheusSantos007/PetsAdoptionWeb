import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src="https://media.istockphoto.com/id/1366789511/pt/vetorial/pet-icon-illustration.jpg?s=1024x1024&w=is&k=20&c=W40D1SN_O7CSfiVZ1yqfqdSRIhOY4HBppoSYWnYpovE=" alt="PetsAdoption" width="50" height="50" />
        <p>© 2024 PetsAdoption. Todos os direitos reservados.</p>
      </div>
      <div className="footer-links">
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contato</h4>
        <p>Endereço: Rua Passa Nada, 123, Guarabira PB, Brasil</p>
        <p>Telefone: (82) 1234-5678</p>
        <p>Email: contato@petsadoption.com</p>
      </div>
      <div className="footer-social">
        <h4>Siga-nos</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;

