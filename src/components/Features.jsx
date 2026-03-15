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
  }

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        {content[language].title}
      </h2>

      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        {content[language].subtitle}
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <span className="text-5xl"></span>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            {content[language].fresh}
          </h3>
          <p className="text-gray-500">{content[language].freshText}</p>
        </div>

        <div className="rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <span className="text-5xl"></span>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            {content[language].delivery}
          </h3>
          <p className="text-gray-500">{content[language].deliveryText}</p>
        </div>

        <div className="rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <span className="text-5xl"></span>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            {content[language].price}
          </h3>
          <p className="text-gray-500">{content[language].priceText}</p>
        </div>
      </div>
    </section>
  )
}

export default Features