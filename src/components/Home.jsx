import logo from "../assets/novufoods.png";

function Home({ language }) {
  let content = {
    en: {
      title: "Good Food, Delivered Better",
      subtitle:
        "Discover local restaurants and enjoy fresh meals delivered straight to your door — fast, simple, and reliable.",
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

  <a
    href="https://novu-foods-cuefummfu-bryanjose001s-projects.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
  >
    {language === "en" ? "Order Now" : "Ordena ahora"}
  </a>

  <a
    href="https://novu-foods-cuefummfu-bryanjose001s-projects.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 bg-white text-black rounded-xl font-semibold border border-black hover:bg-gray-100 transition"
  >
    {language === "en" ? "View Restaurants" : "Ver restaurantes"}
  </a>

</div>
      </div>
    </section>
  );
}

export default Home;
