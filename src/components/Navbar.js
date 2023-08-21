export default function Navbar() {

  return (
    <header className="hidden sm:inline-block bg-gray-700 sticky top-0 z-30 sm:w-full">
      <div className="container  mx-auto flex flex-nowrap p-5 flex-row items-center mx-0 w-10/12">
        <a className="text-fuchsia-300 mr-4  text-xl">
          <a href="#about" >
            Valentyna Astrakhovych
          </a>
        </a>
        <nav className="flex flex-nowrap items-center text-base justify-center invisible md:visible">
          <a href="#projects" className="mr-5 hover:text-white">
            My Works
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a href="#contact" className="inline-flex mx-auto items-center text-base ml-auto mr-0 hover:text-fuchsia-300 hover:text-lg invisible md:visible">
          Contact
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
          <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </header>
  );
}