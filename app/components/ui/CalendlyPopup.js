// components/CalendlyModal.jsx
"use client";

import { useState, useEffect } from "react";

export default function CalendlyModal({ buttonType }) {
  const [isOpen, setIsOpen] = useState(false);

  // Cargar Calendly cuando el componente se monta
  useEffect(() => {
    // Verificar si Calendly ya está cargado
    if (window.Calendly) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // También cargar los estilos
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Limpiar si es necesario
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
    // Inicializar Calendly cuando se abre el modal
    setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/flatlatte/hablemos-de-tu-proyecto?hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-container'),
          prefill: {},
          utm: {}
        });
      }
    }, 100);
  };

  const closeModal = () => setIsOpen(false);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="[all:inherit]">
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className={`btn ${buttonType} cursor-pointer`}
      >
        <i className="bi bi-calendar-event me-2 text-xl"></i>
          Agenda videollamada
        {/* <span className="">Agenda videollamada</span> */}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro */}
          <div 
            className="absolute inset-0 bg-opacity-50 transition-opacity"
            onClick={closeModal}
          />
          
          {/* Contenido del modal */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Header del modal */}
            <div className="flex justify-between items-center p-2 border-b">
              {/* <h2 className="text-lg font-semibold">Agendar videollamada</h2> */}
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Body del modal - Contenedor para Calendly */}
            <div className="p-0">
              <div 
                id="calendly-container"
                className="calendly-inline-widget min-w-[320px] h-[500px]"
                data-url="https://calendly.com/flatlatte/hablemos-de-tu-proyecto?hide_event_type_details=1&hide_gdpr_banner=1"
              />
            </div>

             {/* Footer del modal */}
            <div className="modal-footer p-4 border-t bg-gray-50">
              <p className="text-sm text-gray-500 text-center">
                Elige el horario que mejor se adapte a tu disponibilidad
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}