import Link from "next/link"
const ButtonPrimary = ({ children, url }) => {
  return (
    <Link
      className="btn btn-primary"
      href="#"
      target={`${url.includes("https") ? "_blank" : "_self"}`}
    >
      { children }
    </Link>
  )
}

export default ButtonPrimary