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
      {/* Cabecera de la página con estilo de archivo */}
      <div className="page-header">
        <span className="page-label">{'> education.edu'}</span>
        <h1 className="page-title">Formación Académica</h1>
        <p className="page-subtitle">Mi trayectoria educativa y certificaciones</p>
      </div>

      {/* Grid principal reutilizando los estilos de tarjetas de "About" y "Experience" */}
      <div className="about-grid" style={{ marginTop: '32px' }}>
        <div className="about-main" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {educationList.map((edu, index) => (
            <div key={index} className="about-card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span className="sidebar__role" style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>
                    {edu.period} · {edu.location}
                  </span>
                  <h2 className="about-section-title" style={{ margin: 0, fontSize: '18px', lineHeight: '130%' }}>
                    {edu.title}
                  </h2>
                  <strong style={{ color: 'var(--text)', fontSize: '14px', display: 'block', marginTop: '4px' }}>
                    {edu.institution}
                  </strong>
                </div>
                <span className="skill-tag" style={{ background: 'var(--accent-bg)', color: 'var(--accent)', fontWeight: '600' }}>
                  {edu.badge}
                </span>
              </div>
              <p className="about-text" style={{ marginTop: '12px', fontSize: '14.5px' }}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Barra lateral para detalles adicionales del CV (Carnet de conducir) */}
        <div className="about-sidebar">
          <div className="about-card about-info" style={{ textAlign: 'left' }}>
            <h2 className="about-section-title">Permisos y Otros</h2>
            <ul className="info-list" style={{ padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                <span>Permiso de Conducción</span>
                <strong className="skill-tag" style={{ margin: 0, padding: '2px 10px' }}>Clase B</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}