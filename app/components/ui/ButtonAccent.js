import Link from "next/link"
const ButtonAccent = ({ children, url }) => {
  return (
    <Link
      className="btn btn-accent"
      href="#"
      target={`${url.includes("https") ? "_blank" : "_self"}`}
    >
      { children }
    </Link>
  )
}

export default ButtonAccent