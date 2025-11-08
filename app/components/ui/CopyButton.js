'use client'

const CopyButton = ({ children, textToCopy }) => {

  const copyText = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button
      onClick={copyText}
      className="mx-auto h-16 cursor-pointer flex items-center mt-8 group text-sm font-mono tracking-wide px-6 py-2 relative border-2 border-indigo-600 text-indigo-600 hover:text-neutral-50 before:content-[''] before:absolute before:h-full before:top-0 before:left-0 before:w-0 before:bg-indigo-600 before:transition-all before:ease-out before:duration-300 hover:before:w-full before:z-0"
    >
      <div className="my-2 font-sm font-light opacity-0 text-indigo-400 group-hover:opacity-100 absolute right-0 -top-10 transition group-hover:-translate-y-2 ease-out duration-300">
        Click to copy
      </div>

      <div className="relative inline-flex items-center tracking-wider">
        {children}
        <svg
          className="w-8 h-8 pl-1 md:hidden"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
        </svg>
      </div>

    </button>
  );
}

export default CopyButton;