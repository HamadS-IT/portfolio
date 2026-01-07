import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageSquare, Linkedin, Github, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  { icon: Mail, label: "Email", href: "mailto:hamadsaqib2@gmail.com", color: "text-blue-400" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/+923172772704", color: "text-green-400" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hamad-s-69b4611ba", color: "text-blue-500" },
  { icon: Github, label: "GitHub", href: "https://github.com/HamadS-IT", color: "text-gray-400" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-xl font-light">
            Available for freelance & contract work
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary">⚡ Response time: within 24 hours</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact methods & info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 glass-effect hover:border-primary transition-all duration-300 text-center">
                      <method.icon className={`w-8 h-8 mx-auto mb-3 ${method.color} group-hover:scale-110 transition-transform`} />
                      <div className="font-medium text-sm">{method.label}</div>
                      <ExternalLink className="w-3 h-3 mx-auto mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-8 glass-effect">
              <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Fast turnaround with quality code</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Security-first approach on every project</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Clear communication throughout</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Post-launch support included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>190+ successful projects delivered</span>
                </li>
              </ul>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
