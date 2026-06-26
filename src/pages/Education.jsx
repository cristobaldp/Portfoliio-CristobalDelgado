import './Education.css'; 

export default function Education() {

  const educationList = [
    {
      period: '2024 — 2026',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      institution: 'IES Cañada de la Encina',
      location: 'Iniesta, España',
      description: 'Especialización en desarrollo y análisis de software. Formación en entornos orientados a objetos, desarrollo móvil, persistencia de datos y sistemas de gestión empresarial.',
      badge: 'Grado Superior'
    },
    {
      period: '2022',
      title: 'Prueba Universitarias EvAU (Aprobada)',
      institution: 'Universidad de Castilla-La Mancha (UCLM)',
      location: 'Albacete, España',
      description: 'Superación de las pruebas de acceso a la universidad.',
      badge: 'EvAU'
    },
    {
      period: '2020 — 2022',
      title: 'Bachillerato de Ciencias Sociales',
      institution: 'IES Río Júcar',
      location: 'Madrigueras, España',
      description: 'Formación académica base orientada a la economía, estadística y ciencias sociales.',
      badge: 'Bachillerato'
    },
    {
      period: '2016 — 2020',
      title: 'Educación Secundaria Obligatoria (ESO)',
      institution: 'IES Río Júcar',
      location: 'Madrigueras, España',
      description: 'Estudios obligatorios con especial énfasis en ciencias naturales, matemáticas y estadística.',
      badge: 'ESO'
    }
  ];

  return (
    <div className="page-container">
      {/* Cabecera de la página idéntica */}
      <div className="page-header">
        <span className="page-label">{'> education.edu'}</span>
        <h1 className="page-title">Formación Académica</h1>
        <p className="page-subtitle">Mi trayectoria educativa y certificaciones</p>
      </div>

      {/* Estructura de dos columnas idéntica a About */}
      <div className="about-grid-layout">
        
        {/* Columna Principal Izquierda */}
        <div className="about-main-column">
          {educationList.map((edu, index) => (
            <div key={index} className="about-card-panel" style={{ textAlign: 'left' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span className="education-meta-text">
                    {edu.period} · {edu.location}
                  </span>
                  <h2 className="education-panel-item-title">
                    {edu.title}
                  </h2>
                  <strong className="education-institution-highlight">
                    {edu.institution}
                  </strong>
                </div>
                {/* Badge con el mismo diseño nativo/verde de tus idiomas */}
                <span className="custom-lang-badge native">
                  {edu.badge}
                </span>
              </div>
              
              <p className="about-panel-text" style={{ marginTop: '14px', marginBottom: 0 }}>
                {edu.description}
              </p>

            </div>
          ))}
        </div>

        {/* Columna Lateral Derecha (Sidebar) */}
        <div className="about-sidebar-column">
          <div className="about-card-panel" style={{ textAlign: 'left' }}>
            <h2 className="about-panel-title">Permisos y Otros</h2>
            <ul className="custom-data-list">
              <li>
                <span>Permiso de Conducción</span>
                <strong>Clase B</strong>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}