import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills' 
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('page-enter-active')

  // Controlar cambios de ruta para la animación
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('page-enter')
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'page-enter') {
      const t = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('page-enter-active')
      }, 50)
      return () => clearTimeout(t)
    }
  }, [transitionStage, location])

  // CORRECCIÓN ADICIONAL: Asegurar que si displayLocation está vacío o desincronizado al arrancar, use la real
  const currentSafeLocation = displayLocation.pathname ? displayLocation : location;

  return (
    <div className={`page-wrapper ${transitionStage}`}>
      <Routes location={currentSafeLocation}>
        {/* Al entrar a la raíz, redirige inmediatamente a /about */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        
        {/* Tus rutas principales */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🛡️ RUTA DE ESCAPE CRUCIAL: Si se pierde, recarga o escriben mal la URL, 
            te manda al About en vez de dejar la pantalla en negro */}
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <AnimatedRoutes />
      </main>
    </div>
  )
}