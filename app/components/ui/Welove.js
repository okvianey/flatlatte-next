export default function WeLove() {
  const loveItems = [
    {
      text: "Del café recién molido",
      emoji: "☕",
      delay: 0
    },
    {
      text: "La música sincera",
      emoji: "🎵",
      delay: 100
    },
    {
      text: "La belleza de lo simple",
      emoji: "✨",
      delay: 200
    },
    {
      text: "Crear proyectos con propósito",
      emoji: "🚀",
      delay: 300
    }
  ];

  return (
    <section id="we-love" className="we-love section py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
          >
            En <span className="text-coffee">flat latte</span> disfrutamos...
          </h1>
          <div className="w-24 h-1 bg-coffee mx-auto rounded-full" data-aos="fade-up"></div>
        </div>

        {/* Lista de elementos */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6">
            {loveItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 group"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">{item.emoji}</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 font-medium group-hover:text-coffee transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center">
          <p 
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            ¿Y tú también <span className="text-coffee">amas lo que haces</span>?
          </p>

          <div data-aos="fade-up" data-aos-delay="500">
            <a 
              href="/contacto" 
              className="btn-get-started bg-coffee text-white px-8 py-4 rounded-full hover:bg-coffee-dark transition-all duration-300 inline-flex items-center space-x-2 text-lg font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>🤝</span>
              <span>Hagamos equipo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}