import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {

  return (
    <div className="left-0 top-0 w-full h-full bg-gradient-to-r from-blue-400 via-white to-red-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
