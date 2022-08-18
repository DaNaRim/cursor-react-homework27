import {ThemeProvider} from "styled-components"
import "./App.css"
import {GlobalStyle} from "./GlobalStyle"
import HomePage from "./pages/HomePage/HomePage"
import {darkTheme} from "./theme/theme"

function App() {
  return (
    <main>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
        <HomePage/>
      </ThemeProvider>
    </main>
  )
}

export default App
