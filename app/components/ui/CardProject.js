import Image from "next/image"
import Link from "next/link"

const CardProject = ({
  title,
  href,
  img,
  type
}) => {
  return (
    <Link
      key={title}
      href={href}
      className="group overflow-hidden flex flex-col bg-cover rounded bg-slate-50 transition ease-in-out duration-300 transform hover:scale-[1.03]"
    >
      <div
        className="relative h-100 overflow-hidden h-80 group bg-slate-100 filter-none sm:filter saturate-50 group-hover:filter-none"
      >
        <Image
          src={img}
          alt={`${title} - portfolio project`}
          fill
          className="object-cover object-top"
        />
      </div>  
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-xs text-[var(--accent)]">{type}</div>
      </div>
    </Link>
  )
}

export default CardProject