import logo from "../assets/novufoods.png";

function Home({ language }) {
  let content = {
    en: {
      title: "Good Food, Delivered Better",
      subtitle:
        "Discover local restaurants and enjoy fresh meals delivered straight to your door — fast, simple, and reliable.",
      primaryButton: "Start Ordering",
      secondaryButton: "Browse Restaurants",
    },
    es: {
      title: "Buena comida, entregada mejor",
      subtitle:
        "Descubre restaurantes locales y disfruta comidas frescas entregadas directo a tu puerta — rápido, simple y confiable.",
      primaryButton: "Ordena ahora",
      secondaryButton: "Ver restaurantes",
    },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-6"
      style={{ backgroundColor: "#7A9E7E" }}
    >
      <div className="max-w-2xl">
        <img
          src={logo}
          alt="Novu Foods logo"
          className="mx-auto mb-6 w-80"
        />

        <h1 className="text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
          {content[language].title}
        </h1>

        <p className="text-xl mb-6" style={{ color: "#2d2d2d" }}>
          {content[language].subtitle}
        </p>

        <p className="mt-2 mb-6 text-sm text-[#2d2d2d]">
          {language === "en"
            ? "Now available in Puerto Rico "
            : "Ahora disponible en Puerto Rico "}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => (window.location.href = "/restaurants")}
            className="px-8 py-3 rounded-full font-semibold text-white transition duration-300 hover:scale-105"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {content[language].primaryButton}
          </button>

          <button
            onClick={() => (window.location.href = "/restaurants")}
            className="px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
            style={{ backgroundColor: "white", color: "#1a1a1a" }}
          >
            {content[language].secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
