"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider} from "./theme-provider"    

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#results", label: "Résultats" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur text-gray-800" : "bg-white text-gray-800"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tighter text-primary font-poppins">FitLife</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeProvider />
            <Button size="lg" className="hidden md:inline-flex" asChild>
              <Link href="#contact">Commencer</Link>
            </Button>
            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="lg" className="w-full" asChild>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Commencer</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}