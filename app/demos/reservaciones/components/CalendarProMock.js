"use client";

import { useState } from "react";

export default function CalendarProMock({ reserva }) {
  const hours = Array.from({ length: 15 }, (_, i) => 7 + i);
  const [hover, setHover] = useState(false);

  const bookedHour = reserva?.hora
    ? parseInt(reserva.hora.split(":")[0])
    : null;

  return (
    <div className="w-full h-full bg-white flex flex-col relative">
      <div className="flex flex-col gap-1 w-full">
        {hours.map((h) => {
          const isBooked = h === bookedHour;
          const label = `${h.toString().padStart(2, "0")}:00`;

          return (
            <div
              key={h}
              className="relative flex items-center h-8 border rounded px-2 bg-gray-50"
            >
              <span className="text-[10px] text-gray-500 w-12">{label}</span>

              {isBooked && (
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="absolute left-16 right-2 h-6 bg-[#C59A7B] text-white text-[10px] flex items-center px-2 rounded shadow transition-all animate-fadeIn"
                >
                  {(reserva.nombre || "Cliente") + " – " + reserva.hora}
                </div>
              )}

              {isBooked && hover && (
                <div className="absolute top-[-55px] left-20 bg-[#4B2E23] text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap animate-fadeIn">
                  <b>Reservación confirmada</b>
                  <br />
                  {reserva.fecha} – {reserva.hora}
                  <br />
                  {reserva.nombre}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
