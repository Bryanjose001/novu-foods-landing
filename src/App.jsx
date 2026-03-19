import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from "./components/Features"

function App() {
  let [language, setLanguage] = useState("en")

  let toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar language={language} toggleLanguage={toggleLanguage} />

      <main>
        <Home language={language} />
        <Features language={language} />

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#7A9E7E] px-8 py-14 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              {language === "en"
                ? "Ready to order from your favorite restaurants?"
                : "¿Listo para ordenar de tus restaurantes favoritos?"}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#2d2d2d]">
              {language === "en"
                ? "Novu Foods connects you with great local meals in a fast and simple way."
                : "Novu Foods te conecta con excelentes comidas locales de una manera rápida y simple."}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:scale-105">
                {language === "en" ? "Start Ordering" : "Ordena ahora"}
              </button>

              <button className="rounded-full border-2 border-black px-8 py-3 font-semibold text-black transition hover:scale-105">
                {language === "en" ? "View Restaurants" : "Ver restaurantes"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
