export function Projects() {
  const projects = [
    {
      name: "Seregela Gebeya",
      category: "E-Commerce",
      description: "Large FMCG e-commerce platform serving 150,000+ customers with fast doorstep delivery",
      achievements: [
        "Built backend and web frontends with Laravel, ReactJS, and NextJS",
        "Deployed and automated scalable GCP infrastructure using Terraform and Ansible",
        "Integrated secure eKYC (Fayda) for verified customers",
        "Integrated 8+ payment gateways with multiple banks (Cybersource, BOA, CBE, TeleBirr, Enat, Card, Bunna, Apolo, Abay)",
        "Implemented traffic analytics, reporting dashboards, and logging",
        "Managed DNS, load balancing, disaster recovery, and backups",
        "99.9% application uptime with 50K+ daily transactions",
      ],
      technologies: ["Laravel", "ReactJS", "NextJS", "GCP", "Terraform", "Ansible", "Docker"],
      status: "Active",
      links: [
        { label: "Website", url: "https://seregelagebeya.com/" },
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.seregela.majet&hl=en" },
      ],
    },
    {
      name: "Seregela Loan Platform",
      category: "FinTech",
      description: "Loan platform enabling customers to buy on credit with secure national eKYC verification",
      achievements: [
        "Designed and delivered the Loan Purchase System",
        "Integrated Fayda eKYC verification for secure customer validation",
        "Production-ready for nationwide launch",
      ],
      technologies: ["Laravel", "NextJS", "eKYC Integration", "GCP"],
      status: "Active",
    },
    {
      name: "Event Management and Ticketing System (Patatix)",
      category: "Event Management",
      description: "Comprehensive event management and ticketing platform for organizing and selling event tickets",
      achievements: [
        "Designed and developed event management system with ticketing capabilities",
        "Built scalable backend supporting event creation, ticket sales, and attendee management",
        "Staging and production environments for testing and deployment",
        "Payment integration for secure ticket transactions",
      ],
      technologies: ["Laravel", "React", "Payment Integration", "Event Management"],
      status: "Active",
      links: [
        { label: "Production", url: "http://tickets.patatix.com/" },
        { label: "Staging", url: "https://staging.patatix.com/" },
      ],
    },
    {
      name: "Taxi-Hailing Applications",
      category: "Transportation",
      description: "Multiple taxi-hailing applications serving both drivers and passengers",
      achievements: [
        "Developed G-axi, iLift, Seregela, and Shufare applications",
        "Backend applications for Adika Taxi and iLift using MERN stack",
        "Deployed on both GCP and AWS Cloud platforms",
        "Efficient and reliable transportation services to users",
      ],
      technologies: ["Node.js", "MERN", "React", "Docker", "MongoDB", "AWS", "GCP"],
      status: "Deployed",
    },
    {
      name: "Adika Delivery",
      category: "Food Delivery",
      description: "Comprehensive food delivery ecosystem with apps for end-users, restaurants, and drivers",
      achievements: [
        "Designed and developed backend using Laravel",
        "Created three distinct applications: Customer App, Restaurant App, Driver App",
        "Customer app for browsing menus, placing orders, and tracking deliveries",
        "Restaurant app for managing orders, updating menus, and monitoring performance",
        "Driver app for efficient order fulfillment and route optimization",
      ],
      technologies: ["Laravel", "PHP", "Mobile Development", "AWS", "Docker"],
      status: "Deployed",
      links: [
        { label: "Website", url: "https://www.adikataxi.com/" },
      ],
    },
    {
      name: "Medhanite",
      category: "Healthcare",
      description: "Mobile application for finding medicines in pharmacies and locating healthcare professionals",
      achievements: [
        "Designed and developed Version 1 for searching medicines and locating nearby pharmacies",
        "Spearheaded development of Medhanite Version 2 with expanded features",
        "Extended functionality to include finding doctors, medical centers, and healthcare professionals",
        "Enhanced version ready for deployment",
      ],
      technologies: ["Laravel", "Mobile Development"],
      status: "Ready for Deployment",
    },
    {
      name: "Vehicle Rental System",
      category: "Fleet Management",
      description: "Comprehensive vehicle rental platform supporting organizational and individual customers",
      achievements: [
        "Led team in development of vehicle rental system",
        "Supports both organizational customers (contract-based) and individual customers",
        "Streamlined rental processes and enhanced accessibility",
      ],
      technologies: ["Golang", "Flutter", "React.js", "AWS", "Docker", "Kubernetes"],
      status: "Deployed",
    },
    {
      name: "SantimPay Loyalty System",
      category: "FinTech",
      description: "Loyalty system for fintech backend enhancing user engagement and retention",
      achievements: [
        "Designed and implemented robust and scalable rewards framework",
        "Enhanced user engagement and retention through loyalty programs",
        "Contributed to payment gateway development foundational architecture",
      ],
      technologies: ["Laravel", "PHP", "Payment Integration"],
      status: "Active",
    },
    {
      name: "MBirr Backend Systems",
      category: "FinTech",
      description: "Backend and full-stack development for fintech company powering MBirr",
      achievements: [
        "Contributed to backend and full-stack development",
        "Managed infrastructure and deployments on GCP and AWS",
      ],
      technologies: ["Laravel", "PHP", "Java Spring Boot", "GCP", "AWS", "Docker"],
      status: "Active",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A showcase of impactful projects across e-commerce, fintech, transportation, healthcare, and fleet
            management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all bg-background"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <a
                    href="#"
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-block"
                    onClick={(e) => {
                      if (project.links && project.links.length > 0) {
                        e.preventDefault()
                        window.open(project.links[0].url, "_blank")
                      }
                    }}
                    style={{ cursor: project.links ? "pointer" : "default" }}
                  >
                    {project.name}
                  </a>
                  <p className="text-sm text-muted-foreground font-mono mt-1">{project.category}</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium whitespace-nowrap ml-2">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              {project.links && project.links.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded font-medium hover:opacity-90 transition-opacity"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                  {project.achievements.length > 3 && (
                    <li className="text-sm text-primary font-medium">+{project.achievements.length - 3} more</li>
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-background border border-primary/20 rounded text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
