export function downloadICS(reserva) {
  if (!reserva || !reserva.fecha || !reserva.hora) {
    alert("La reservación aún no está completa.");
    return;
  }


  const start = `${reserva.fecha.replace(/-/g, "")}T${reserva.hora.replace(":", "")}00`;
  const end = `${reserva.fecha.replace(/-/g, "")}T${(
    parseInt(reserva.hora.split(":")[0]) + 1
  ).toString().padStart(2, "0")}${reserva.hora.split(":")[1]}00`;

  const icsContent = `
    BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    UID:${Date.now()}
    DTSTAMP:${start}
    DTSTART:${start}
    DTEND:${end}
    SUMMARY:Reservación en el café
    DESCRIPTION:Reservación para ${reserva.nombre} (${reserva.personas} personas)
    END:VEVENT
    END:VCALENDAR
`.trim();

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "reserva.ics";
  a.click();
}
