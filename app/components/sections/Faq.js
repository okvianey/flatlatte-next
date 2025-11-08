export default function Faq(){
  const faqs = [
    {q:'¿Qué tipo de sitios web hacen?', 
      a:'Trabajamos principalmente con cafeterías y negocios locales que necesitan: menús, pedidos, reservas, blogs y tiendas online.'
    },
    {q:'¿Cuánto tiempo toma crear un sitio web?', 
      a:'Depende de la complejidad. Proyectos básicos tardan entre 2 y 4 semanas.'
    },
    {q:'¿Puedo vender mis productos en mi sitio?', 
      a:'Sí. Podemos integrar tienda o botones de pago según lo que necesites.'
    },
    {q:'¿Qué pasa si necesito cambios?', 
      a:'Podemos hacerlos por ti o enseñarte a manejarlos. Cambios grandes pueden costar adicional.'
    },
  ]
  return (
    <section id="faq" className="section bg-[var(--bg)]">
      <div className="container">
        <h2 className="text-2xl font-heading mb-6">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f,i)=>(
            <details key={i} className="bg-white p-4 rounded shadow">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
