import React, { useState } from 'react'
import ChildComponent from './components/ChildComponent';


const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  )
}
export { App, ThemeContext};