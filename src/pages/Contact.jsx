export default function Contact() {
  return (
    <div className="page-container">
      {/* Cabecera de la página */}
      <div className="page-header">
        <span className="page-label">{'> contact.sh'}</span>
        <h1 className="page-title">Contacto</h1>
        <p className="page-subtitle">¿Hablamos? Estoy disponible para charlar sobre nuevas oportunidades</p>
      </div>

      {/* Tarjeta de información */}
      <div className="about-card">
        <h2 className="about-section-title">¡Conectemos!</h2>
        <p className="about-text">
          Si buscas un desarrollador con iniciativa, experiencia en entornos reales y muchas ganas de aportar al equipo, no dudes en escribirme o echar un vistazo a mis redes.
        </p>

        <ul className="info-list">
          <li className="info-item">
            <span className="info-label">Email</span>
            <a href="mailto:cdelgadopenaranda@gmail.com" className="info-link">
              cdelgadopenaranda@gmail.com
            </a>
          </li>
          <li className="info-item">
            <span className="info-label">Teléfono</span>
            <a href="tel:+34694402089" className="info-link">
              +34 694 40 20 89
            </a>
          </li>
          <li className="info-item">
            <span className="info-label">Ubicación</span>
            <strong className="info-value">Madrigueras, Albacete, España</strong>
          </li>
          <li className="info-item">
            <span className="info-label">GitHub</span>
            <a href="https://github.com/cristobaldp" target="_blank" rel="noreferrer" className="info-link">
              github.com/cristobaldp
            </a>
          </li>
          <li className="info-item">
            <span className="info-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/cristóbal-delgado-peñaranda-99a28538b/" target="_blank" rel="noreferrer" className="info-link">
              linkedin.com/in/cristóbal-delgado...
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}