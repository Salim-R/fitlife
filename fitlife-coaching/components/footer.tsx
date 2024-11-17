import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Section supérieure */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo et slogan */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">FitLife Coaching</h2>
            <p className="text-sm text-gray-400">
              Transformez votre vie, un pas à la fois.
            </p>
          </div>
          {/* Liens rapides */}
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="#our-team" className="hover:text-primary transition duration-300">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Section inférieure */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          {/* Droits d'auteur */}
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} FitLife Coaching. Tous droits réservés.
          </p>
          {/* Réseaux sociaux */}
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" className="hover:text-primary transition duration-300">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-primary transition duration-300">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com" className="hover:text-primary transition duration-300">
              <Twitter className="w-5 h-5" />  {/* Assuming you want to use Twitter icon for LinkedIn for demonstration */}
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}