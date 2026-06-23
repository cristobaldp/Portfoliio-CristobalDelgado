import miFoto from "../assets/Cristobal.png"; 
import "./About.css";

const traits = [
  { icon: '◎', label: 'Aprendizaje autónomo continuo' },
  { icon: '◈', label: 'Colaboración y trabajo en equipo' },
  { icon: '◻', label: 'Resolución eficiente de problemas' },
  { icon: '◆', label: 'Adaptabilidad rápida a entornos cambiantes' },
];

export default function About() {
  return (
    <div className="page-container">
      <header className="page-header">
        <span className="page-label">{'> about.me'}</span>
        <h1 className="page-title">Sobre mí</h1>
        <p className="page-subtitle">Perfil profesional, competencias y trayectoria</p>
      </header>

      {/* BLOQUE SUPERIOR: Presentación y Datos Personales */}
      <div className="about-grid-layout">
        
        {/* Columna Izquierda: Bloques de texto profesional descriptivo */}
        <div className="about-main-column">
          <section className="about-card-panel">
            <h2 className="about-panel-title">Presentación Profesional</h2>
            <p className="about-panel-text">
              Soy Cristóbal Delgado Peñaranda, desarrollador de software de 21 años enfocado en el diseño e implementación de soluciones tecnológicas robustas, eficientes y con un alto estándar de calidad. Me defino como un profesional curioso, constante y con una gran capacidad de adaptación ante los retos técnicos.
            </p>
            <p className="about-panel-text">
              Mi enfoque está orientado a resolver problemas reales de negocio y optimizar entornos de producción. Durante mi experiencia en **Champinter**, gestioné e integré herramientas críticas de software en un entorno industrial real de alta exigencia, asegurando la continuidad del flujo operativo diario.
            </p>
          </section>

          <section className="about-card-panel">
            <h2 className="about-panel-title">Aptitudes Clave</h2>
            <div className="custom-traits-grid">
              {traits.map(({ icon, label }) => (
                <div key={label} className="custom-trait-card">
                  <span className="custom-trait-icon">{icon}</span>
                  <span className="custom-trait-label">{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="about-card-panel">
            <h2 className="about-panel-title">Idiomas</h2>
            <div className="custom-lang-list">
              <div className="custom-lang-row">
                <span className="custom-lang-name">Español</span>
                <span className="custom-lang-badge native">Nativo</span>
              </div>
              <div className="custom-lang-row">
                <span className="custom-lang-name">Inglés</span>
                <div className="custom-lang-bar-container">
                  <div className="custom-lang-bar-bg">
                    <div className="custom-lang-bar-fill" style={{ width: '35%' }} />
                  </div>
                  <span className="custom-lang-level">Competencia básica (A2)</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Columna Derecha: Foto e Información de Contacto */}
        <aside className="about-sidebar-column">
          <div className="about-card-panel photo-panel">
            <div className="profile-image-container">
              <img src={miFoto} alt="Cristóbal Delgado Peñaranda" className="profile-image-element" />
            </div>
          </div>

          <div className="about-card-panel">
            <h2 className="about-panel-title">Información de contacto</h2>
            <ul className="custom-data-list">
              <li><span>Nombre completo</span><strong>Cristóbal Delgado Peñaranda.</strong></li>
              <li><span>Fecha de nacimiento</span><strong>17 de julio de 2004</strong></li>
              <li><span>Ubicación actual</span><strong>Madrigueras, Albacete</strong></li>
              <li><span>Correo electrónico</span><a href="mailto:cdelgadopenaranda@gmail.com" className="custom-data-link">cdelgadopenaranda@gmail.com</a></li>
              <li><span>Licencia de conducir</span><strong>Clase B</strong></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}