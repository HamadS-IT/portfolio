import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare, ExternalLink, ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const services = [
  "I design and deliver scalable software solutions.",
  "I automate complex workflows end-to-end.",
  "I design and integrate data pipelines.",
  "I secure systems against real-world threats.",
  "I create robust and high-performance APIs.",
  "I develop AI-powered business tools.",
  "I architect cloud solutions on Azure, AWS, and GCP.",
  "I implement DevOps pipelines for faster deployments.",
  "I secure, clean, and harden WordPress websites.",
  "I remove malware and protect sites from future attacks."
];

const Hero = () => {
  const typedService = useTypewriter(services, 60, 30, 2500);

  const socialLinks = [
    { icon: Github, href: "https://github.com/HamadS-IT", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamad-s-69b4611ba", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hamadsaqib2@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Social links - elegant placement */}
        <div className="absolute top-8 right-8 flex gap-3 hidden sm:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={link.label}
            >
              <div className="p-3 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 hover:scale-110">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Main content */}
        <div className="text-center max-w-6xl mx-auto space-y-12 py-20">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for Projects</span>
          </div>

          {/* Hero Content - Cleaner Layout */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Name First - Bold and Prominent */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1]">
                <span className="inline-block bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                  Hamad Saqib
                </span>
              </h1>
              
              {/* Typewriter - As Subtitle */}
              <div className="relative min-h-[80px] md:min-h-[60px] flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl 
                            font-heading font-medium text-muted-foreground
                            leading-tight text-center">
                <span className="inline">{typedService}</span>
                <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse align-baseline" />
              </h2>
              </div>
            </div>

            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              I specialize in building <span className="text-primary font-medium">secure, scalable, and automated systems</span> that transform data into intelligent products using{" "}
              <span className="text-primary font-medium">Python, AI, Cloud & DevOps technologies</span>.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-12 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsl(195_100%_45%_/_0.4)]"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Hire Me Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-primary/30 hover:border-primary hover:bg-card/50 hover:text-primary px-12 py-7 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-6 justify-center pt-6 text-sm animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a

              href="https://wa.me/+923172772704" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">WhatsApp</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
            </a>
            <a 
              href="https://www.fiverr.com/hamadsaqib" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Fiverr</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01efa63e3e953bd086?viewMode=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Upwork</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
            </a>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
