import './App.css'
import PixelartGallery from './components/PixelartGallery'
import Footer from './components/Footer/Footer'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="app-container">
        <PixelartGallery />
      </div>
      <Footer />
    </>
  )
}

export default App
