import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[hsl(var(--background))] py-8 text-[hsl(var(--foreground))]">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">FitLife Coaching</h2>
            <p className="text-sm/6 text-[hsl(var(--foreground))/0.7]">
              Transformez votre vie, un pas à la fois.
            </p>
          </div>

          <nav aria-label="Liens de pied de page" role="navigation">
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link
                  href="/#our-team"
                  prefetch={false}
                  className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                >
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  prefetch={false}
                  className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  prefetch={false}
                  className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[hsl(var(--foreground))/0.7] md:flex-row">
          <p>© {new Date().getFullYear()} FitLife Coaching. Tous droits réservés.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/company/fitlife"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
