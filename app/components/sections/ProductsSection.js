import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { products } from "@/assets/products";

export default function ProductsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="subtitle">
            Soluciones claras para vender en línea
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu negocio. Sin planes confusos,
            sin letras chiquitas.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/precios" className="btn btn-accent">
            Armar mi proyecto ahora
          </Link>
        </div>

      </div>
    </section>
  );
}
