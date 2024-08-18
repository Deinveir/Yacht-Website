import './App.css'
import Navbar from './components/Navbar.jsx'

function App( {children} ) {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  )
}

export default App
