import { Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'

function App() {
  return (
    <Routes>
      {/* La ruta raíz redirige directamente a About */}
      <Route path="/" element={<About />} />
    </Routes>
  )
}

export default App