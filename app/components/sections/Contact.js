import CalendlyPopup from "../ui/CalendlyPopup"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-heading mb-4">Hablemos (de tu web, o de café ☕)</h2>
        <p className="mb-6">
        Queremos conocer tu proyecto y lo qué te gustaría lograr.
        Cuéntanos un poco y agendemos una charla breve.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <a className="btn btn-primary mb-2 sm:mb-0"
            href="https://wa.me/529223400366?text=Hola%20%C2%BFMe%20podr%C3%ADas%20dar%20informaci%C3%B3n%20sobre%20..."
            target="_blank"
          >
            <i className="bi bi-whatsapp me-2 text-xl"></i>
            Escríbenos por whatsapp
          </a>

          {/* <CalendlyPopup /> */}
          <CalendlyPopup
            className="mb-2 sm:mb-0"
            buttonType="btn-accent" />


        </div>
        <p className="mt-6 italic text-sm">Prometemos responder antes de que se te enfríe el café.</p>
      </div>
    </section>
  )
}
