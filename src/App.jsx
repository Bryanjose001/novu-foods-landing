import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from "./components/Features"

function App() {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <main>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Home language={language} />
      <Features language={language} />
    </main>
  )
}

export default App