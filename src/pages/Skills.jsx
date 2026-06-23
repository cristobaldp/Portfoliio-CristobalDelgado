import { useState } from "react";
import "./Skills.css";

// IMPORTACIÓN DE TUS LOGOS REALES
import logoJava from "../assets/Java.png"; 
import logoBaseDatos from "../assets/BaseDatos.png";
import logoPython from "../assets/Python.png";
import logoWeb from "../assets/Web.png";
import logoAndroid from "../assets/Android.png";
import logoIdes from "../assets/IDE s.png"; 
import logoOfiematica from "../assets/Ofiematica.png"; 
import logoReact from "../assets/react.svg"; 
import logoErp from "../assets/odoo_logo.png"; // Asegúrate de que el archivo en assets coincida con este nombre (ej. Odoo.png o Erp.png)

const skillsData = {
  'Sistemas de Gestión (ERP)': {
    icon: logoErp,
    items: [
      'Desarrollo de módulos Odoo', 
      'Desarrollo de submódulos Odoo', 
      'Personalización y arquitectura Odoo', 
      'Microsoft Dynamics AX (Axapta)', 
      'Modelado de procesos de negocio', 
      'Integración de flujos empresariales'
    ]
  },
  'Java': {
    icon: logoJava,
    items: ['Java Standard Edition', 'Programación Orientada a Objetos (POO)', 'JDBC-JPA', 'Hibernate', 'Arquitectura MVC', 'Estructuras de datos', 'Resolución de problemas técnicos']
  },
  'Base de Datos': {
    icon: logoBaseDatos,
    items: ['Bases de datos relacionales', 'SQL', 'MySQL Server', 'SQLite3', 'ObjectDB (JPA)', 'Optimización de consultas', 'XAMPP', 'phpMyAdmin']
  },
  'Python': {
    icon: logoPython,
    items: ['Desarrollo Backend', 'FastAPI', 'Integración de APIs', 'Estructuras JSON', 'Framework PySide6', 'Tkinter', 'Pandas', 'Matplotlib', 'ReportLab (PDF)']
  },
  'Programación Web': {
    icon: logoWeb,
    items: ['React Framework', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Flask', 'Jinja2', 'PHP', 'HTML5', 'CSS3', 'Web Scraping', 'Figma (UI/UX)']
  },
  'Desarrollo Móvil': {
    icon: logoAndroid,
    items: ['Flutter (Multiplataforma)', 'Desarrollo Nativo Android', 'Jetpack Compose', 'Kotlin', 'Firebase Integration']
  },
  'IDEs': {
    icon: logoIdes,
    items: ['Visual Studio Code', 'IntelliJ IDEA', 'Eclipse IDE', 'NetBeans', 'Android Studio', 'Unity', 'Godot Engine']
  },
  'Herramientas de Ofimática': {
    icon: logoOfiematica,
    items: ['Microsoft Excel (Avanzado)', 'Microsoft Word', 'Microsoft PowerPoint', 'Google Workspace', 'Análisis de datos']
  },
  'Trabajo en Equipo': {
    icon: logoReact,
    items: ['Metodologías Ágiles', 'Gestión con Jira', 'Trello', 'Control de versiones Git', 'GitHub / GitHub Desktop']
  }
};

export default function Skills() {
  // Ajustado por defecto para destacar tu perfil de gestión empresarial al entrar
  const [activeTab, setActiveTab] = useState('Sistemas de Gestión (ERP)');

  return (
    <div className="page-container skills-full-page">
      <header className="page-header">
        <span className="page-label">{'> technical.stack'}</span>
        <h1 className="page-title">Conocimientos Técnicos</h1>
        <p style={{ margin: 0 }} className="page-subtitle">Mi ecosistema de herramientas y lenguajes de programación</p>
      </header>

      <div className="skills-main-layout">
        {/* Selector de categorías en cuadrícula profesional */}
        <div className="skills-grid-selector">
          {Object.entries(skillsData).map(([category, data]) => (
            <button
              key={category}
              className={`skill-card-btn ${activeTab === category ? 'is-active' : ''}`}
              onClick={() => setActiveTab(category)}
              type="button"
            >
              <div className="skill-card-icon-wrapper">
                <img src={data.icon} alt="" className="skill-card-img" />
              </div>
              <span className="skill-card-text">{category}</span>
            </button>
          ))}
        </div>

        {/* Visor de detalle del Stack seleccionado */}
        <div className="skills-detail-panel">
          <div className="detail-header">
            <img src={skillsData[activeTab].icon} alt="" className="detail-large-logo" />
            <div className="detail-title-group">
              <span className="detail-label">Categoría</span>
              <h2 className="detail-title">{activeTab}</h2>
            </div>
          </div>

          <div className="detail-items-container">
            {skillsData[activeTab].items.map((item, index) => (
              <div key={item} className="detail-pill">
                <span className="pill-number">0{index + 1}</span>
                <span className="pill-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}