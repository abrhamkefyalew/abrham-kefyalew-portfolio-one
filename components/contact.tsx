import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in working together? Feel free to reach out for opportunities or collaborations
          </p>
        </div>

        <Card className="p-8 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:abrekefe22@gmail.com"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">abrekefe22@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+251903942298"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+251 903 942 298</p>
                <p className="text-sm text-muted-foreground">+251 913 780 190</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-lg">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/abrham-kefyalew-30466721a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t space-y-4">
            <h3 className="text-xl font-semibold text-center">Ready to collaborate?</h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              I'm excited to apply for Backend Developer roles where I can contribute my expertise in Laravel, PHP, .NET
              (C#), API design, MySQL/Postgres, and DevOps practices to help teams solve tough backend challenges and
              drive meaningful impact.
            </p>
            <div className="flex justify-center pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:abrekefe22@gmail.com">
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abrham Kefyalew. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
