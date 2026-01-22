import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setDarkMode(true)
    }
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* This fixed header stays at the top of the viewport. 
          The 'fixed' property is stronger than 'sticky' for overriding parent layout issues.
      */}
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/90 dark:bg-[#020617]/90 backdrop-blur-md shadow-md py-3"
            : "bg-[#fafafa] dark:bg-[#020617] py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
              R
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              Rishav<span className="text-orange-500">.Raj</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={router.pathname === item.href}
              />
            ))}
            <div className="h-6 w-[1px] bg-orange-200 dark:bg-slate-800 mx-4" />
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-2xl bg-orange-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-orange-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-bold ${router.pathname === item.href ? "text-orange-500" : "text-slate-900 dark:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* IMPORTANT: This spacer pushes the content down so it doesn't 
          start underneath the fixed navbar.
      */}
      <div className="h-20 w-full bg-transparent pointer-events-none"></div>
    </>
  )
}

function NavItem({ href, label, active }) {
  return (
    <Link
      href={href}
      className={`relative px-5 py-2 text-xs font-black uppercase tracking-widest transition-all ${
        active ? "text-orange-600" : "text-slate-600 dark:text-slate-400 hover:text-orange-500"
      }`}
    >
      {label}
      {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-6 bg-orange-500 rounded-full" />}
    </Link>
  )
}