import { useState } from 'react';
import './Experience.css';

// Agrupamos las responsabilidades en bloques semánticos profesionales
const responsibilityBlocks = [
  {
    category: "Desarrollo Core y Gestión ERP",
    items: [
      'Desarrollo de un sistema integrado para la gestión de contratos y entradas de materia prima (módulos de proveedores, stock, operaciones e informes).',
      'Diseño e implementación de módulos de trazabilidad industrial, gestión avanzada de almacén y seguimiento automatizado de movimientos de mercancía.',
      'Implementación del sistema completo de pedidos, flujos de aprobaciones, planificación logística y expedición.',
      'Diseño, modelado y optimización de consultas en bases de datos relacionales para entornos corporativos.'
    ]
  },
  {
    category: "Ingeniería de Software y Frontend",
    items: [
      'Creación de interfaces web dinámicas y responsivas utilizando Flask, HTML5, Jinja2, JavaScript y CSS3 (Bootstrap).',
      'Desarrollo integral de funcionalidades CRUD, filtros avanzados de búsqueda, motores de generación de informes y exportación de datos funcionales.',
      'Mantenimiento evolutivo, análisis funcional junto a analistas senior y resolución de incidencias en entornos de producción real.'
    ]
  },
  {
    category: "Calidad, Despliegue y Liderazgo",
    items: [
      'Desarrollo de herramientas de control de calidad mediante validación de etiquetas QR para asegurar la integridad y trazabilidad de los datos.',
      'Gestión de código mediante Git/GitHub, garantizando integraciones limpias (Merge) directas hacia la rama principal (master) y despliegues exitosos en producción.',
      'Participación activa en la toma de requisitos interdepartamentales y mentoría técnica a nuevas incorporaciones del equipo.'
    ]
  }
];

const stack = ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'Git', 'GitHub', 'ReportLab', 'Matplotlib', 'Pandas'];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="page-container experience-page">
      <header className="page-header">
        <span className="page-label">{'> professional.trajectory'}</span>
        <h1 className="page-title">Experiencia</h1>
        <p className="page-subtitle">Mi recorrido en entornos de desarrollo y producción real</p>
      </header>

      <div className="timeline-container">
        <div className="timeline-axis" />

        {/* TARJETA DE CHAMPINTER */}
        <div className="timeline-block">
          <div className="timeline-marker timeline-marker--active" />

          <section className="exp-card">
            <header className="exp-card__header">
              <div className="exp-card__company-group">
                <h2 className="exp-card__role">Desarrollador de Software Backend / Fullstack</h2>
                <span className="exp-card__employer">Champinter SOC. COOP.</span>
                <span className="exp-card__badge">Prácticas de Formación (DAM)</span>
              </div>
              <div className="exp-card__meta-group">
                <span className="exp-card__period">Marzo 2026 — Mayo 2026</span>
                <span className="exp-card__location">
                  <span className="geo-icon">📍</span> Villamalea, Albacete
                </span>
              </div>
            </header>

            <p className="exp-card__summary">
              Participación clave en el diseño, desarrollo e implementación de aplicaciones web internas y módulos ERP customizados orientados a optimizar el ecosistema industrial de la cooperativa. Trabajo diario bajo metodologías ágiles en colaboración directa con ingenieros de software Senior, logrando desplegar código robusto a entornos productivos reales desde el primer mes.
            </p>

            <div className="exp-card__interaction">
              <button
                className={`expand-toggle-btn ${expanded ? 'is-expanded' : ''}`}
                onClick={() => setExpanded(!expanded)}
                type="button"
              >
                {expanded ? '✕ Ocultar desglose técnico' : '＋ Desplegar responsabilidades por áreas'}
              </button>

              {expanded && (
                <div className="blocks-wrapper">
                  {responsibilityBlocks.map((block, idx) => (
                    <div key={idx} className="resp-block-section">
                      <h3 className="resp-block-title">// {block.category}</h3>
                      <ul className="resp-list">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="resp-item">
                            <span className="resp-item__pointer">⚡</span>
                            <span className="resp-item__text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <footer className="exp-card__footer">
              <span className="stack-title">Tecnologías aplicadas:</span>
              <div className="exp-card__stack-grid">
                {stack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </footer>
          </section>
        </div>

        {/* TARJETA DE FUTURO */}
        <div className="timeline-block timeline-block--future">
          <div className="timeline-marker timeline-marker--future" />
          <div className="future-card-panel">
            <span className="future-card-panel__status">// En búsqueda activa</span>
            <h3 className="future-card-panel__title">Siguiente Reto Profesional</h3>
            <p className="future-card-panel__text">
              Abierto a incorporaciones inmediatas orientadas al desarrollo de software, gestión de ERPs (Odoo, Axapta), desarrollo Backend o ecosistemas Fullstack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}