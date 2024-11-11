import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <p>123 Rue du Fitness</p>
            <p>Paris</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Horaires</h3>
            <p>Lun-Ven: 6h-22h</p>
            <p>Sam-Dim: 8h-20h</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <p>04 72 00 00 00</p>
            <p>contact@fitlife.fr</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}