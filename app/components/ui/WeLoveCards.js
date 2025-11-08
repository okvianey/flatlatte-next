import Link from "next/link";

export default function WeLoveCards() {
  const passions = [
    {
      // title: "El café",
      description: "El café recién molido.",
      icon: "☕️",
      // color: "from-amber-500 to-orange-500"
    },
    {
      // title: "Música auténtica", 
      description: "La música sincera.",
      icon: "🎵",
      // color: "from-purple-500 to-pink-500"
    },
    {
      // title: "Simplicidad",
      description: "La belleza de lo simple.",
      icon: "✨",
      // color: "from-blue-500 to-cyan-500"
    },
    {
      // title: "Proyectos con alma",
      description: "Crear proyectos con propósito.",
      icon: "💫",
      // color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="we-love" className="we-love section py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            En Flat latte disfrutamos:
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Lo que nos inspira cada día a crear cosas extraordinarias */}
          </p>
        </div>

        {/* Grid de pasiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {passions.map((passion, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${passion.color} flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {passion.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{passion.title}</h3>
              <p className="text-gray-400">{passion.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gray-800 rounded-2xl py-20">
          <p 
            className="text-2xl md:text-3xl font-bold mb-6 text-white"
            data-aos="fade-up"
          >
            ¿Y tú también amas lo que haces?
          </p>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <Link 
              href="/contact" 
              className="btn btn-accent my-10"
            >
              <span className="me-2">🚀</span>
              <span>Hagamos equipo</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}