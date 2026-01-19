import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 99, color: 'hsl(185, 100%, 50%)' },
  { name: 'CSS', level: 98, color: 'hsl(185, 100%, 50%)' },
  { name: 'JavaScript', level: 97, color: 'hsl(185, 100%, 50%)' },
  { name: 'Python', level: 95, color: 'hsl(185, 100%, 50%)' },
  { name: 'React / TypeScript', level: 90, color: 'hsl(200, 100%, 50%)' },
  { name: 'Machine Learning', level: 85, color: 'hsl(270, 100%, 60%)' },
  { name: 'Pandas / Numpy / Matplotlib', level: 80, color: 'hsl(270, 100%, 60%)' },
  { name: 'Natural Language Processing', level: 80, color: 'hsl(320, 100%, 50%)' },
  { name: 'UI/UX Design', level: 75, color: 'hsl(160, 100%, 45%)' },
  { name: 'Data Analysis', level: 88, color: 'hsl(45, 100%, 50%)' },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Degree Student',
    description: 'B.Sc. Computer Science - University of Moratuwa, Sri Lanka',
  },
  {
    icon: GraduationCap,
    title: 'Degree Student',
    description: 'B.Sc. Computer Science - University of the People, USA',
  },
  {
    icon: Code,
    title: 'Full-Stack Developer',
    description: 'Building end-to-end solutions with modern technologies',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Specializing in ML, NLP, and intelligent systems',
  },
];

const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}66`,
          }}
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer from Sri Lanka, blending creativity with technical expertise
            to build the future of intelligent applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
