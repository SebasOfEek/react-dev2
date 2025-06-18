import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Modal from './components/Modal';
import { useState } from 'react';

function NavBar({ setModalOpen, setModalMessage }) {
  const handleNavClick = (e, message) => {
    e.preventDefault();
    setModalMessage(message);
    setModalOpen(true);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="https://res.cloudinary.com/dnyoogvv1/image/upload/v1750145860/Logo_ovyflm.png" alt="BRGM One Logo" className="logo-image" />
      </Link>
      <div className="nav-items">
        <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, "La sección de Productos estará disponible próximamente.")}>Productos</a>
        <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, "La App Móvil estará disponible próximamente.")}>App Movil</a>
        <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, "La sección Acerca de nosotros estará disponible próximamente.")}>Acerca de nosotros</a>
      </div>
    </nav>
  );
}

function MainContent() {
  const navigate = useNavigate();
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleVerMas = () => {
    const bankInfo = `BRGM ONE es un banco digital innovador que revoluciona la forma en que manejas tu dinero. 
    
    Nuestras características principales incluyen:
    • Cuentas sin comisiones de mantenimiento
    • Transferencias instantáneas 24/7
    • Tarjetas virtuales y físicas con tecnología contactless
    • App móvil intuitiva y segura
    • Atención al cliente 24/7
    • Inversiones inteligentes y asesoramiento financiero
    
    En BRGM ONE, nos comprometemos a brindarte la mejor experiencia bancaria digital, combinando tecnología de punta con seguridad de primer nivel.`;
    
    setProductModalOpen(true);
    setModalMessage(bankInfo);
  };

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <p className="recommended-text">Aplicación Recomendada</p>
        <h1>BRGM ONE</h1>
        <p className="description">
          Tu dinero, como tú: libre para conquistar cualquier terreno. BRGM Global Finance te impulsa a tomar el control con inteligencia y visión.
          Tecnología, ética y velocidad para alcanzar tus metas.
        </p>
        <div className="cta-container" onClick={handleVerMas}>
          <button className="circular-button">→</button>
          <span className="cta-text">Ver más</span>
        </div>
      </div>
      <div className="circle-decoration"></div>
      <img 
        src="https://res.cloudinary.com/dnyoogvv1/image/upload/v1750141222/Phone_fsdqll.png" 
        alt="Phone" 
        className="phone-image"
      />
      <div className="bottom-circle-decoration"></div>
      <Modal 
        isOpen={isProductModalOpen}
        onClose={() => setProductModalOpen(false)}
        message={modalMessage}
      />
    </main>
  );
}

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar setModalOpen={setModalOpen} setModalMessage={setModalMessage} />
        <MainContent />
        <Modal 
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          message={modalMessage}
        />
      </div>
    </Router>
  );
}

export default App;
