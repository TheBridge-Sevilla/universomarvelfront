import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from 'use-local-storage'
import IniciarSesion from './pages/login/IniciarSesion'
import Feed from './pages/feed/Feed'
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <div className='App' data-theme={theme}>
    <IniciarSesion />

    <Feed />
      {/*       <button onClick={switchTheme}>Cambia a modo {theme == "light" ? "Noche" : "Día"}</button> */}
    </div>
  )
}

export default App
