import Image from "next/image";
import Link from "next/link";

export default function Okvianey() {
  const links = [
    {
      href: "https://youtube.com/@nohomestudio",
      image: "/assets/img/nohomestudio.jpg",
      alt: "nohome studio",
      text: "nohome studio",
      description: "Producimos música donde sea",
      emoji: "🎵"
    },
    {
      href: "https://flatlatte.com/",
      image: "/assets/img/flatlatte.webp",
      alt: "Flat Latte",
      text: "Flat Latte",
      description: "Sitios Web para emprendedores",
      emoji: "💻"
    },
    {
      href: "https://okvianey.github.io/",
      image: "/assets/img/web-portfolio.webp",
      alt: "Portfolio",
      text: "Portfolio",
      description: "English version",
      emoji: "🌐"
    },
    {
      href: "https://www.instagram.com/okvianey",
      image: "/assets/img/dia.jpg",
      alt: "Mi día a día",
      text: "Mi día a día",
      description: "Creando algo",
      emoji: "📱"
    }
  ];

  return (
    <div className="section">
      <div className="container min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className=" max-w-lg mx-auto px-2">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <Image
                src="/assets/img/vianey-perfil.jpg"
                alt="Vianey"
                width={150}
                height={150}
                // quality={100}
                className="rounded-full object-cover mx-auto border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Vianey</h1>
            <p className="text-gray-600 text-sm">
              Un cafecito mientras sobrepensamos todo y creamos algo.
            </p>
          </div>

          {/* Links Grid */}
          <div className="space-y-3 mb-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-3 border border-gray-100 hover:border-gray-300 hover:scale-[1.02]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="relative">
                    <Image
                      src={link.image}
                      alt={link.alt}
                      width={50}
                      height={50}
                      className="w-10 h-10 md:w-20 md:h-20 rounded-lg object-cover"
                    />
                    {/* Para ver emojis */}
                    {/* <span className="absolute -top-1 -right-1 text-xs">{link.emoji}</span> */}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:flex-1 items-baseline space-x-2">
                      <div className="link-text font-semibold text-gray-800 text-sm truncate">
                        {link.text}
                      </div>
                      <span className="hidden md:block text-gray-400 text-xs">•</span>
                      <div className="link-description text-gray-600 text-xs truncate">
                        {link.description}
                      </div>
                    </div>
                  </div>
                </div>
                
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-md font-bold text-gray-800 mb-4 flex items-center">
              Sobre mí
            </h3>
            <div className="text-gray-700 text-sm space-y-3">
              <p>
                Desde 2013 mezclo mi pasión por el café, la música y la tecnología para dar vida a proyectos con propósito.
              </p>
              <p>
                Con <strong>Flat Latte</strong>, convierto la cafeina en sitios web 
                limpios y funcionales. En <strong>nohome studio</strong>, hacemos 
                música sincera, sin preocuparnos de los límites técnicos.
              </p>
              <p>
                Mi trabajo consiste en tomar lo que hay, entenderlo a fondo y llevarlo al máximo: simplificar lo complejo sin vaciarlo de sentido.
              </p>
              <p className="text-gray-600 ">
                Porque lo que vale la pena no requiere adornos, solo necesita existir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}