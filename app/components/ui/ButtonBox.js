import Link from "next/link"

const ButtonBox = ({ children, url }) => {
  return (
    <Link
      className="btn btn-animation"
      href={url}
      target={`${url.includes("https") ? "_blank" : "_self"}`}
    >
      <div className="inline-flex items-center tracking-wider m-0">
        { children }
        <i className="bi bi-arrow-right ms-2 text-md" />
      </div>

    </Link>
  )
}

export default ButtonBox