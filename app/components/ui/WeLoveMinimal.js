export default function WeLoveMinimal() {
  const loveItems = [
    "Del café recién molido",
    "La música sincera", 
    "La belleza de lo simple",
    "Crear proyectos con propósito"
  ];

  return (
    <section id="we-love" className="we-love section py-24 bg-white">
      <div className="container max-w-4xl">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Lo que nos mueve
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Pequeños placeres que hacen grande nuestro trabajo
          </p>
        </div>

        {/* Grid de elementos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {loveItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center group-hover:bg-coffee/20 transition-colors">
                <span className="text-lg">•</span>
              </div>
              <p className="text-lg text-gray-700 font-medium pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-coffee to-amber-700 rounded-3xl p-12 text-white">
          <p 
            className="text-2xl md:text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            ¿Compartes nuestra pasión?
          </p>
          <p 
            className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Si amas lo que haces tanto como nosotros, tenemos mucho en común.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <a 
              href="/contacto" 
              className="bg-white text-coffee px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-3 text-lg font-bold hover:scale-105 shadow-2xl"
            >
              <span>✨</span>
              <span>Hablemos de proyectos</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}