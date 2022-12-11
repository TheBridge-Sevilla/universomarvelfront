import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from 'use-local-storage'
import Personaje from '../Personaje';
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme =()=>{
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }
  return (
    <div className='App' data-theme={theme}>
      <span>Cambiar entre modo noche y modo dia</span>
      <button onClick={switchTheme}>Cambia a modo {theme == "light" ? "Noche" : "Día"}</button>
      <Personaje/>      
    </div>
  )
}

export default App