import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />  {/* ✅ This renders child routes */}
      <Footer/>
    </>
  )
}

export default App
