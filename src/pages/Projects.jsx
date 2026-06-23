import { useState } from 'react';
import './Projects.css';

// IMPORTACIONES PROYECTO 1: UNIVERSIDAD
import portadaUniversidad from "../assets/Universidad.jpg";
import esquemaUniversidad from "../assets/EsquemaBBDDUni.png";

// IMPORTACIONES PROYECTO 2: TFG - KILÓMETRO A KILÓMETRO (ESCRITORIO)
import portadaKilometro from "../assets/Kilometro.jpg"; 
import esquemaKilometro from "../assets/Diagrama-entidad-relacionKm.png";
import memoriaPdfKm from "../assets/Memoria_Kilometro_a_Kilometro.pdf"; 

// Diagramas de arquitectura técnica del TFG
import casosUsoKm from "../assets/DiagramaCasosUsoKm.png";
import componentesKm from "../assets/DiagramaComponentesKm.png";
import ganttKm from "../assets/DiagramaGantKm.png";
import navegacionKm from "../assets/DiagramaNavegacionKm.png";
import flujoEstadisticasKm from "../assets/DiagramaFlujoEstadisticas.png";
import flujoRepostajeKm from "../assets/DiagramaFlujoRegistrarRepostaje.png";
import flujoVehiculoKm from "../assets/DiagramaFlujoInsertVehiculo.png";
import flujoGeneralKm from "../assets/DiagramaFlujoKm.png";

// IMPORTACIONES PROYECTO 3: KILÓMETRO A KILÓMETRO (MÓVIL ANDROID)
import portadaMovilKm from "../assets/Kilometro.jpg"; 

// IMPORTACIONES PROYECTO 4: SECUREDROP (CRIPTOGRAFÍA & SEGURIDAD)
import portadaSecureDrop from "../assets/Criptografia1.jpg"; // <-- Guarda aquí el logo de tu proyecto o de Java/Seguridad
import esquemaCriptografia from "../assets/Criptografia.png";

const projectsData = [
  {
    id: 1,
    title: "Sistema Integrado de Gestión Universitaria",
    subtitle: "Desarrollo Colaborativo — Responsable del Módulo Académico",
    category: "Python Desktop / Data",
    image: portadaUniversidad,
    dbImage: esquemaUniversidad,
    shortDescription: "Aplicación de escritorio corporativa desarrollada en equipo para la administración universitaria. Diseñé e implementé el ecosistema de asignaturas, especializándome en el desarrollo del motor de persistencia relacional (SQLite3, 1:N), así como en la analítica de datos mediante gráficos estadísticos interactivos con Pandas y Matplotlib, y la generación automatizada de informes académicos y actas oficiales en PDF con ReportLab.",
    technologies: ["Python", "SQLite3", "Pandas", "Matplotlib", "ReportLab", "Platypus"],
    githubUrl: "https://github.com/Orphereum/2DAM_DI_Universidad"
  },
  {
    id: 2,
    title: "Kilómetro a Kilómetro (Desktop)",
    subtitle: "Trabajo de Fin de Grado (TFG) — Desarrollo Individual Absoluto",
    category: "Python Desktop / Finanzas",
    image: portadaKilometro,
    dbImage: esquemaKilometro,
    pdfDocumentation: memoriaPdfKm,
    shortDescription: "Software de escritorio dedicado a la auditoría, optimización y gestión inteligente del consumo de combustible y costes vehiculares. Diseñado de extremo a extremo bajo una arquitectura desacoplada, implementando una interfaz de usuario avanzada y fluida con PySide6 (Qt) y una base de datos relacional robusta en SQLite3 para la trazabilidad exhaustiva de repostajes, gastos y estadísticas de eficiencia.",
    technologies: ["Python", "PySide6 (Qt)", "SQLite3", "Logback / Lógica de Negocio", "Git"],
    githubUrl: "https://github.com/cristobaldp/Kilometro_Kilometro_Python",
    architectureDiagrams: [
      { label: "👤 Casos de Uso", img: casosUsoKm },
      { label: "🧱 Componentes", img: componentesKm },
      { label: "📅 Planificación (Gantt)", img: ganttKm },
      { label: "🗺️ Navegación de la App", img: navegacionKm },
      { label: "🔄 Flujo General", img: flujoGeneralKm },
      { label: "📊 Flujo Estadísticas", img: flujoEstadisticasKm },
      { label: "⛽ Flujo Repostajes", img: flujoRepostajeKm },
      { label: "🚗 Flujo Registro Vehículo", img: flujoVehiculoKm }
    ]
  },
  {
    id: 3,
    title: "Kilómetro a Kilómetro (Mobile)",
    subtitle: "Portabilidad Móvil — Interfaz de Usuario Declarativa y Reactiva",
    category: "Android Native / Kotlin",
    image: portadaMovilKm,
    dbImage: esquemaKilometro,
    pdfDocumentation: memoriaPdfKm,
    shortDescription: "Ecosistema móvil nativo para Android del software de control de combustible y gastos. Desarrollado íntegramente en Android Studio utilizando Kotlin y Jetpack Compose para conseguir una interfaz totalmente moderna, fluida y reactiva. Implementa una base de datos local SQLite (Room/SQLDelight) sincronizada con las reglas de negocio estructurales del proyecto de ingeniería original.",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "SQLite3", "Material Design 3", "Git"],
    githubUrl: "https://github.com/cristobaldp/Kilometro_A_Kilometro_Kotlin",
    architectureDiagrams: [
      { label: "👤 Casos de Uso", img: casosUsoKm },
      { label: "🧱 Componentes", img: componentesKm },
      { label: "📅 Planificación (Gantt)", img: ganttKm },
      { label: "🗺️ Navegación de la App", img: navegacionKm },
      { label: "🔄 Flujo General", img: flujoGeneralKm },
      { label: "📊 Flujo Estadísticas", img: flujoEstadisticasKm },
      { label: "⛽ Flujo Repostajes", img: flujoRepostajeKm },
      { label: "🚗 Flujo Registro Vehículo", img: flujoVehiculoKm }
    ]
  },
  {
    id: 4,
    title: "SecureDrop: Proyecto de Securización",
    subtitle: "Ingeniería de la Seguridad — Criptografía Aplicada Cliente-Servidor",
    category: "Java / Cybersecurity",
    image: portadaSecureDrop, // <-- Vinculado el logo aquí
    dbImage: null,
    shortDescription: "Auditoría de código, refactorización y fortificación (hardening) de una aplicación cliente-servidor basada en sockets TCP en Java. El objetivo principal es migrar la versión inestable y expuesta v1 hacia SecureDrop v2 implementando comunicaciones seguras mediante TLS, almacenamiento de contraseñas con Hash + Salt, cifrado simétrico AES-GCM para datos en disco y control de acceso robusto por roles con logs de auditoría.",
    technologies: ["Java", "Java Sockets", "Cryptography (AES/RSA)", "TLS / SSL", "PBKDF2 / SHA-256", "Cybersecurity"],
    githubUrl: "https://github.com/AdriTg00/Criptografia",
    architectureDiagrams: [
      { label: "🔐 Esquema Criptográfico (v2)", img: esquemaCriptografia }
    ]
  }
];

export default function Projects() {
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (imgUrl, title) => {
    setActiveModalImage(imgUrl);
    setModalTitle(title);
  };

  const closeModal = () => {
    setActiveModalImage(null);
    setModalTitle("");
  };

  return (
    <div className="page-container projects-page">
      <header className="page-header">
        <span className="page-label">{'> portfolio.works'}</span>
        <h1 className="page-title">Proyectos Destacados</h1>
        <p className="page-subtitle">Soluciones de software desarrolladas de principio a fin</p>
      </header>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            
            {/* PORTADA ENLAZADA A GITHUB */}
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card__image-link"
              title="Abrir repositorio en GitHub"
            >
              <div className="project-card__thumb">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-card__no-thumb">{project.category}</div>
                )}
                <span className="project-card__category-tag">{project.category}</span>
                <div className="project-card__overlay">
                  <span className="overlay-text">➔ Abrir en GitHub</span>
                </div>
              </div>
            </a>

            {/* CONTENIDO TEXTUAL */}
            <div className="project-card__body">
              <span className="project-card__subtitle">{project.subtitle}</span>
              
              <h2 className="project-card__title">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h2>
              
              <p className="project-card__description">{project.shortDescription}</p>
              
              <div className="project-card__tech-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="project-tech-tag">{tech}</span>
                ))}
              </div>

              {/* BOTONERA DE ACCIONES */}
              <div className="project-card__actions">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn project-btn--git"
                >
                  📦 Clonar repositorio
                </a>

                {project.dbImage && (
                  <button 
                    onClick={() => openModal(project.dbImage, "Diagrama Entidad-Relación (BBDD)")}
                    className="project-btn project-btn--db"
                    type="button"
                  >
                    📊 Ver Esquema BBDD
                  </button>
                )}

                {project.pdfDocumentation && (
                  <a 
                    href={project.pdfDocumentation} 
                    download="Memoria_TFG_Cristobal_Delgado.pdf" 
                    className="project-btn project-btn--pdf"
                    title="Descargar Memoria del Proyecto en PDF"
                  >
                    📄 Descargar Memoria (PDF)
                  </a>
                )}
              </div>

              {/* EXTRA: ARQUITECTURA TÉCNICA / ESQUEMAS */}
              {project.architectureDiagrams && (
                <div className="project-card__architecture-section">
                  <div className="architecture-header">// Ingeniería de Software, Criptografía y Planificación</div>
                  <div className="architecture-buttons-grid">
                    {project.architectureDiagrams.map((diagram, idx) => (
                      <button
                        key={idx}
                        onClick={() => openModal(diagram.img, diagram.label)}
                        className="architecture-tab-btn"
                        type="button"
                      >
                        {diagram.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </article>
        ))}
      </div>

      {/* VENTANA EMERGENTE (MODAL) */}
      {activeModalImage && (
        <div className="db-modal-overlay" onClick={closeModal}>
          <div className="db-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="db-modal-header-info">
              <h3 className="db-modal-title">{modalTitle}</h3>
              <button 
                className="db-modal-close-btn"
                onClick={closeModal}
                type="button"
              >
                ✕ Volver al proyecto
              </button>
            </div>
            
            <div className="db-modal-image-wrapper">
              <img src={activeModalImage} alt={modalTitle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}