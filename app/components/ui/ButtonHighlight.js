import Link from "next/link"
const ButtonHighlight = ({ children, url }) => {
  return (
    <Link href={url}
      className='relative inline-block group py-1'
      target={`${url.includes("https") ? "_blank" : "_self"}`} 
    >
      
       <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 py-3 bg-yellow-200 opacity-60 transform -rotate-1 transition-all duration-300 group-hover:w-full z-0"></span>
    </Link>
  )
}

export default ButtonHighlight