export default function Faq() {
  const faqs = [
    {
      q: '¿Qué solución necesito para mi negocio?',
      a:
        'Depende de cómo vendes hoy.\n\n' +
        '• Si vendes por mensajes → el Catálogo de Ventas por WhatsApp es ideal.\n' +
        '• Si quieres aparecer en Google y verte más profesional → una Página Web.\n' +
        '• Si ya tienes pedidos constantes → puedes agregar automatizaciones.\n\n' +
        'Te ayudamos a empezar con lo justo y crecer solo cuando lo necesites.'
    },
    {
      q: '¿Puedo vender sin usar pasarelas de pago?',
      a:
        'Sí. Muchos negocios lo hacen.\n\n' +
        'El pedido llega directo a tu WhatsApp y tú cobras como ya lo haces: transferencia, efectivo, terminal o contra entrega.\n\n' +
        'Si después quieres pagos en línea, se pueden integrar sin rehacer todo.'
    },
    {
      q: '¿Qué incluye el Catálogo de Ventas por WhatsApp?',
      a:
        'Es un catálogo funcional, pensado para vender.\n\n' +
        'Incluye:\n' +
        '• Hasta 2 secciones\n' +
        '• Hasta 10 productos con fotos y precios\n' +
        '• Botón de pedido que envía el pedido armado a WhatsApp\n' +
        '• Mensaje automático con el resumen del pedido\n' +
        '• Diseño rápido y optimizado para celular\n' +
        '• Enlace listo para compartir (Instagram, Google o QR)\n\n' +
        'Ideal para cafés, repostería y negocios locales.'
    },
    {
      q: '¿Qué incluye la Página Web Profesional?',
      a:
        'Una web clara y confiable para tu negocio.\n\n' +
        'Incluye:\n' +
        '• Hasta 5 secciones\n' +
        '• Diseño profesional\n' +
        '• Conexión a WhatsApp o reservas\n' +
        '• Perfil de Google optimizado\n' +
        '• Dominio y hosting por 1 año'
    },
    {
      q: '¿Puedo actualizar productos o precios yo mismo?',
      a:
        'Sí, agregando el Panel de Control.\n\n' +
        'Con él puedes:\n' +
        '• Cambiar precios\n' +
        '• Activar o desactivar productos\n' +
        '• Actualizar fotos y textos\n\n' 
    },
    {
      q: '¿Qué son los extras?',
      a:
        'Son mejoras opcionales para obtener mejores resultados.\n\n' +
        'Por ejemplo:\n' +
        '• Textos profesionales para vender mejor\n' +
        '• Google / SEO para que te encuentren\n' +
        '• Pedidos ordenados o agenda automática\n\n' +
        'Puedes agregarlos al inicio o después.'
    },
    {
      q: '¿Hay pagos mensuales?',
      a:
        'No. El desarrollo es un pago único.\n\n' +
        'Solo hay una renovación anual si quieres mantener activo tu enlace, dominio u hospedaje, que incluye mantenimiento técnico y respaldos.'
    },
    {
      q: '¿Cuánto tiempo toma entregar mi proyecto?',
      a:
        '• Catálogo por WhatsApp: desde 48 horas\n' +
        '• Página web: entre 2 y 4 semanas\n\n' +
        'Siempre te damos un plazo claro antes de empezar.'
    },
    {
      q: '¿Puedo agregar más cosas después?',
      a:
        'Sí. Tu proyecto está pensado para crecer.\n\n' +
        'Puedes agregar extras, automatizaciones o mejoras sin empezar de cero.'
    }
  ]

  return (
    <section id="faq" className="section bg-[var(--bg)]">
      <div className="container">
        <h2 className="subtitle-left">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="bg-white p-4 rounded shadow group"
            >
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                {f.q}
                <span className="text-xl opacity-60 group-open:rotate-180 transition">
                  ↓
                </span>
              </summary>
              <p className="mt-3 text-sm whitespace-pre-line">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
