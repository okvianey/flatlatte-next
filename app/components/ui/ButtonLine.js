import Link from "next/link"
const ButtonLine = ({ children, url }) => {
  return (
    <Link href={url}
      className={`inline-flex cursor-pointer items-center mx-1 text-sm font-medium text-indigo-400 lg:mb-0 hover:text-indigo-600 border-b-2 border-transparent hover:border-b-2 hover:border-indigo-600 transition ease-out delay-100 hover:scale-110`}
      target={`${url.includes("https") ? "_blank" : "_self"}`} 
    >
      
       {children}
       
    </Link>
  )
}

export default ButtonLine