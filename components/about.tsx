import { Card } from "@/components/ui/card"
import { Briefcase, Award, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proactive Backend, Frontend & DevOps Engineer with 6+ years of experience at leading fintech, e-commerce,
            and transportation companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proactive and highly motivated Backend, Frontend (Web), and DevOps Engineer with proven experience at
              Seregela eCommerce, SantimPay, Zowi Tech, and other leading organizations. I bring strong technical
              expertise in designing, building, and deploying secure, scalable systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in Laravel, PHP, Java Spring Boot, TypeScript, Node.js, React.js, Next.js, Go, and DevOps tools
              including Docker, Kubernetes, Terraform, Ansible, CI/CD pipelines (Jenkins, GitHub Actions), and cloud
              platforms (AWS, GCP). Experienced with fintech payment integration, e-commerce platforms, taxi-hailing
              systems, and healthcare applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Known for strong sense of responsibility, diligent work ethic, and tenacity to see projects through
              completion. Passionate about building reliable, maintainable systems. Based in Addis Ababa, Ethiopia.
            </p>
          </Card>

          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <TrendingUp className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">150,000+ Customers Served</p>
                  <p className="text-sm text-muted-foreground">
                    Built Seregela Gebeya FMCG e-commerce platform with fast doorstep delivery
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Multiple Payment Gateway Integration</p>
                  <p className="text-sm text-muted-foreground">
                    Integrated 8+ payment gateways with multiple banks (Cybersource, BOA, CBE, TeleBirr, Enat, Card,
                    Bunna, Apolo, Abay)
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Briefcase className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">99.9% Application Uptime</p>
                  <p className="text-sm text-muted-foreground">
                    Maintained critical systems on AWS and GCP with load balancing and disaster recovery
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="h-6 w-6 text-accent shrink-0 mt-1" />
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
                <h4 className="text-lg font-semibold">Seregela Gebeya PLC</h4>
                <span className="text-sm text-muted-foreground">Feb 2025 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full Stack Developer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Lead development, deployment, and continuous improvement of Seregela Gebeya, a large FMCG e-commerce
                platform on web and Android serving 150,000+ customers. Built and own the backend (Laravel), GCP
                infrastructure, database administration, and web frontends using React.js / Next.js. Launched
                production-ready Loan Platform with secure national eKYC (Fayda) verification for nationwide rollout.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Key Responsibilities:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Backend development with Laravel and payment gateway integrations (8+ banks)</li>
                  <li>• GCP infrastructure, Terraform, Ansible, DNS, load balancing, disaster recovery</li>
                  <li>• eKYC integration (Fayda), real-time analytics, monitoring dashboards</li>
                  <li>• Web frontends with React.js and Next.js, database administration</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">React.js</span>
                <span className="text-xs font-medium text-accent">Next.js</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">Terraform</span>
                <span className="text-xs font-medium text-accent">eKYC</span>
                <span className="text-xs font-medium text-accent">Payment Integration</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">SantimPay</h4>
                <span className="text-sm text-muted-foreground">Feb 2025 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Software Engineer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Leading DevOps initiatives for payment systems. Built and improved CI/CD pipelines, automated
                deployments to AWS (EC2, EKS, S3, IAM), and implemented backup and disaster recovery strategies. Guided
                containerization with Docker and Kubernetes, introduced infrastructure as code with Terraform and
                Ansible, and strengthened monitoring using Prometheus.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Projects:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Loyalty system for fintech backend using Laravel</li>
                  <li>• Payment gateway development and foundational architecture</li>
                  <li>• Full-stack development with PHP, Java Spring Boot, TypeScript, React.js, Next.js</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Java Spring Boot</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">Kubernetes</span>
                <span className="text-xs font-medium text-accent">CI/CD</span>
                <span className="text-xs font-medium text-accent">DevOps</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">Zowi Tech</h4>
                <span className="text-sm text-muted-foreground">Dec 2022 - Present (2+ years)</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Developed and deployed multiple taxi-hailing applications (G-axi, iLift, Seregela, Shufare) using
                Node.js, Docker, MongoDB, and AWS/GCP. Built MERN stack applications for Adika Taxi and iLift serving
                both passengers and drivers, deployed on GCP and AWS. Designed and developed Seregela Gebeya backend
                (Laravel) and frontend (React.js, Next.js) with GCP deployment.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Projects:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• G-axi, iLift, Seregela, Shufare taxi-hailing applications</li>
                  <li>• Adika Food Delivery ecosystem (Customer, Restaurant, Driver apps)</li>
                  <li>• Medhanite healthcare app (medicine finder, doctor discovery)</li>
                  <li>• Full-stack development with frontend maintenance and deployment</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Node.js</span>
                <span className="text-xs font-medium text-accent">MERN</span>
                <span className="text-xs font-medium text-accent">MongoDB</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">Docker</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">A-Trip</h4>
                <span className="text-sm text-muted-foreground">Apr 2023 - Dec 2024 (9 months)</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full-Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Led team in development of vehicle rental system using Go, Flutter, and React.js supporting both
                organizational (contract-based) and individual customers. Streamlined rental processes and enhanced
                accessibility through full-stack development and infrastructure management.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Go</span>
                <span className="text-xs font-medium text-accent">Flutter</span>
                <span className="text-xs font-medium text-accent">React.js</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">Docker</span>
                <span className="text-xs font-medium text-accent">Kubernetes</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">PHE-Ethiopia Consortium</h4>
                <span className="text-sm text-muted-foreground">Aug 2025 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Information Technology Officer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Managing full IT operations and DevOps for organization ensuring smooth infrastructure, application
                deployment, and system reliability. Handle backend development (PHP, Node.js, Laravel, Next.js), CI/CD
                pipelines, Docker & Kubernetes deployments, and server management including cPanel administration.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Responsibilities:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• IT operations, infrastructure, and server management</li>
                  <li>• Backend development and full-stack implementations</li>
                  <li>• CI/CD pipelines, Docker & Kubernetes orchestration</li>
                  <li>• cPanel administration, networking, computer maintenance</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">PHP</span>
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Node.js</span>
                <span className="text-xs font-medium text-accent">Docker</span>
                <span className="text-xs font-medium text-accent">IT Operations</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">MOSS ICT Consultancy</h4>
                <span className="text-sm text-muted-foreground">Apr 2021 - Feb 2022 (11 months)</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full-Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Contributed to development and DevOps operations for fintech company powering MBirr. Worked on backend
                and full-stack development using Laravel, PHP, and Java (Spring Boot), and managed infrastructure and
                deployments on GCP and AWS (EC2). Handled CI/CD pipelines, Docker & Kubernetes orchestration, and
                infrastructure as code.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">PHP</span>
                <span className="text-xs font-medium text-accent">Java Spring Boot</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">DevOps</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
