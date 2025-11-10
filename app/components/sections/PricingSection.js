import Link from "next/link";
import Image from "next/image";
import imgLinktree from '@/public/assets/img/mockup-linktree-800.png';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Básico",
      emoji: "🧇",
      price: "3,500",
      description: "Ideal para freelancers o pequeños negocios que necesitan presencia en internet.",
      features: [
        { included: true, text: "Hospedaje y dominio (tumarca.com)*" },
        { included: true, text: "1 página" },
        { included: true, text: "Hasta 5 secciones" },
        { included: true, text: "Optimizado para cualquier dispositivo" },
        { included: true, text: "Link a redes sociales" },
        { included: true, text: "2 revisiones" },
        { included: false, text: "Autoadministrable" },
        { included: false, text: "Tienda en línea" }
      ]
    },
    {
      name: "Pro",
      emoji: "🚀",
      price: "5,100",
      popular: true,
      description: "Perfecto para emprendedores, consultores o pequeñas empresas que ofrecen servicios o productos.",
      features: [
        { included: true, text: "Hospedaje y dominio (tumarca.com)*" },
        { included: true, text: "Hasta 3 páginas" },
        { included: true, text: "Hasta 7 secciones" },
        { included: true, text: "Optimizado para cualquier dispositivo" },
        { included: true, text: "Link a redes sociales" },
        { included: true, text: "3 revisiones" },
        { included: true, text: "Autoadministrable" },
        { included: false, text: "Tienda en línea" }
      ]
    },
    {
      name: "Tienda Online",
      emoji: "🛒",
      price: "9,800",
      description: "Ideal comenzar a tu sucursal digital y vender por internet",
      features: [
        { included: true, text: "Hospedaje y dominio (tumarca.com)*" },
        { included: true, text: "Páginas ilimitadas" },
        { included: true, text: "Hasta 7 secciones" },
        { included: true, text: "Optimizado para cualquier dispositivo" },
        { included: true, text: "Link a redes sociales" },
        { included: true, text: "Cambios ilimitados" },
        { included: true, text: "Autoadministrable" },
        { included: true, text: "Tienda en línea" }
      ]
    }
  ];

  const linktreePlan = {
    name: "Portafolio Link",
    emoji: "🌿",
    price: "1,900",
    description: "Todos tus enlaces en un solo sitio: redes sociales, música, portafolio, contacto y más.",
    features: [
      { included: true, text: "Enlace personalizado gratuito (tumarca.flatlatte.com)*" },
      { included: true, text: "Tarjeta digital estilo 'Linktree'" },
      { included: true, text: "1 página" },
      { included: true, text: "Hasta 3 secciones" },
      { included: true, text: "Optimizado para todos los dispositivos" },
      { included: true, text: "2 revisiones" }
    ]
  };

  const extraModules = [
    {
      icon: "bi-pencil-square",
      title: "Autoadministrable",
      description: "Cambia textos e imágenes tú mismo, sin necesidad de tocar el código.",
      price: "$1,800 MXN"
    },
    {
      icon: "bi-pencil",
      title: "Blog",
      description: "Agrega una sección de blog para compartir noticias que puedes actualizar tú mismo.",
      price: "$1,500 MXN"
    },
    {
      icon: "bi-file-earmark-text",
      title: "Redacción de contenido",
      description: "Creamos el texto de tu sitio usando tu estilo y objetivos.",
      price: "$1,500 MXN"
    }
  ];

  const maintenancePlans = [
    {
      title: "Renovación anual",
      subtitle: "(🌿 Portfolio Link)",
      price: "$400** MXN",
      features: [
        "Enlace personalizado por 1 año (tumarca.flatlatte.com)",
        "Mantenimiento técnico",
        "Respaldo de seguridad"
      ]
    },
    {
      title: "Renovación anual",
      price: "$1,200** MXN",
      features: [
        "Dominio y hospedaje por 1 año (tumarca.com)",
        "Mantenimiento técnico",
        "Respaldo de seguridad"
      ]
    }
  ];

  return (
    <section id="pricing" className="pt-20 bg-white">
      {/* Hero Section - Más minimalista */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a tus <span className="text-coffee">necesidades</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Soluciones web diseñadas para hacer crecer tu proyecto
          </p>
          <div className="w-20 h-1 bg-coffee mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Pricing Cards */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group ${
                plan.popular ? 'lg:scale-105' : ''
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-1">
                  <span className="text-default bg-yellow-200 px-4 py-3 rounded text-xs font-medium shadow-sm">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl shadow-sm border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md ${
                plan.popular ? 'shadow-md border-gray-200' : 'border-gray-100'
              }`}>
                {/* Header */}
                <div className="p-6 text-center border-b border-gray-100">
                  <div className="text-3xl mb-3">{plan.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="p-6 border-b border-gray-100 text-center">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-gray-500 text-lg">$</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">MXN</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Pago único</p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 ${
                          feature.included 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <i className={`bi ${feature.included ? 'bi-check text-xs' : 'bi-x text-xs'}`}></i>
                        </div>
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA - Más moderno */}
                <div className="p-6 pt-0">
                  <Link
                    href="/precios#cotizador"
                    className={`w-full py-3 px-6 rounded-lg font-medium text-center ${
                      !plan.popular
                        ? 'btn btn-primary'
                        : 'btn btn-accent'
                    }`}
                  >
                    Elegir {plan.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linktree Special Section */}
      <div className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
              Para creadores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfecto para <span className="text-green-600">músicos y artistas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tu tarjeta de presentación digital con todos tus enlaces en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={imgLinktree}
                alt="linktree img"
                fill
                className="rounded-2xl object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{linktreePlan.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{linktreePlan.name}</h3>
                  <p className="text-green-600 text-sm">Perfecto para portfolios</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">{linktreePlan.description}</p>

              <div className="flex items-baseline space-x-1 mb-6">
                <span className="text-gray-500">$</span>
                <span className="text-3xl font-bold text-gray-900">{linktreePlan.price}</span>
                <span className="text-gray-500">MXN</span>
              </div>

              <ul className="space-y-2 mb-8">
                {linktreePlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                      <i className="bi bi-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/precios#cotizador"
                className="w-full btn bg-green-600 !text-white py-3 px-6 rounded-lg font-medium text-center block hover:bg-green-700 transition-colors duration-200"
              >
                Crear mi Portfolio Link
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Modules */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades <span className="text-coffee">adicionales</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personaliza tu sitio web con estas funcionalidades extra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {extraModules.map((module, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[var(--text-default)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`bi ${module.icon} text-xl text-[var(--text-default)]`}></i>
                  </div>
                  <h4 className="text-lg md:text-md font-semibold text-gray-900 mb-2">{module.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed  height-[160px] md:height-[10px]">{module.description}</p>
                </div>
                <div className="text-center">
                  <span className="bg-gray-100 text-gray-900 px-3 py-1 rounded-full font-medium text-sm">
                    {module.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">
              Soporte y <span className="text-amber-400">mantenimiento</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mantén tu sitio web seguro y actualizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold !text-white mb-1">{plan.title}</h3>
                    {plan.subtitle && (
                      <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                    )}
                  </div>
                  <span className="text-xl font-bold text-amber-400">{plan.price}</span>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-amber-500 rounded flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footnotes - Más compacto */}
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>* Dominio y hospedaje gratis por un año</li>
              <li>** Precio sujeto a cambio</li>
              <li>Todos los precios incluyen I.V.A.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}