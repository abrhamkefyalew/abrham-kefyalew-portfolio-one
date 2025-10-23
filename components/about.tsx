import { Card } from "@/components/ui/card"
import { Briefcase, Award, TrendingUp, ExternalLink } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Senior Software Engineer & DevOps Expert with 6+ years building scalable systems for fintech, e-commerce,
            and enterprise platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Senior Software Engineer and DevOps professional with 6+ years of experience designing, building, and
              deploying scalable backend systems, microservices, and cloud-native applications. Expertise in Java
              (Spring Boot), TDD (JUnit, Mockito), and modern API design including GraphQL and REST.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in contract testing (Pact, Spring Cloud Contract), database optimization (PostgreSQL, MySQL,
              MongoDB), CI/CD pipelines, Docker, Kubernetes (EKS/Minikube), Terraform, and cloud platforms (AWS, GCP,
              Azure). Experienced with event-driven systems (Kafka, RabbitMQ) and monitoring tools (Grafana, Prometheus,
              Dynatrace).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about building reliable, maintainable, and cloud-ready systems that make an impact at scale.
              Based in Addis Ababa, Ethiopia.
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
                <h4 className="text-lg font-semibold">SantimPay Financial Solution</h4>
                <span className="text-sm text-muted-foreground">Aug 2022 - Present (3+ years)</span>
              </div>
              <p className="text-muted-foreground mb-2">Software Engineer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Financial technology solutions platform. Working on DevOps, Laravel, and Spring Framework with roles in
                API integrations, networking, and system deployment.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Java Spring</span>
                <span className="text-xs font-medium text-accent">DevOps</span>
                <a href="https://santimpay.com/" target="_blank" rel="noopener noreferrer" className="ml-auto">
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">Zowi Tech</h4>
                <span className="text-sm text-muted-foreground">Dec 2022 - Present (2+ years)</span>
              </div>
              <p className="text-muted-foreground mb-2">Laravel Backend Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Software development company specializing in web and Android-based products. Deploying products on AWS,
                GCP, and cPanel infrastructure.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">DevOps</span>
                <a href="https://zowitech.com/" target="_blank" rel="noopener noreferrer" className="ml-auto">
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">PHE Ethiopia Consortium</h4>
                <span className="text-sm text-muted-foreground">Aug 2022 - Present (3+ years)</span>
              </div>
              <p className="text-muted-foreground mb-2">DevOps Engineer & IT Officer</p>
              <p className="text-sm text-muted-foreground mb-3">
                NGO Consortium focused on empowering women and shaping children's futures. Managing IT infrastructure
                and DevOps operations for organizational systems.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-accent">DevOps</span>
                <span className="text-xs font-medium text-accent">IT Infrastructure</span>
                <span className="text-xs font-medium text-accent">Cloud</span>
                <a href="https://www.phe-ethiopia.org/" target="_blank" rel="noopener noreferrer" className="ml-auto">
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">MOSS ICT Consultancy</h4>
                <span className="text-sm text-muted-foreground">Apr 2021 - Jan 2022 (10 months)</span>
              </div>
              <p className="text-muted-foreground mb-2">Software Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                IT consulting company providing software development and technology solutions. Contributed to various
                enterprise software projects.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-accent">Backend Development</span>
                <span className="text-xs font-medium text-accent">Software Engineering</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
