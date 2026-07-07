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

  return (
    <div className={`page-wrapper ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
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