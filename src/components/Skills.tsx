import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Cpu,
  FileText,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "PHP", "SQL", "C", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Cpu,
    skills: ["React", "React Native", "Node.js", "Express", "FastAPI", "Tkinter", "Kivy"],
  },
  {
    title: "Data & Automation",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "Web Scraping",
      "BeautifulSoup",
      "Selenium/Playwright",
      "Google Sheets API",
      "Google Apps Script",
      "XML/JSON",
      "N8N","Make.com","Zapier",
      "Automated File Conversion (PDF, KMZ, CSV)",
    ],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    skills: ["LLM's","Semantic Search (RAG)", "Embeddings", "NLP", "Vector Databases","Hugging Face", "Prompt Engineering"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Azure",
      "AWS",
      "GCP",
      "DigitalOcean",
      "Docker",
      "VPS",
      "CI/CD Pipelines",
      "Git & Version Control",
    ],
  },
  {
    title: "Tools & APIs",
    icon: Wrench,
    skills: [
      "Figma API",
      "Autodesk Forge",
      "Slack API",
      "Stripe",
      "SharePoint REST",
      "Custom REST APIs",
      "E-commerce APIs (TikTok Shop, WooCommerce, BigCommerce, Shopify, Prestashop)",
    ],
  },
  {
    title: "Docs & File Processing",
    icon: FileText,
    skills: [
    "Large-Scale File Processing",
    "PDF Text Extraction & Manipulation",
    "XML / JSON / CSV / Excel Conversion",
    "OCR & Text Extraction",
    "Document & Image Workflow Automation",
    "Multi-Format File Conversions (CSV ↔ Excel, KMZ ↔ KML, etc.)",
  ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      "Secure Coding",
      "AES-256 Encryption",
      "OWASP Top 10",
      "Nmap",
      "Burp Suite",
      "Vulnerability Scanning",
      "WordPress Hardening & Malware Cleanup",
    ],
  },
  {
    title: "NFT / eCommerce",
    icon: ShoppingCart,
    skills: [
      "NFT Generation", "NFT Minting", "NFT Metadata Automation", "NFT Smart Contracts",
      "TikTok Shop", "WooCommerce", "BigCommerce", "Shopify", "Prestashop",
      "Automated Product Syncing",
      "E-commerce Workflow Automation",
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Skills & Tech Stack</h2>
          <p className="text-muted-foreground text-xl font-light">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 glass-effect hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
