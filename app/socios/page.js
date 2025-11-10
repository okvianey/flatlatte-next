'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import imgAbout from '@/public/assets/img/flatlatte-v.webp'
import imgServices from '@/public/assets/img/img_v_1.webp'

export default function Socios() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "¿Tengo que saber programar o diseñar sitios web?",
      answer: "No. Nosotros nos encargamos de todo lo técnico. Tú solo necesitas conocer bien a tu cliente y comunicar sus necesidades."
    },
    {
      question: "¿Cuánto puedo ganar por cada sitio web?",
      answer: "Tú decides tu precio. Nosotros te damos un costo base por proyecto y tú agregas el margen que quieras. Lo que cobras al cliente es completamente tuyo."
    },
    {
      question: "¿Puedo usar mi propia marca o nombre para ofrecer el servicio?",
      answer: "Sí. Flat Latte trabaja detrás de escena. Tú puedes presentarlo como un servicio propio o como parte de tu portafolio."
    },
    {
      question: "¿Cómo le explico esto a mi cliente si nunca he ofrecido sitios web?",
      answer: "En nuestra videollamada inicial te damos una guía clara, recursos y ejemplos para que puedas comunicar el valor sin necesidad de hablar de código."
    },
    {
      question: "¿Qué pasa si mi cliente necesita algo más complejo?",
      answer: "Nos puedes consultar. Si el proyecto es viable, te damos un presupuesto especial. Si no encaja, te lo decimos con honestidad."
    },
    {
      question: "¿Qué necesito para empezar?",
      answer: "Solo agendar una videollamada. Te explicamos todo, vemos si encajamos bien y listo: puedes comenzar a ofrecer sitios web con nuestro respaldo"
    }
  ];

  const loveItems = [
    "Del café recién molido.",
    "La música sincera.",
    "La belleza de lo simple.",
    "Crear proyectos con propósito."
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section id="hero" className="section py-20 my-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="lg:w-2/3" data-aos="fade-up" data-aos-delay="300">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Gana más ofreciendo sitios web.
              </h1>
            </div>

            <div className="lg:w-1/3 text-center lg:text-right" data-aos="fade-up" data-aos-delay="600">
              <a
                className="btn btn-accent mb-2 sm:mb-0"
                href="https://wa.me/529223400366?text=Hola%20%C2%BFMe%20podr%C3%ADas%20dar%20informaci%C3%B3n%20sobre%20..."
                target="_blank"
              >
                Quiero ser socio
             </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-7/12 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug" data-aos="fade-up">
                ¿Eres diseñador, fotógrafo, community manager?
              </h1>

              <div className="mb-8" data-aos="fade-up">
                <p className="text-lg text-gray-700 mb-4">
                  Te ayudamos a<strong className="text-coffee"> ofrecer sitios web profesionales</strong> a tus clientes, sin que tengas que preocuparte por lo técnico.
                </p>
                <p className="text-lg text-gray-700">
                  Tú creces. Nosotros construimos.
                </p>
              </div>
            </div>

            <div 
              className="relative lg:w-5/12 order-1 lg:order-2 h-80 lg:h-96 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image 
                src={imgAbout}
                alt='img'
                fill
                className="object-cover rounded-2xl"   
            />
            </div>
            
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="tabs" className="tabs section py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              ¿Cómo funciona?
            </h1>
            <p className="text-xl text-gray-600" data-aos="fade-up">
              Fácil, sin rollos técnicos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-left" data-aos-delay="0">
                <div className="flex-shrink-0 w-16 h-16 bg-coffee text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <i className="bi bi-chat-left-dots text-2xl text-coffee mr-3"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Agendamos una videollamada</h3>
                  </div>
                  <p className="text-gray-700">
                    Te explicamos cómo funciona todo, resolvemos tus dudas y te damos la guía para ofrecer este servicio como parte de lo que ya haces.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-left" data-aos-delay="100">
                <div className="flex-shrink-0 w-16 h-16 bg-coffee text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <i className="bi bi-puzzle text-2xl text-coffee mr-3"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Tu cliente, nuestro código</h3>
                  </div>
                  <p className="text-gray-700">
                    Con la información de tu cliente (nosotros te damos el brief) nos encargamos de crear un sitio web profesional.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-left" data-aos-delay="200">
                <div className="flex-shrink-0 w-16 h-16 bg-coffee text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <i className="bi bi-rocket text-2xl text-coffee mr-3"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Entregas un sitio bonito y funcional</h3>
                  </div>
                  <p className="text-gray-700">
                    Tú entregas un sitio web profesional con el nombre de tu marca,
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12" data-aos="fade-up">
              <a
                className="btn btn-primary mb-2 sm:mb-0"
                href="https://wa.me/529223400366?text=Hola%20%C2%BFMe%20podr%C3%ADas%20dar%20informaci%C3%B3n%20sobre%20..."
                target="_blank"
              >
                Empezar ahora
             </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div 
              className="relative lg:w-2/5 w-full h-80 rounded-2xl shadow-lg"
              data-aos="fade-up"
            >
              <Image 
                src={imgServices}
                alt='img'
                fill
                className='object-cover rounded-2xl'
              />
            </div>

            <div className="lg:w-3/5" data-aos="fade-up">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Beneficios de ser socio:
              </h1>

              <div className="space-y-6">
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="0">
                  <div className="text-3xl mr-4">💰</div>
                  <p className="text-lg text-gray-700">
                    Ingreso extra (tú decides cuánto cobras)
                  </p>
                </div>
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="100">
                  <div className="text-3xl mr-4">🤝</div>
                  <p className="text-lg text-gray-700">
                    Un equipo detrás que te apoya
                  </p>
                </div>
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                  <div className="text-3xl mr-4">✨</div>
                  <p className="text-lg text-gray-700">
                    Más valor para tus clientes, sin más trabajo
                  </p>
                </div>
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-3xl mr-4">🧘‍♀️</div>
                  <p className="text-lg text-gray-700">
                    Menos estrés, más enfoque en lo que haces bien
                  </p>
                </div>
              </div>

              <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn btn-accent mb-2 sm:mb-0"
                  href="https://wa.me/529223400366?text=Hola%20%C2%BFMe%20podr%C3%ADas%20dar%20informaci%C3%B3n%20sobre%20..."
                  target="_blank"
                >
                  Quiero ser socio
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq section py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl text-gray-800">Preguntas Frecuentes</h1>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-gray-800 text-lg">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Love Section */}
      <section id="we-love" className="we-love section py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
              En flat latte disfrutamos...
            </h1>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {loveItems.map((item, index) => (
                <p 
                  key={index}
                  className="text-xl text-gray-700 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="text-center mt-10" data-aos="fade-up">
              <p className="text-2xl font-semibold text-gray-800 mb-8">
                ¿Y tú también amas lo que haces?
              </p>
              <Link 
                href="/#contact" 
                className="btn btn-accent"
              >
                Hagamos equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}