import { Card } from "@/components/ui/card"
import { Briefcase, Award, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Software Developer and DevOps Engineer with 5+ years of proven experience across Fintech and e-commerce platforms, designing, developing, and deploying secure and scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in backend architecture, cloud infrastructure, automation, CI/CD, payment integrations, and production reliability. Strong focus on delivering reliable solutions in fast-paced environments across Fintech, e-commerce, EV technology, healthcare, and enterprise platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in Laravel, PHP, Java Spring Boot, TypeScript, Node.js, React.js, Next.js, Go, Python, and .NET (C#). Expert in AWS (EC2, EKS, S3, IAM), Google Cloud Platform (GCP), Microsoft Azure, Docker, Kubernetes, CI/CD (Jenkins, GitHub Actions), Infrastructure as Code (Terraform, Ansible), and modern DevOps practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently leading DevOps engineering and backend development at EV Infinity (UK) and driving platform scale at Seregela Gebeya (150,000+ customers). Based in Addis Ababa, Ethiopia | Available for UK remote opportunities.
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
                <h4 className="text-lg font-semibold">EV Infinity</h4>
                <span className="text-sm text-muted-foreground">Nov 2025 - Present</span>
              </div>
              <p className="text-sm text-accent font-medium mb-2">London Area, United Kingdom · Remote/Freelance</p>
              <p className="text-muted-foreground mb-2 font-medium">Senior Software Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Leading DevOps engineering and backend software development for EV Infinity, a UK-based EV technology company behind the Infinity App—one of the UK&apos;s smartest EV charging platforms. Architecting and maintaining scalable, high-availability backend systems on Microsoft Azure with real-time EV charging data, geolocation features, payment integrations, and user-facing app functionality for thousands of UK EV drivers.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Key Responsibilities:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Azure backend systems (App Services, Functions, PostgreSQL, Storage, Monitor, Application Insights)</li>
                  <li>• Azure DevOps CI/CD pipelines, Infrastructure as Code (Terraform, ARM/Bicep), containerization with Docker</li>
                  <li>• Infrastructure automation, scaling, security, monitoring with Azure Monitor, Log Analytics</li>
                  <li>• Integration with Mapbox/TomTom SDKs for routing, charger APIs, vehicle data</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Azure</span>
                <span className="text-xs font-medium text-accent">C#</span>
                <span className="text-xs font-medium text-accent">.NET</span>
                <span className="text-xs font-medium text-accent">Terraform</span>
                <span className="text-xs font-medium text-accent">Docker</span>
                <span className="text-xs font-medium text-accent">Kubernetes</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">SantimPay</h4>
                <span className="text-sm text-muted-foreground">Jun 2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Led DevOps initiatives driving automation and reliability across payment systems. Built and improved CI/CD pipelines, automated deployments to AWS (EC2, EKS, S3, IAM), and implemented backup and disaster recovery strategies. Guided containerization with Docker and Kubernetes, introduced infrastructure as code with Terraform and Ansible, and strengthened monitoring using Prometheus.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Contributions:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Designed and implemented loyalty system for fintech backend using Laravel</li>
                  <li>• Contributed to payment gateway development and foundational architecture</li>
                  <li>• Full-stack development with PHP, Java Spring Boot, TypeScript, React.js, Next.js</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Java Spring Boot</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">Kubernetes</span>
                <span className="text-xs font-medium text-accent">CI/CD</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">Seregela Gebeya PLC</h4>
                <span className="text-sm text-muted-foreground">Feb 2025 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Lead Full Stack Engineer & DevOps</p>
              <p className="text-sm text-muted-foreground mb-3">
                Leading the development, deployment, reliability, and continuous improvement of Seregela Gebeya, a large FMCG e-commerce platform on web and Android serving 150,000+ customers with fast doorstep delivery. Built and own the backend (Laravel), GCP infrastructure, database administration, and web frontends using React.js / Next.js.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Key Achievements:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Served 150,000+ customers on FMCG e-commerce platform</li>
                  <li>• Integrated 8+ payment gateways with multiple banks (Cybersource, BOA, CBE, TeleBirr, Enat, Card, Bunna, Apolo, Abay)</li>
                  <li>• Designed and delivered production-ready Loan Platform with secure eKYC (Fayda) verification</li>
                  <li>• 50K+ daily transactions with 40-50% faster response times through infrastructure optimization</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">React.js</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">Terraform</span>
                <span className="text-xs font-medium text-accent">Payment Integration</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">Zowi Tech</h4>
                <span className="text-sm text-muted-foreground">Dec 2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Full-stack development and DevOps for multiple projects including food delivery, taxi-hailing, e-commerce, and healthcare platforms. Developed G-axi, iLift, Seregela, and Shufare taxi-hailing applications using Node.js, MERN stack, Docker, and AWS/GCP. Built Adika Food Delivery ecosystem (Customer, Restaurant, Driver apps) and Medhanite healthcare platform.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Projects:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• Adika Food Delivery - comprehensive ecosystem with three distinct applications</li>
                  <li>• Taxi-hailing applications deployed on AWS and GCP</li>
                  <li>• Medhanite mobile app for medicine and healthcare service discovery</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Node.js</span>
                <span className="text-xs font-medium text-accent">MERN</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">GCP</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">A-Trip</h4>
                <span className="text-sm text-muted-foreground">Apr 2023 - Dec 2024</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full-Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Led development of vehicle rental system using Go, Flutter, and React.js supporting both organizational customers (contract-based) and individual customers. Streamlined rental processes and enhanced accessibility through full-stack development and infrastructure management on AWS/GCP.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Go</span>
                <span className="text-xs font-medium text-accent">Flutter</span>
                <span className="text-xs font-medium text-accent">React.js</span>
                <span className="text-xs font-medium text-accent">AWS</span>
                <span className="text-xs font-medium text-accent">GCP</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">PHE-Ethiopia Consortium</h4>
                <span className="text-sm text-muted-foreground">Aug 2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">ICT Officer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Managing full IT operations and DevOps for organization ensuring smooth infrastructure, application deployment, and system reliability. Handle backend development (PHP, Node.js, Laravel, Next.js), CI/CD pipelines, Docker & Kubernetes deployments, and server management including cPanel administration.
              </p>
              <div className="space-y-2 mb-3">
                <p className="text-xs font-semibold text-foreground">Responsibilities:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                  <li>• IT operations, infrastructure, and server management</li>
                  <li>• Backend development and full-stack implementations</li>
                  <li>• CI/CD pipelines, Docker & Kubernetes, cPanel administration</li>
                  <li>• Networking, computer maintenance, end-to-end IT support</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">PHP</span>
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">Node.js</span>
                <span className="text-xs font-medium text-accent">Docker</span>
                <span className="text-xs font-medium text-accent">Kubernetes</span>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h4 className="text-lg font-semibold">MOSS ICT Consultancy</h4>
                <span className="text-sm text-muted-foreground">Apr 2021 - Feb 2022</span>
              </div>
              <p className="text-muted-foreground mb-2 font-medium">Full-Stack Developer & DevOps Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">
                Contributed to development and DevOps operations for fintech company powering MBirr. Worked on backend and full-stack development using Laravel, PHP, and Java (Spring Boot), and managed infrastructure and deployments on GCP and AWS (EC2). Handled CI/CD pipelines, Docker & Kubernetes orchestration, and infrastructure as code.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-accent">Laravel</span>
                <span className="text-xs font-medium text-accent">PHP</span>
                <span className="text-xs font-medium text-accent">Java Spring Boot</span>
                <span className="text-xs font-medium text-accent">GCP</span>
                <span className="text-xs font-medium text-accent">AWS</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
