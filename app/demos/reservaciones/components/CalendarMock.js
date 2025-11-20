"use client";

export default function CalendarMock({ reserva }) {
  const hours = Array.from({ length: 15 }, (_, i) => 7 + i); // 7:00 a 22:00

  // Si no hay reserva aún
  const bookedHour = reserva?.hora ? parseInt(reserva.hora.split(":")[0]) : null;

  return (
    <div className="w-full bg-white border rounded-lg p-4 shadow-sm mb-6">
      <h3 className="text-lg font-medium text-[#4B2E23]">Vista demo: Google Calendar</h3>

      <div className="grid grid-cols-1 gap-1">
        {hours.map((h) => {
          const isBooked = h === bookedHour;
          const label = `${h.toString().padStart(2, "0")}:00`;

          return (
            <div
              key={h}
              className={`flex items-center border rounded p-2 h-12 relative transition-all 
                ${isBooked ? "bg-[#F3E8E2] border-[#C59A7B]" : "bg-gray-50"}
              `}
            >
              <span className="text-xs text-gray-500 w-16">{label}</span>

              {isBooked && (
                <div className="absolute left-20 right-2 top-1/2 -translate-y-1/2 bg-[#C59A7B] text-white text-xs px-2 py-1 rounded">
                  Reservado ({reserva?.nombre || "Cliente"})
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
