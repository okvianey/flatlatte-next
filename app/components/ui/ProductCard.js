import Link from "next/link";

export default function ProductCard({
  name,
  price,
  description,
  features,
  cta,
  ejemplo,
  highlight,
}) {

  const message = encodeURIComponent(
    "Hola, quiero información sobre el servicio de " + name
  );

  return (
    <div className={'rounded-2xl border p-6 flex flex-col justify-between bg-white'}>
      <div>
        {highlight && (
          <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-[2px] bg-[var(--accent)] text-white">
            Más vendido
          </span>
        )}

        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        <p className="mb-4">{description}</p>

        <p className="text-2xl font-semibold mb-4">{price}</p>

        <ul className="space-y-2 text-sm mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <span>✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center">
        <Link
          href={ejemplo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-center me-4"
        >
          ver ejemplo
        </Link>
        <a
          href={`https://wa.me/529223400366?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent text-center"
        >
          {cta}
        </a>
      </div>

    </div>
  );
}

