import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">FitLife Coaching</h2>
            <p className="text-sm text-gray-400">Transformez votre vie, un pas à la fois.</p>
          </div>

          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="#our-team" data-prerender className="transition duration-300 hover:text-primary">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="#faq" data-prerender className="transition duration-300 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" data-prerender className="transition duration-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} FitLife Coaching. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-primary" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-primary" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/fitlife" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
