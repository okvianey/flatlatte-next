'use client';

import { useState, useEffect } from 'react';

export default function Cotizador() {  
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [extras, setExtras] = useState([]);
  const [total, setTotal] = useState(0);
  const [ selectedPackageLabel, setSelectedPackageLabel ] = useState();

  const packages = [
    { 
      value: '1900', 
      label: 'Portafolio-un-solo-link', 
      display: '🌿 Portafolio-un-solo-link ($1,900)',
      features: [
        'Tarjeta digital (tumarca.flatlatte.com)*',
        '1 página',
        'Hasta 3 secciones',
        'Optimizado para todos los dispositivos',
        '2 revisiones'
      ]
    },
    { 
      value: '3500', 
      label: 'Básico', 
      display: '🧇 Básico ($3,500)',
      features: [
        'Hospedaje y dominio (tumarca.com)*',
        '1 página',
        'Hasta 5 secciones',
        'Optimizado para cualquier dispositivo',
        'Link a redes sociales',
        '2 revisiones'
      ]
    },
    { 
      value: '5100', 
      label: 'Pro', 
      display: '🚀 Pro ($5,100)',
      features: [
        'Hospedaje y dominio (tumarca.com)*',
        'Hasta 3 páginas',
        'Hasta 7 secciones',
        'Optimizado para cualquier dispositivo',
        'Link a redes sociales',
        '3 revisiones',
        'Autoadministrable'
      ]
    },
    { 
      value: '9800', 
      label: 'Tienda Online', 
      display: '🛒 Tienda Online ($9,800)',
      features: [
        'Hospedaje y dominio (tumarca.com)*',
        'Páginas ilimitadas',
        'Hasta 7 secciones',
        'Optimizado para cualquier dispositivo',
        'Link a redes sociales',
        'Cambios ilimitados',
        'Autoadministrable',
        'Tienda en línea'
      ]
    }
  ];

  const extraOptions = [
    {
      value: '700',
      label: 'Dominio personalizado', 
      display: 'Dominio personalizado ($700)', 
      icon: '🌐'
    },
    { value: '1800', 
      label: 'Sitio autoadministrable', 
      display: 'Sitio autoadministrable ($1,800)', 
      icon: '⚙️' 
    },
    { value: '1500', 
      label: 'Blog', 
      display: 'Blog ($1,500)', 
      icon: '👩‍💻'
    },
    { value: '1500', 
      label: 'Redacción de contenido', 
      display: 'Redacción de contenido ($1,500)',
      icon: '📝'
    }
  ];

  const calculateTotal = () => {
    let newTotal = parseInt(selectedPackage) || 0;
    extras.forEach(extra => {
      newTotal += parseInt(extra.value);
    });
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [selectedPackage, extras]);

  
  const handlePackageChange = (e) => {
    const packageValue = e.target.value;
    setSelectedPackage(packageValue);
    
    const selectedPkg = packages.find(pkg => pkg.value === packageValue);
    if (selectedPkg) {
      setSelectedPackageLabel(selectedPkg.label);
    }
  };

  const handleExtraChange = (e) => {
    const { name, checked } = e.target;
    const extra = extraOptions.find(opt => opt.label === name);
    
    if (checked) {
      setExtras([...extras, extra]);
    } else {
      setExtras(extras.filter(item => item.label !== name));
    }
  };

  const getSelectedPackage = () => {
    return packages.find(pkg => pkg.value === selectedPackage);
  };

  const generateWhatsAppMessage = () => {
    const selectedPackageObj = getSelectedPackage();
    let message = `¡Hola! Me interesa cotizar un sitio web:\n\n`;
    
    if (selectedPackageObj) {
      message += `*Paquete:* ${selectedPackageObj.label} ($${parseInt(selectedPackageObj.value).toLocaleString()})\n`;
    }
    
    if (extras.length > 0) {
      message += `*Extras:* ${extras.map(extra => `${extra.label} ($${parseInt(extra.value).toLocaleString()})`).join(', ')}\n`;
    }
    
    message += `\n*Total estimado:* $${total.toLocaleString()} MXN\n\n`;
    message += `Me gustaría obtener más información.`;
    
    return encodeURIComponent(message);
  };

  return (
    <section className="section cotizador bg-gray-50 py-20">
      <div id="cotizador" className="container">
        <h1 className="text-center md:text-center mb-12 text-3xl font-bold" data-aos="zoom-in" data-aos-delay="100">
          Cotiza tu proyecto
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda - Selección */}
          <div className="cotizador-content">
            <div className="cotizador-box bg-white p-6 m-0 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4">Elige tu paquete base:</h3>
              <div className="space-y-3">
                {packages.map((pkg, index) => (
                  <label key={index} className="flex items-start space-x-3 cursor-pointer p-3 m-0 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <input
                      type="radio"
                      name="paquete"
                      value={pkg.value}
                      checked={selectedPackage === pkg.value}
                      onChange={handlePackageChange}
                      className="focus:ring-coffee mt-1"
                    />
                    <div>
                      <span className="font-black">{pkg.display}</span>
                      <p className="text-sm text-gray-600 mt-1">{pkg.features.slice(0, 2).join(' • ')}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="cotizador-box bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Agrega funcionalidades extra:</h3>
              <div className="space-y-3">
                {extraOptions.map((extra, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer p-3 m-0 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <input
                      type="checkbox"
                      className="extra focus:ring-coffee"
                      value={extra.value}
                      name={extra.label}
                      onChange={handleExtraChange}
                      checked={extras.some(e => e.label === extra.label)}
                    />
                    <span>{extra.display}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          {/* Columna derecha - Resumen */}
          <div className="resumen flex flex-col">
            <div id="resumen" className="bg-white p-8 rounded-lg shadow-sm flex-1">
              <h3 className="text-2xl font-bold mb-6 text-center border-b pb-4">
                Resumen de tu selección
              </h3>
              
              {/* Paquete seleccionado */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">📦 Paquete:</h4>
                <div className="bg-coffee/10 p-4 rounded-lg">
                  {
                    selectedPackageLabel === undefined ? 
                      <div></div>
                      : (
                        <div>

                    <p className="font-medium">{selectedPackageLabel} (${parseInt(selectedPackage).toLocaleString()})</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      {getSelectedPackage()?.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                        </div>
                      )
                  }
                </div>
              </div>

              {/* Extras seleccionados */}
              {extras.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">✨ Extras:</h4>
                  <div className="space-y-2">
                    {extras.map((extra, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded ">
                        <span>{extra.label}</span>
                        <span className="font-medium">${parseInt(extra.value).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total estimado:</span>
                  <span className="text-coffee">${total.toLocaleString()} MXN</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Todos los precios incluyen I.V.A.
                </p>
              </div>
            </div>
            
            {/* Botón WhatsApp */}
            <div className="text-center mt-6">
              <a
                id="btn-whatsapp"
                className="btn-whatsapp"
                href={`https://wa.me/529223400366?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Enviar cotización por WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Te contactaremos para afinar detalles y confirmar precios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}