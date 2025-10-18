import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden grid-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-neon/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Romain Carel
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-primary mb-6">
              Développeur Fullstack & Intégrateur IA
            </div>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              "Je conçois des systèmes fiables, évolutifs et intelligents — où la technologie reste au service de l'humain."
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              <Badge variant="primary">Next.js</Badge>
              <Badge variant="neon">TypeScript</Badge>
              <Badge variant="purple">Prisma</Badge>
              <Badge variant="primary">PostgreSQL</Badge>
              <Badge variant="neon">Vercel</Badge>
              <Badge variant="purple">IA & Automations</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#projets" variant="primary">
                Voir mes projets
              </Button>
              <Button href="#contact" variant="outline">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <Section id="tldr" title="TL;DR" className="bg-white/5">
        <div className="grid md:grid-cols-2 gap-6">
          <Card glowColor="primary">
            <h3 className="text-xl font-bold mb-3 text-primary">Spécialité</h3>
            <p className="text-foreground/80">
              SaaS multi-tenant, CRM/ERP sur mesure, intégrations IA pragmatiques
            </p>
          </Card>
          <Card glowColor="neon">
            <h3 className="text-xl font-bold mb-3 text-accent-neon">Stack cœur</h3>
            <p className="text-foreground/80 font-mono text-sm">
              Next.js (App Router) · TypeScript · Prisma ORM · PostgreSQL · Vercel Pro · AWS S3
            </p>
          </Card>
          <Card glowColor="purple">
            <h3 className="text-xl font-bold mb-3 text-accent-purple">Forces</h3>
            <p className="text-foreground/80">
              Sécurité (JWT/cookies), data-modeling propre, perfs/observabilité, DX soignée, livrables stables
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-3">Cibles</h3>
            <p className="text-foreground/80">
              Organisations, PME locales, produits internes, MVP → Scale
            </p>
          </Card>
        </div>
      </Section>

      {/* Profil Section */}
      <Section id="profil" title="🧭 Profil">
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p className="text-lg">
            Autodidacte passionné, je développe depuis trois ans des applications web complètes, de l'idée à la mise en production.
            Ma spécialité : <span className="text-primary font-semibold">concevoir des architectures claires, sécurisées, et scalables</span>, en intégrant l'intelligence artificielle de manière utile et éthique.
          </p>
          <p className="text-lg">
            Mon approche est celle d'un bâtisseur de systèmes : chaque ligne de code doit résoudre un vrai besoin, et chaque projet doit pouvoir grandir sans perdre en lisibilité.
            Je combine une solide culture produit, un sens du design, et une expertise back-end affirmée.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-2">Autonomie</h3>
            <p className="text-foreground/70">
              Je gère un projet du concept au déploiement
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Rigueur</h3>
            <p className="text-foreground/70">
              Pas de code sans validation, pas de fonctionnalité sans usage
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-foreground/70">
              Chaque projet s'inscrit dans une stratégie produit cohérente
            </p>
          </Card>
        </div>
      </Section>

      {/* Stack & Compétences */}
      <Section id="stack" title="⚙️ Stack & Compétences" className="bg-white/5">
        <div className="space-y-8">
          <Card glowColor="primary">
            <h3 className="text-xl font-bold mb-4 text-primary">Front-End</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js 15 (App Router)</Badge>
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>TailwindCSS</Badge>
              <Badge>shadcn/ui</Badge>
              <Badge>Zod</Badge>
              <Badge>react-hook-form</Badge>
            </div>
          </Card>

          <Card glowColor="neon">
            <h3 className="text-xl font-bold mb-4 text-accent-neon">Back-End & API</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Route Handlers Next.js</Badge>
              <Badge>JWT / Cookies sécurisés</Badge>
              <Badge>RBAC</Badge>
              <Badge>Rate Limiting</Badge>
              <Badge>Argon2id</Badge>
            </div>
          </Card>

          <Card glowColor="purple">
            <h3 className="text-xl font-bold mb-4 text-accent-purple">Données & ORM</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>PostgreSQL</Badge>
              <Badge>Prisma ORM</Badge>
              <Badge>Prisma Accelerate</Badge>
              <Badge>SQLite (dev/test)</Badge>
              <Badge>Transactions</Badge>
              <Badge>Multi-tenant</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-4">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Vercel Pro</Badge>
              <Badge>AWS S3</Badge>
              <Badge>Firebase</Badge>
              <Badge>Cron Vercel</Badge>
              <Badge>GitHub Actions</Badge>
              <Badge>Pusher</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-4">Automations & IA</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>OpenAI API</Badge>
              <Badge>Anthropic Claude</Badge>
              <Badge>Brevo</Badge>
              <Badge>Zapier</Badge>
              <Badge>n8n</Badge>
              <Badge>Midjourney</Badge>
              <Badge>Suno</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* Domaines de maîtrise */}
      <Section title="🧩 Domaines de maîtrise">
        {/* Version Desktop (Table) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-4 font-bold text-primary">Domaine</th>
                <th className="p-4 font-bold text-primary">Objectif</th>
                <th className="p-4 font-bold text-primary">Résultat</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold">SaaS multi-tenant</td>
                <td className="p-4">Structurer des plateformes à rôles multiples avec logique d'accès fine</td>
                <td className="p-4 text-accent-neon">Produits stables, évolutifs et sécurisés</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold">CRM & ERP sur mesure</td>
                <td className="p-4">Construire des outils internes pour la gestion humaine et financière</td>
                <td className="p-4 text-accent-neon">Productivité et cohérence des données</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold">Intégration IA</td>
                <td className="p-4">Connecter des modèles IA aux flux métier</td>
                <td className="p-4 text-accent-neon">Automatisations intelligentes et mesurées</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold">Design System & UX</td>
                <td className="p-4">Garantir une cohérence visuelle et fonctionnelle</td>
                <td className="p-4 text-accent-neon">Interfaces sobres, lisibles, modernes</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold">Architecture API / Back-end</td>
                <td className="p-4">Créer des bases solides et maintenables</td>
                <td className="p-4 text-accent-neon">Coûts réduits, longévité des produits</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Version Mobile (Cards) */}
        <div className="md:hidden space-y-4">
          <Card>
            <h4 className="font-bold text-primary mb-2">SaaS multi-tenant</h4>
            <p className="text-sm text-foreground/70 mb-2">Structurer des plateformes à rôles multiples avec logique d'accès fine</p>
            <p className="text-sm text-accent-neon">→ Produits stables, évolutifs et sécurisés</p>
          </Card>
          <Card>
            <h4 className="font-bold text-primary mb-2">CRM & ERP sur mesure</h4>
            <p className="text-sm text-foreground/70 mb-2">Construire des outils internes pour la gestion humaine et financière</p>
            <p className="text-sm text-accent-neon">→ Productivité et cohérence des données</p>
          </Card>
          <Card>
            <h4 className="font-bold text-primary mb-2">Intégration IA</h4>
            <p className="text-sm text-foreground/70 mb-2">Connecter des modèles IA aux flux métier</p>
            <p className="text-sm text-accent-neon">→ Automatisations intelligentes et mesurées</p>
          </Card>
          <Card>
            <h4 className="font-bold text-primary mb-2">Design System & UX</h4>
            <p className="text-sm text-foreground/70 mb-2">Garantir une cohérence visuelle et fonctionnelle</p>
            <p className="text-sm text-accent-neon">→ Interfaces sobres, lisibles, modernes</p>
          </Card>
          <Card>
            <h4 className="font-bold text-primary mb-2">Architecture API / Back-end</h4>
            <p className="text-sm text-foreground/70 mb-2">Créer des bases solides et maintenables</p>
            <p className="text-sm text-accent-neon">→ Coûts réduits, longévité des produits</p>
          </Card>
        </div>
      </Section>

      {/* Architecture & Data Modeling */}
      <Section title="🧱 Prisma & Data Architecture" className="bg-white/5">
        <div className="space-y-6">
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
            Extrait d'un schéma Prisma multi-tenant avec gestion des rôles et isolation des données :
          </p>
          <CodeBlock language="prisma">
{`model Tenant {
  id        String   @id @default(cuid())
  name      String
  users     Membership[]
  createdAt DateTime @default(now())
}

model User {
  id           String        @id @default(cuid())
  email        String        @unique
  passwordHash String
  memberships  Membership[]
  createdAt    DateTime      @default(now())
}

model Membership {
  id        String   @id @default(cuid())
  userId    String
  tenantId  String
  role      Role
  createdAt DateTime @default(now())

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@unique([userId, tenantId])
  @@index([tenantId, role])
}

enum Role {
  ADMIN
  MANAGER
  USER
}`}
          </CodeBlock>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card>
              <h4 className="font-bold mb-2 text-primary">🔒 Sécurité</h4>
              <p className="text-sm text-foreground/70">Par conception, isolation des données</p>
            </Card>
            <Card>
              <h4 className="font-bold mb-2 text-accent-neon">📈 Performance</h4>
              <p className="text-sm text-foreground/70">Index optimisés pour queries rapides</p>
            </Card>
            <Card>
              <h4 className="font-bold mb-2 text-accent-purple">♾️ Évolutivité</h4>
              <p className="text-sm text-foreground/70">Croissance linéaire sans refonte</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Projets */}
      <Section id="projets" title="🚀 Projets Sélectionnés">
        <div className="grid md:grid-cols-2 gap-6">
          <Card glowColor="primary" hover>
            <h3 className="text-2xl font-bold mb-3 text-primary">Synergie CRM</h3>
            <p className="text-foreground/80 mb-4">
              Suite complète multi-rôle (admin, organisme, intervenant, utilisateur).
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              ➡ Architecture modulaire, automatisations IA, envoi de mails, suivi de workflow, documents dynamiques.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Next.js</Badge>
              <Badge variant="neon">Prisma</Badge>
              <Badge variant="purple">PostgreSQL</Badge>
              <Badge>Vercel</Badge>
              <Badge>Pusher</Badge>
              <Badge>n8n</Badge>
            </div>
          </Card>

          <Card glowColor="neon" hover>
            <h3 className="text-2xl font-bold mb-3 text-accent-neon">ImaMissio</h3>
            <p className="text-foreground/80 mb-4">
              Écosystème numérique pour paroisses : site web, logiciel de gestion et application mobile.
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              ➡ Centraliser les données, sécuriser la communication et supprimer la double saisie.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Next.js</Badge>
              <Badge variant="neon">Prisma</Badge>
              <Badge variant="purple">PostgreSQL</Badge>
              <Badge>Firebase</Badge>
              <Badge>AWS S3</Badge>
            </div>
          </Card>

          <Card glowColor="purple" hover>
            <h3 className="text-2xl font-bold mb-3 text-accent-purple">Trouvance</h3>
            <p className="text-foreground/80 mb-4">
              Outil SEO IA pour entreprises locales.
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              ➡ Génération dynamique de contenu structuré, suivi de position, et veille IA.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Next.js</Badge>
              <Badge variant="neon">Prisma Accelerate</Badge>
              <Badge variant="purple">Cron Vercel</Badge>
              <Badge>OpenAI API</Badge>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-2xl font-bold mb-3">Lucides</h3>
            <p className="text-foreground/80 mb-4">
              Plateforme pédagogique sur l'intelligence artificielle.
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              ➡ Architecture modulaire (domaines, modules, parcours adaptatifs) et analytics intégrés.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Next.js</Badge>
              <Badge variant="neon">Prisma</Badge>
              <Badge variant="purple">PostgreSQL</Badge>
              <Badge>IA générative contrôlée</Badge>
            </div>
          </Card>

          <Card hover className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Chrétien Réfléchi</h3>
            <p className="text-foreground/80 mb-4">
              Projet artistique et spirituel utilisant IA musicale et visuelle (Suno, Midjourney).
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              ➡ 400+ chants originaux, automatisation du workflow vidéo et publication YouTube.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Automations n8n</Badge>
              <Badge variant="neon">IA générative</Badge>
              <Badge variant="purple">YouTube API</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* Philosophie */}
      <Section title="🧠 Philosophie technique">
        <Card glowColor="primary" className="max-w-4xl mx-auto">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Je crois à une technologie responsable, qui sert la mission plutôt que de la complexifier.
              J'écris du code prévisible, typé, et documenté.
            </p>
            <p className="text-lg">
              Chaque architecture repose sur trois piliers :
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-bold text-primary mb-2">Lisibilité</h4>
                <p className="text-sm">Un code qu'un autre développeur peut comprendre immédiatement</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-accent-neon mb-2">Robustesse</h4>
                <p className="text-sm">Une sécurité pensée dès la conception</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-accent-purple mb-2">Scalabilité</h4>
                <p className="text-sm">Un produit capable de croître sans refonte constante</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-center border-l-4 border-primary pl-6 py-4 mt-8">
              "La vraie élégance technique, c'est quand tout fonctionne simplement, même dans la complexité."
            </blockquote>
          </div>
        </Card>
      </Section>

      {/* Approche projet */}
      <Section title="🧰 Approche projet" className="bg-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="text-2xl mb-3">1️⃣</div>
            <h3 className="font-bold mb-2">Cadrage clair</h3>
            <p className="text-foreground/70 text-sm">Comprendre le besoin métier avant le code</p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">2️⃣</div>
            <h3 className="font-bold mb-2">Modélisation précise</h3>
            <p className="text-foreground/70 text-sm">Schéma Prisma + maquettes UX</p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">3️⃣</div>
            <h3 className="font-bold mb-2">Livraison incrémentale</h3>
            <p className="text-foreground/70 text-sm">MVP → durcissement → run stable</p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">4️⃣</div>
            <h3 className="font-bold mb-2">Qualité continue</h3>
            <p className="text-foreground/70 text-sm">Validation Zod, tests, monitoring, relectures</p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">5️⃣</div>
            <h3 className="font-bold mb-2">Documentation</h3>
            <p className="text-foreground/70 text-sm">Schéma, workflows, et runbooks d'incidents</p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">6️⃣</div>
            <h3 className="font-bold mb-2">Amélioration continue</h3>
            <p className="text-foreground/70 text-sm">Métriques → itérations</p>
          </Card>
        </div>
      </Section>

      {/* Sécurité */}
      <Section title="🔐 Sécurité & bonnes pratiques">
        <div className="grid md:grid-cols-2 gap-6">
          <Card glowColor="primary">
            <h4 className="font-bold mb-3 text-primary">✓ Validation stricte</h4>
            <p className="text-foreground/70 text-sm">Zod sur chaque input</p>
          </Card>
          <Card glowColor="neon">
            <h4 className="font-bold mb-3 text-accent-neon">✓ Cookies sécurisés</h4>
            <p className="text-foreground/70 text-sm">httpOnly, Secure, SameSite</p>
          </Card>
          <Card glowColor="purple">
            <h4 className="font-bold mb-3 text-accent-purple">✓ Hash Argon2id</h4>
            <p className="text-foreground/70 text-sm">Pour les mots de passe</p>
          </Card>
          <Card>
            <h4 className="font-bold mb-3">✓ Rate limiting & CSRF</h4>
            <p className="text-foreground/70 text-sm">Pour les endpoints sensibles</p>
          </Card>
          <Card className="md:col-span-2">
            <h4 className="font-bold mb-3">✓ Conformité RGPD</h4>
            <p className="text-foreground/70 text-sm">Anonymisation, purge, export des données</p>
          </Card>
        </div>
      </Section>

      {/* Exemple d'API sécurisée */}
      <Section title="💻 Exemple d'API sécurisée" className="bg-white/5">
        <div className="space-y-6">
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
            Exemple d'endpoint Next.js sécurisé avec validation Zod et guards :
          </p>
          <CodeBlock language="typescript">
{`// app/api/records/route.ts
import { z } from "zod";
import { authUser, tenantGuard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const Create = z.object({ title: z.string().min(1).max(120) });

export async function POST(req: Request) {
  const user = await authUser(req);                 // JWT + cookie guard
  const { tenantId } = await tenantGuard(user);     // vérif appartenance

  const body = await req.json();
  const input = Create.parse(body);                 // validation stricte

  const rec = await prisma.record.create({
    data: { tenantId, title: input.title },
  });

  // (optionnel) revalidateTag("record:list:" + tenantId);

  return Response.json({ ok: true, record: rec });
}`}
          </CodeBlock>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <h4 className="font-bold mb-2 text-primary">🔐 Auth Guard</h4>
              <p className="text-sm text-foreground/70">Vérification JWT + cookies</p>
            </Card>
            <Card>
              <h4 className="font-bold mb-2 text-accent-neon">✓ Validation Zod</h4>
              <p className="text-sm text-foreground/70">Type-safe runtime checks</p>
            </Card>
            <Card>
              <h4 className="font-bold mb-2 text-accent-purple">🏢 Multi-tenant</h4>
              <p className="text-sm text-foreground/70">Isolation par tenantId</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Engagement & Livrables */}
      <Section title="📦 Engagement & Livrables">
        <div className="grid md:grid-cols-2 gap-6">
          <Card glowColor="primary">
            <h4 className="font-bold mb-4 text-primary">Livrables</h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>Code propre, docs courtes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>Scripts seed, checklists run/ops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>Tests clés</span>
              </li>
            </ul>
          </Card>
          <Card glowColor="neon">
            <h4 className="font-bold mb-4 text-accent-neon">Communication</h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Tickets clairs, changelog succinct</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Décisions d'archi tracées</span>
              </li>
            </ul>
          </Card>
          <Card glowColor="purple">
            <h4 className="font-bold mb-4 text-accent-purple">Respect</h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>Dette technique maîtrisée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>No over-engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">→</span>
                <span>No vendor lock-in caché</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold mb-4">Modèles</h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Forfait MVP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Régie pour itérations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Accompagnement run</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Ce que je ne fais pas */}
      <Section title="🚫 Ce que je ne fais pas" className="bg-white/5">
        <Card className="max-w-4xl mx-auto">
          <ul className="space-y-4 text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="text-2xl">⛔</span>
              <div>
                <h4 className="font-bold mb-1">Empilement gratuit de micro-services</h4>
                <p className="text-sm text-foreground/70">La complexité doit être justifiée</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⛔</span>
              <div>
                <h4 className="font-bold mb-1">IA gadget sans ROI ni maintien</h4>
                <p className="text-sm text-foreground/70">L'IA doit créer de la valeur mesurable</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⛔</span>
              <div>
                <h4 className="font-bold mb-1">Front tape-à-l'œil qui sacrifie la lisibilité</h4>
                <p className="text-sm text-foreground/70">Le design sert l'usage, pas l'inverse</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⛔</span>
              <div>
                <h4 className="font-bold mb-1">Features "juste au cas où"</h4>
                <p className="text-sm text-foreground/70">Je priorise l'essentiel</p>
              </div>
            </li>
          </ul>
        </Card>
      </Section>

      {/* Checklist qualité */}
      <Section title="✅ Checklist Qualité">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-bold mb-3 text-primary">Validation & Sécurité</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Zod sur toutes les entrées externes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Routes sensibles → CSRF + cookies httpOnly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Prisma where: &#123; tenantId &#125; obligatoire</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold mb-3 text-primary">Performance</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Index revus à chaud (requêtes top N)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>EXPLAIN sur requêtes lentes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Logs corrélés (reqId/tenantId/userId)</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold mb-3 text-primary">Tests & Déploiement</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Tests seed + dataset anonymisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Plan de rollback migration testé</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold mb-3 text-primary">Conformité & Monitoring</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Purge/Export RGPD documentés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-neon">✓</span>
                <span>Quotas & coûts IA surveillés</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Objectif professionnel */}
      <Section title="🎯 Objectif professionnel" className="bg-white/5">
        <Card glowColor="primary" className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Intégrer une équipe où la rigueur technique rencontre une vision produit claire,
              et où la création de valeur prime sur la complexité gratuite.
            </p>
            <div>
              <h4 className="font-bold mb-4 text-primary">Je recherche des projets :</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-neon">→</span>
                  <span>SaaS ou outils internes à fort enjeu métier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-neon">→</span>
                  <span>Produits avec logique d'authentification/rôles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-neon">→</span>
                  <span>Intégrations IA ou automatisations concrètes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-neon">→</span>
                  <span>Environnements modernes (Next.js, Prisma, TypeScript)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="📫 Contact">
        <div className="max-w-2xl mx-auto">
          <Card glowColor="primary" className="text-center">
            <h3 className="text-2xl font-bold mb-6">Construisons des outils solides, lisibles et durables.</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Email</p>
                <a
                  href="mailto:romspopopoms@icloud.com"
                  className="text-lg font-mono hover:text-primary transition-colors"
                >
                  romspopopoms@icloud.com
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-2">GitHub</p>
                <a
                  href="https://github.com/Romspopopoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono hover:text-primary transition-colors"
                >
                  github.com/Romspopopoms
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-2">LinkedIn</p>
                <a
                  href="https://fr.linkedin.com/in/romain-carel-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono hover:text-primary transition-colors"
                >
                  linkedin.com/in/romain-carel-dev
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="mailto:romspopopoms@icloud.com"
                variant="primary"
              >
                Me contacter par email
              </Button>
              <Button
                href="https://github.com/Romspopopoms"
                variant="outline"
              >
                Voir sur GitHub
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-foreground/60 text-sm">
            <p>© 2025 Romain Carel · Développeur Fullstack & Intégrateur IA</p>
            <p className="mt-2 font-mono text-xs">
              Built with Next.js 15 · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
