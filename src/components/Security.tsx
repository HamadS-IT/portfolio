import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileCheck, Award } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Secure Code Reviews",
    description: "Comprehensive code analysis for security vulnerabilities and best practice violations",
  },
  {
    icon: Eye,
    title: "Vulnerability Assessments",
    description: "Identify and prioritize security risks in your applications and infrastructure",
  },
  {
    icon: Shield,
    title: "OWASP Top 10 Checks",
    description: "Thorough testing against the most critical web application security risks",
  },
  {
    icon: Lock,
    title: "Secure Pipeline Design",
    description: "Build automation workflows with security built-in from day one",
  },
];

const tools = [
  "Nmap",
  "OWASP ZAP",
  "Burp Suite",
  "Static Analysis",
  "Dependency Scanning",
  "Secret Detection",
];

const certifications = [
  { name: "CompTIA Security+", status: "Certified", year: "2023" },
  { name: "Azure Fundamentals", status: "Certified", year: "2023" },
  { name: "Python Security", status: "Certified", year: "2022" },
];

const Security = () => {
  return (
    <section id="security" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-wide">Security-First Development</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">Cybersecurity Services</h2>
          <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Building secure systems with encryption, secure coding practices, and proactive vulnerability management
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 glass-effect hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Approach section */}
        <Card className="p-8 glass-effect mb-12">
          <h3 className="text-2xl font-semibold mb-6">Security Approach</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Core Practices
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AES-256 encryption for sensitive data</li>
                <li>• Secure API design and authentication</li>
                <li>• Least privilege access control</li>
                <li>• Input validation and sanitization</li>
                <li>• Dependency vulnerability monitoring</li>
                <li>• Secret management best practices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                Tools & Methodology
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-secondary/50">
                    {tool}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Automated scanning, manual testing, and continuous monitoring throughout the development lifecycle.
              </p>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="p-6 glass-effect hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.status}</p>
                <p className="text-xs text-muted-foreground">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
            Request a Security Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Security;
