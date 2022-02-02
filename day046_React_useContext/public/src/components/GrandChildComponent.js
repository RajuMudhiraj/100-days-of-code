import {useContext} from 'react'
import {App, ThemeContext} from '../App'

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <div>The theme is {theme}</div>

      <button onClick={() => setTheme(theme == 'dark'? 'light':'dark')}>
        Change To {theme == 'dark'? 'light':'dark'} Theme
        </button>
    </>
  )
}

export default GrandChildComponent;