import { Github, Linkedin, Mail, MessageSquare, FileText } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/HamadS-IT", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamad-s-69b4611ba", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hamadsaqib2@gmail.com", label: "Email" },
    { icon: MessageSquare, href: "https://wa.me/+923172772704", label: "WhatsApp" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    // { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-gradient-to-t from-background to-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-3 tracking-tight">Hamad Saqib</h3>
            <p className="text-base text-muted-foreground mb-4 font-medium">
              Software Solutions & Automation Specialist
            </p>
            <p className="text-sm text-muted-foreground italic font-light leading-relaxed">
              "Building reliable systems that simplify operations and scale with your business."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hamad Saqib. All rights reserved.</p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
