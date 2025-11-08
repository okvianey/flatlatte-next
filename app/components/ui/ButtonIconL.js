import Link from "next/link"

const ButtonIconL = ({ children, url, icon }) => {
  

  return (
    <Link href={url}
      className={`btn-highlight`}
      target={`${url.includes("https") ? "_blank" : "_self"}`} 
    >
      {children}
      <i className={`${icon} text-xl ms-2`}></i>
    </Link>
  )
}

export default ButtonIconL