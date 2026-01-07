import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Lock, Zap } from "lucide-react";
import avatar from '../assets/avatar.jpg';


const stats = [
  { label: "Projects", value: 190, suffix: "+" },
  { label: "Orders Completed", value: 250, suffix: "+" },
  { label: "Happy Clients", value: 90, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = stat.value;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const highlights = [
  { icon: Code2, text: "Scalable Web & Cloud Systems" },
  { icon: Zap, text: "Automated Workflows & Integrations" },
  { icon: Database, text: "Data Pipelines & Platform Syncs" },
  { icon: Lock, text: "Secure, Reliable & Maintainable Systems" },
];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-xl font-light">Turning complexity into elegant automation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className=" rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card">
                <img
                  src={avatar}
                  alt="Hamad S."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>


          {/* Bio */}
          <div className="space-y-6">
           <p className="text-lg leading-relaxed text-foreground/80">
            I’m <span className="text-primary font-semibold">Hamad</span>, a Computer Science graduate (BSCS) 
            who delivers <span className="text-primary font-medium">software solutions</span> that help businesses 
            automate workflows, streamline operations, and improve system reliability.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80">
            I design <span className="text-primary font-medium">dependable systems</span> for product syncing, 
            data pipelines, large-scale file conversions, and cloud deployments. My work ensures platforms and 
            applications run efficiently at scale.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80">
            I implement <span className="text-primary font-medium">CI/CD pipelines, container orchestration, and secure cloud architecture </span> 
            while focusing on <span className="text-primary font-medium">security, stability, and maintainability</span>, 
            handling everything from malware removal and website hardening to seamless integrations.
          </p>





            {/* Highlight badges */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border hover:border-primary transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="p-8 text-center glass-effect hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
