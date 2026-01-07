import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Workflow, 
  Database, 
  Shield, 
  Bot, 
  Palette,
  Server,
  Smartphone,
  Zap,
  FileText,
  Cloud,
  GitBranch,
  CloudCog,
  ShieldAlert,
  FileStack,
  Monitor,
  ShoppingCart,
  Box,
  Sparkles,
  Brain,
  Lock
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Scraping",
    description:
      "Reliable and scalable web scraping solutions for structured and unstructured data.",
    tags: ["Python", "BeautifulSoup", "Selenium", "Playwright"],
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description:
      "End-to-end automation workflows that eliminate manual tasks and reduce errors.",
    tags: ["N8N", "Make.com", "Zapier","Python","JavaScript","Google Apps Script"],
  },
  {
    icon: FileText,
    title: "File Conversions",
    description:
      "Automated conversion between multiple file formats with validation and accuracy.",
    tags: ["JSON", "XML", "CSV", "Excel"],
  },
  {
    icon: Server,
    title: "API Development & Integration",
    description:
      "Secure REST APIs and seamless integrations between third-party platforms.",
    tags: ["REST APIs", "Webhooks", "Integrations"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Cloud-native deployments with CI/CD, containerization, and infrastructure automation.",
    tags: ["Git", "Docker", "Kubernetes", "CI/CD","Azure", "AWS", "GCP"],
  },
  {
    icon: FileStack,
    title: "Large File Conversions",
    description:
      "High-volume and large-size file processing with performance optimization.",
    tags: ["Big Files", "Batch Processing", "Automation"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description:
      "Modern, responsive web and mobile applications built for performance.",
    tags: ["React", "React Native", "Node.js"],
  },
  {
    icon: Monitor,
    title: "Desktop App Development",
    description:
      "Cross-platform desktop applications for internal tools and automation.",
    tags: ["Python", "Tkinter", "Desktop Apps"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Product Sync",
    description:
      "Automated syncing of products, inventory, and orders across platforms.",
    tags: ["TikTok Shop", "WooCommerce", "BigCommerce", "Shopify", "Prestashop"],
  },
  {
    icon: Sparkles,
    title: "NFT Generation",
    description:
      "Automated NFT creation, metadata generation, and batch processing.",
    tags: ["NFTs", "Automation", "Metadata"],
  },
  {
    icon: Brain,
    title: "AI / ML Integration",
    description:
      "Integrating AI features like semantic search and intelligent assistants.",
    tags: ["RAG", "NLP", "AI/ML"],
  },
  {
    icon: Lock,
    title: "Security & Hardening",
    description:
      "Security-first development, vulnerability mitigation, and system hardening.",
    tags: ["OWASP", "WordPress", "Malware Removal", "Hardening"],
  },
];


const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-wide">What I Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">Services</h2>
          <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions from development to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 glass-effect hover:border-primary transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
