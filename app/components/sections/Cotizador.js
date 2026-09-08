"use client";

import { useState, useMemo, useEffect } from "react";
import { products, extras, bundles } from "@/assets/products";

export default function Cotizador() {
  const [base, setBase] = useState(products[0]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [bundleActive, setBundleActive] = useState(false);
  const bundle = bundles.find((b) => b.appliesTo === base.type);
  const formatPrice = (value) => value.toLocaleString('en-US');

  const availableExtras = useMemo(() => {
    if (!base) return [];
    return extras.filter((extra) =>
      base.id.includes("whatsapp")
        ? extra.availableFor.includes("whatsapp")
        : extra.availableFor.includes("web")
    );
  }, [base]);

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) => {
      const exists = prev.some((e) => e.id === extra.id);

      const nextExtras = exists
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra];

      // 👉 Si el bundle está activo y el usuario quita algo del bundle
      if (bundleActive && bundle?.extras.includes(extra.id) && exists) {
        setBundleActive(false);
      }

      return nextExtras;
    });
  };

  const [variant, setVariant] = useState("A");

  useEffect(() => {
    const saved = localStorage.getItem("cta_variant");
    if (saved) {
      setVariant(saved);
    } else {
      const v = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("cta_variant", v);
      setVariant(v);
    }
  }, []);

  useEffect(() => {
    if (!bundle) return;

    if (bundleActive) {
      const bundleExtras = extras.filter((e) => bundle.extras.includes(e.id));
      setSelectedExtras(bundleExtras);
    } else {
      setSelectedExtras([]);
    }
  }, [bundleActive, base]);

  const total = useMemo(() => {
    if (bundleActive && bundle) {
      return base.basePrice + bundle.bundlePrice;
    }

    return base.basePrice + selectedExtras.reduce((sum, e) => sum + e.price, 0);
  }, [base, selectedExtras, bundleActive, bundle]);

  const discountAmount = useMemo(() => {
    if (!bundleActive || !bundle) return 0;
    return bundle.originalPrice - bundle.bundlePrice;
  }, [bundleActive, bundle]);

  const whatsappMessage = encodeURIComponent(
    `Hola 👋\n\n` +
      `Quiero cotizar un proyecto con estas características:\n\n` +
      `🧩 *Producto base:* ${base.name}\n` +
      `💼 *Incluye la base profesional completa*\n\n` +
      (bundleActive && bundle ? `🎁 *Pack aplicado:* ${bundle.title}\n` : "") +
      (selectedExtras.length
        ? `✨ *Extras incluidos:*\n${selectedExtras
            .map((e) => `- ${e.title}`)
            .join("\n")}\n\n`
        : "\n") +
      `💰 *Inversión estimada:* $${total.toLocaleString()} MXN\n\n` +
      `¿Me confirmas disponibilidad y los siguientes pasos?`
  );

  return (
    <section id="cotizador" className="bg-color-bg-light py-24">
      <div className="max-w-xl mx-auto px-4 space-y-8">
        <h1 className="title text-center">Cotiza tu sitio en minutos</h1>
        <p className="text-center mb-6">
          Precio claro, sin letras chiquitas
        </p>

        {/* PRODUCTO BASE */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          {/* <h2 className="subtitle-cotizador ">1. </h2> */}
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 subtitle-cotizador ">
              <span className="">1.</span>
              <h2 className="">
                Elige tu producto
              </h2>
            </li>
          </ul>

          <div className="space-y-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  setBase(product);
                  setSelectedExtras([]);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition relative ${
                  base.id === product.id
                    ? "border-black bg-gray-50 ring-2 ring-black"
                    : product.highlight
                    ? "border-gray-200 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {product.highlight && (
                  <span className="inline-block mb-4 text-[10px] uppercase tracking-widest bg-black text-white px-2 py-2 rounded">
                    Ideal para empezar
                  </span>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-start items-center">
                  <div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2">
                        <span className="text-lg leading-none">
                          {product.emoji}
                        </span>
                        <p className="font-semibold text-base leading-snug">
                          {product.name}
                        </p>
                      </li>
                    </ul>

                    <p className="text-xs text-gray-500 mt-1">
                      {product.tagline}
                    </p>

                    <ul className="flex flex-wrap gap-2 mt-2 mb-2 text-[11px] text-gray-500">
                      {product.reassurance.map((r, i) => (
                        <li
                          key={i}
                          className="bg-neutral-100 px-2 py-0.5 rounded"
                        >
                          ✔ {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="font-bold">
                    ${formatPrice(product.basePrice)} MXN
                    {/* ${product.basePrice.toLocaleString()} MXN */}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* INCLUYE */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 mb-6">
          {/* <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
            Incluye
          </h3> */}

          <p className="text-sm text-neutral-600 mb-5">
            Incluye todo lo necesario para que tu proyecto funcione desde el día uno:
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            {base.features.map((f, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-0.5 text-green-600 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
         
        </div>

        {/* BUNDLE */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 subtitle-cotizador ">
              <span className="">2.</span>
              <h2 className="">
                Paga menos hoy y evita contratarlo después
              </h2>
            </li>
          </ul>

          {bundle && (
            <div
              className={`border rounded-2xl p-4 mb-6 ${
                !bundleActive
                  ? "border-gray-200 bg-white"
                  : "bg-gray-50 border-black ring-2 ring-black"
              } `}
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                La mayoría de negocios lo elige
              </p>

              <h3 className="font-semibold mb-2">{bundle.title}</h3>

              <ul className="text-sm text-gray-700 space-y-3 mb-4">
                {bundle.extras.map((id) => {
                  const extra = extras.find((e) => e.id === id);
                  return <li key={id} className="flex gap-1 items-start"><span>✓</span> <span>{extra?.title}</span></li>;
                })}
              </ul>

              <div className="flex justify-between items-center gap-2">
                <div>
                  <p className="font-bold">
                    ${formatPrice(bundle.bundlePrice)}<span className="text-sm">MXN</span>
                  </p>
                  <p className="text-xs text-gray-500 line-through">
                    ${formatPrice(bundle.originalPrice)} MXN
                  </p>
                </div>

                <button
                  onClick={() => setBundleActive(!bundleActive)}
                  className="btn btn-primary"
                >
                  {bundleActive ? "Quitar pack" : "Agregar pack"}
                </button>
              </div>

              <p className="text-xs text-green-600 mt-2">
                Ahorras $
                {formatPrice(bundle.originalPrice - bundle.bundlePrice)}{" "}
                MXN
              </p>
            </div>
          )}
        </div>

        {/* EXTRAS */}
        {availableExtras.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-28">
            <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 subtitle-cotizador ">
              <span className="">3.</span>
              <h2 className="">
                Personaliza según tus necesidades
              </h2>
            </li>
          </ul>

            <div className="space-y-3">
              {availableExtras.map((extra) => (
                <label
                  key={extra.id}
                  className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer ${
                    selectedExtras.some((e) => e.id === extra.id)
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  <div>
                    <p className="">{extra.title}</p>
                    <p className="text-sm text-gray-600 me-1">{extra.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <span className="font-semibold">
                      ${formatPrice(extra.price)}<span className="text-xs">MXN</span>
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedExtras.some((e) => e.id === extra.id)}
                      onChange={() => toggleExtra(extra)}
                    />
                    {selectedExtras.some((e) => e.id === extra.id) && (
                      <span className="text-xs text-neutral-500">Agregado</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* CTA STICKY */}
        <div className="sticky bottom-0 bg-white border-t z-40">
          <div className="max-w-xl mx-auto px-4 py-4 space-y-2">
            {/* INFO PRECIO */}
            <div className="flex justify-between items-start gap-2">
              <div className="basis-3/4">
                <p className="text-xs text-neutral-500">Inversión estimada</p>

                {bundleActive && bundle && (
                  <p className="text-xs text-gray-400 line-through leading-tight">
                    ${(formatPrice(base.basePrice + bundle.originalPrice))}{" "}
                    MXN
                    
                  </p>
                )}

                <p className="text-2xl font-bold leading-tight">
                  ${formatPrice(total)} <span className="text-xs">MXN</span>
                </p>

                {bundleActive && discountAmount > 0 && (
                  <p className="text-xs text-green-700 mt-0.5">
                    Descuento aplicado −${formatPrice(discountAmount)} MXN
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/529223400366?text=${whatsappMessage}`}
                target="_blank"
                className="btn btn-accent px-6 py-3 text-center h-fit"
                data-variant={variant}
              >
                {variant === "A"
                  ? "Continuar por WhatsApp →"
                  : "Recibir cotización →"}
              </a>
            </div>

            {/* MICRO REASEGURO */}
            <p className="text-[11px] text-neutral-500 text-center">
              Te confirmo todo antes de iniciar · Sin pagos automáticos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
