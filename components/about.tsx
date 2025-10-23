import { Card } from "@/components/ui/card"
import { Briefcase, Award, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Backend Developer with expertise in building secure, scalable systems and delivering high-quality APIs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Backend Developer with expertise in Laravel, PHP, .NET (C#), API design, MySQL, and PostgreSQL.
              Experienced in building secure and scalable backend systems, database optimization, and delivering
              high-quality APIs. Skilled in CI/CD, Docker, and cloud deployment, ensuring efficient development and
              reliable system operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong problem-solver with a focus on backend performance, clean architecture, and delivering results that
              matter. Based in Addis Ababa, Ethiopia.
            </p>
          </Card>

          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <TrendingUp className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Enhanced Deployment Efficiency by 60-70%</p>
                  <p className="text-sm text-muted-foreground">
                    Fully automated CI/CD pipelines with Jenkins/GitHub Actions and Kubernetes rollouts
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">99.9% Application Uptime</p>
                  <p className="text-sm text-muted-foreground">
                    Maintained critical systems on AWS and GCP with load balancing and disaster recovery
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Briefcase className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">50K+ Daily Transactions</p>
                  <p className="text-sm text-muted-foreground">
                    Built scalable systems handling high-volume traffic with 40-50% faster response times
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-6">Experience Highlights</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">Seregela</h4>
                <span className="text-sm text-muted-foreground">08/2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">E-commerce platform development</p>
              <p className="text-sm text-muted-foreground">
                Laravel, PHP, .NET, C#, PostgreSQL, MySQL, API Design, AWS/EC2, CI/CD
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">SantimPay Financial Solution</h4>
                <span className="text-sm text-muted-foreground">02/2025 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Financial technology solutions</p>
              <p className="text-sm text-muted-foreground">
                PHP, Laravel, .NET (C#), PostgreSQL, MySQL, AWS (EC2, EKS, S3), Docker, Kubernetes, Terraform
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">ZOWi Tech</h4>
                <span className="text-sm text-muted-foreground">12/2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Software development company</p>
              <p className="text-sm text-muted-foreground">
                Laravel, .NET, PHP, C#, MySQL, PostgreSQL, API Design, AWS/EC2, Docker, Kubernetes
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
