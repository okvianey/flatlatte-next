const CardProject = ({
  title,
  href,
  img,
  type
}) => {
  return (
    <a key={title} href={href}
      className="group overflow-hidden flex flex-col bg-cover rounded bg-slate-50 transition ease-in-out duration-300 transform hover:scale-[1.03]"
    >
      <div
        className="h-100 bg-cover bg-center overflow-hidden bg-cover h-80 group bg-slate-100 filter-none sm:filter saturate-50 group-hover:filter-none"
        style={{ backgroundImage: `url(${img})` }} 
        />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-xs text-[var(--accent)]">{type}</div>
      </div>
    </a>
  )
}

export default CardProject