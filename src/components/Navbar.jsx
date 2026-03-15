function Navbar({ language, toggleLanguage }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">

    <h1 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>
  Novu Foods
</h1>

      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded-full bg-black text-white"
      >
        {language === "en" ? "ES" : "EN"}
      </button>

    </nav>
  )
}

export default Navbar