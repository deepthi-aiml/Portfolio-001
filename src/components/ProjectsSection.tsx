import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Brain, LineChart, MessageSquare, Shield, Sparkles, Users } from 'lucide-react';

const projects = [
  {
    title: 'AI Email Assistant',
    description: 'Smart email management system with NLP-powered categorization, priority detection, and auto-responses.',
    tags: ['Python', 'NLP', 'TensorFlow', 'React'],
    icon: MessageSquare,
    category: 'AI/ML',
    color: 'hsl(185, 100%, 50%)',
  },
  {
    title: 'Customer Segmentation Engine',
    description: 'Machine learning pipeline for customer behavior analysis using K-means clustering and RFM segmentation.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Visualization'],
    icon: Users,
    category: 'AI/ML',
    color: 'hsl(270, 100%, 60%)',
  },
  {
    title: 'Real-Time Sentiment Dashboard',
    description: 'Live social media sentiment analysis with streaming data visualization and trend prediction.',
    tags: ['React', 'WebSocket', 'NLP', 'D3.js'],
    icon: LineChart,
    category: 'Frontend',
    color: 'hsl(320, 100%, 50%)',
  },
  {
    title: 'AI-Personalized Learning Platform',
    description: 'Adaptive learning system that customizes content based on user progress and learning patterns.',
    tags: ['React', 'Node.js', 'ML', 'PostgreSQL'],
    icon: Brain,
    category: 'Full-Stack',
    color: 'hsl(160, 100%, 45%)',
  },
  {
    title: 'Blockchain Certificate Verifier',
    description: 'Decentralized credential verification system ensuring tamper-proof academic certificates.',
    tags: ['Solidity', 'React', 'Web3.js', 'IPFS'],
    icon: Shield,
    category: 'Backend',
    color: 'hsl(45, 100%, 50%)',
  },
  {
    title: 'VR Portfolio Experience',
    description: 'Immersive 3D portfolio viewer allowing interactive exploration of projects in virtual reality.',
    tags: ['Three.js', 'WebXR', 'React', 'GSAP'],
    icon: Sparkles,
    category: 'Frontend',
    color: 'hsl(200, 100%, 50%)',
  },
];

const categories = ['All', 'AI/ML', 'Frontend', 'Backend', 'Full-Stack'];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 group hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.color}15 0%, transparent 70%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${project.color}20` }}
          >
            <project.icon className="w-6 h-6" style={{ color: project.color }} />
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              aria-label="View Code"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <span 
          className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
          style={{ backgroundColor: `${project.color}20`, color: project.color }}
        >
          {project.category}
        </span>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-xs font-mono bg-muted/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning AI, full-stack development, and innovative web experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-card hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
