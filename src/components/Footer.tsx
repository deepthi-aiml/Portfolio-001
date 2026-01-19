import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">Deepthi Mahendran</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Building Intelligent Web Experiences
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/deepthi2005-aiml', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/deepthi-m081', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:deepthimahendran81@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:bg-white/10 transition-all hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary" /> by Deepthi Mahendran © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
