import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Laravel", "PHP", "Java Spring Boot", ".NET", "C#", "Node.js", "Go", "Python", "API Design", "Microservices"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Flutter", "Responsive Design"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Optimization", "Query Tuning"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, EKS, S3, IAM, RDS)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure (App Services, Functions, PostgreSQL Flexible Server, Storage, Monitor, Application Insights)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Infrastructure & Automation",
    skills: [
      "Terraform",
      "Ansible",
      "Infrastructure as Code (IAC)",
      "ARM/Bicep Templates",
      "Jenkins",
      "GitHub Actions",
      "Disaster Recovery",
      "Load Balancing",
      "Auto-scaling",
    ],
  },
  {
    title: "Monitoring & Tools",
    skills: ["Prometheus", "Azure Monitor", "Application Insights", "Git", "cPanel", "Nginx", "Payment Gateways", "eKYC Integration"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across backend development, databases, cloud infrastructure, and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <a
                href="https://seregelagebeya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors inline-block"
              >
                Seregela Gebeya →
              </a>
              <p className="text-sm text-muted-foreground">
                E-Commerce platform for FMCG products with web and Android support. Built backend with Laravel and
                deployed on GCP using recommended practices.
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <h4 className="text-lg font-semibold mb-2">Event Management and Ticketing System (Patatix)</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <a
                    href="http://tickets.patatix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Production →
                  </a>
                  <a
                    href="https://staging.patatix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Staging →
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive event management and ticketing platform for organizing events and selling tickets with secure payment integration.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Medhanite Medical Centers</h4>
              <p className="text-sm text-muted-foreground">
                Medical services platform with pharmacy location mapping. Backend built with Laravel, deployed on AWS
                with Docker, Kubernetes, and CI/CD.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Vehicle Rental & Trip System</h4>
              <p className="text-sm text-muted-foreground">
                Vehicle rental and transport service platform. Laravel backend deployed on AWS with full DevOps
                infrastructure.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
