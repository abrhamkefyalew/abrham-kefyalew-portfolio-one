import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Laravel", "PHP", ".NET", "C#", "Java/Spring Boot", "API Design", "API Integration", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Database Optimization", "Query Tuning"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (EC2, EKS, S3, IAM)",
      "Google Cloud Platform (GCP)",
      "Azure",
      "Docker",
      "Kubernetes",
      "Minikube",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Infrastructure & Automation",
    skills: [
      "Terraform",
      "Ansible",
      "Infrastructure as Code (IAC)",
      "Automated Backup",
      "Disaster Recovery",
      "Load Balancing",
      "Auto-scaling",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "cPanel", "Nginx", "Payment Gateways", "Cybersource"],
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
              <h4 className="text-lg font-semibold">Seregela Gebeya</h4>
              <p className="text-sm text-muted-foreground">
                E-Commerce platform for FMCG products with web and Android support. Built backend with Laravel and
                deployed on GCP using recommended practices.
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
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Other Projects</h4>
              <p className="text-sm text-muted-foreground">
                School Management Systems, Donation Apps, Payment Middlewares, and various enterprise solutions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
