import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Abrham Kefyalew</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">Backend Developer | DevOps Expert</p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          Building secure and scalable backend systems with Laravel, PHP, .NET (C#), and modern DevOps practices.
          Specialized in API design, database optimization, and cloud infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href="https://www.linkedin.com/in/abrham-kefyalew-30466721a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8 text-muted-foreground">
          <a
            href="mailto:abrekefe22@gmail.com"
            className="hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+251903942298"
            className="hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrham-kefyalew-30466721a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/abrham"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
