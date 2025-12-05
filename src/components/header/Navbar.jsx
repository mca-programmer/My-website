import { useState } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            MCA Musarraf Hosen
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">
            Contact
          </a>
          <a 
            href="https://drive.google.com/file/d/1qXOgCxVM3aSN65LRbenVz__vpq9D0nLT/view"
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all font-medium"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 py-2">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 py-2">
              Contact
            </a>
            <a href="https://drive.google.com/file/d/1gg1taJMqEUGgD7pP7QDOLW35rOI_OLhR/view?usp=sharing" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-indigo-400 py-2">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;