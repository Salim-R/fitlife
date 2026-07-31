# FitLife Coaching

Site vitrine pour une offre de coaching sportif. Le parcours est construit pour
amener progressivement le visiteur vers la prise de contact : présentation de
l'offre, résultats, équipe, réponses aux objections, puis formulaire.

**Démo en ligne :** https://fitlife-coaching.vercel.app

Le code du projet se trouve dans [`fitlife-coaching/`](./fitlife-coaching).

## Stack

- Next.js 15 (App Router) et React 19
- TypeScript
- Tailwind CSS 4
- Radix UI pour les composants accessibles (accordéon, slots)
- Framer Motion pour les animations
- next-themes pour le mode sombre
- Déployé sur Vercel

## Points travaillés

- Découpage en composants isolés (`hero`, `services`, `results`, `faq`,
  `testimonials`...) avec une couche `components/ui` réutilisable
- Animations au défilement via `react-intersection-observer`, déclenchées
  seulement à l'entrée dans le viewport
- Mode clair / sombre
- Optimisation des polices avec `next/font` (Geist en local)
- Contrôles de qualité intégrés au projet : `type-check` (tsc strict),
  `lint`, `format` (Prettier), `analyze` (bundle) et `security:audit`

## Lancer le projet

```bash
git clone https://github.com/Salim-R/fitlife.git
cd fitlife/fitlife-coaching
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000

## Scripts disponibles

| Commande | Effet |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run build` | build de production |
| `npm run type-check` | vérification TypeScript sans émission |
| `npm run lint` | ESLint |
| `npm run format` | Prettier sur tout le projet |
| `npm run analyze` | analyse de la taille du bundle |

---

Réalisé par Salim Rhamoumi - développeur web full-stack JavaScript
[salimrhamoumi.com](https://www.salimrhamoumi.com/)
