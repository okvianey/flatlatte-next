import Link from "next/link";

export default function CTASection() {
  return (
    <section id="CTA" className="section CTA bg-coffee bg-neutral-200 py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="section-title">
            <div className="">
              <h1 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                ¿Quieres aumentar tus ingresos como freelancer?
              </h1>
              <p className="text-xl" data-aos="fade-up">
               Únete a nuestra red de socios y ofrece desarrollo web premium a tus clientes - tú ganas ingresos extra, nosotros hacemos el trabajo técnico.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              className="btn btn-accent"
              href="/socios"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Quiero ser socio
            </Link>
          </div>
           {/* Texto secundario sutil */}
          <p 
            className="mt-8 text-sm text-gray-500"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Sin compromisos iniciales • Soporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
}