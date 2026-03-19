function Features({ language }) {
  const content = {
    en: {
      title: "Why Choose Novu Foods?",
      subtitle:
        "Discover an easier way to order food. Fresh meals, fast delivery, and a simple experience from start to finish.",
      fresh: "Fresh Ingredients",
      freshText:
        "Enjoy meals prepared with fresh ingredients from trusted local restaurants.",
      delivery: "Fast Delivery",
      deliveryText:
        "Order in minutes and receive your food quickly, hot and ready to enjoy.",
      price: "Great Prices",
      priceText:
        "Enjoy restaurant-quality meals at affordable prices without the hassle.",
    },
    es: {
      title: "¿Por qué elegir Novu Foods?",
      subtitle:
        "Descubre una forma más fácil de ordenar comida. Comidas frescas, entrega rápida y una experiencia simple de principio a fin.",
      fresh: "Ingredientes frescos",
      freshText:
        "Disfruta comidas preparadas con ingredientes frescos de restaurantes locales de confianza.",
      delivery: "Entrega rápida",
      deliveryText:
        "Ordena en minutos y recibe tu comida rápido, caliente y lista para disfrutar.",
      price: "Buenos precios",
      priceText:
        "Disfruta comidas de calidad a precios accesibles y sin complicaciones.",
    },
  };

  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
  <div className="max-w-6xl mx-auto">

    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#4b5563]">
        {content[language].title}
      </h2>

      <p className="text-[#4b5563] mb-16">
        {content[language].subtitle}
      </p>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-3xl bg-white p-8 text-center shadow-md border border-gray-100 transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-[#7A9E7E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 5C13 5 8 8.5 6 14c-1 2.5-.5 5 1.5 5C14 19 19 14 19 5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 16c2-2 4-4 8-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              {content[language].fresh}
            </h3>

            <p className="text-gray-500">
              {content[language].freshText}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md border border-gray-100 transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-[#7A9E7E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 7h11v7H3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 10h3l3 3v1h-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="17.5" r="1.5" />
                <circle cx="17.5" cy="17.5" r="1.5" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              {content[language].delivery}
            </h3>

            <p className="text-gray-500">
              {content[language].deliveryText}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md border border-gray-100 transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-[#7A9E7E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 12l-8 8-8-8V4h8l8 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="8.5" r="1.5" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              {content[language].price}
            </h3>

            <p className="text-gray-500">
              {content[language].priceText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
