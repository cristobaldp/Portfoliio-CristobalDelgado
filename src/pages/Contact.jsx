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
      <div className="about-card" style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'left' }}>
        <h2 className="about-section-title">¡Conectemos!</h2>
        <p className="about-text" style={{ marginBottom: '24px' }}>
          Si buscas un desarrollador con iniciativa, experiencia en entornos reales y muchas ganas de aportar al equipo, no dudes en escribirme o echar un vistazo a mis redes.
        </p>

        <ul className="info-list" style={{ padding: 0 }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <span>Email</span>
            <a href="mailto:cdelgadopenaranda@gmail.com" className="info-link" style={{ fontWeight: '600' }}>
              cdelgadopenaranda@gmail.com
            </a>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <span>Ubicación</span>
            <strong style={{ color: 'var(--text-h)' }}> Madrigueras, Albacete, España</strong>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <span>GitHub</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="info-link" style={{ fontWeight: '600' }}>
              github.com
            </a>
          </li>
          <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
            <span>LinkedIn</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="info-link" style={{ fontWeight: '600' }}>
              linkedin.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}