import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'HTML / CSS', level: 95, category: 'Languages' },
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 92, category: 'Languages' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 78, category: 'Backend' },
  { name: 'TensorFlow', level: 82, category: 'AI/ML' },
  { name: 'PyTorch', level: 75, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 88, category: 'AI/ML' },
  { name: 'Numpy', level: 75, category: 'AI/ML' },
  { name: 'Pandas', level: 90, category: 'Data' },
  { name: 'Matplotlib / Seaborn', level: 88, category: 'Data' },
  { name: 'Figma', level: 72, category: 'Design' },
  { name: 'Git', level: 85, category: 'Tools' },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColor = (level: number) => {
    if (level >= 90) return 'hsl(185, 100%, 50%)'; // Cyan
    if (level >= 80) return 'hsl(270, 100%, 60%)'; // Purple
    if (level >= 70) return 'hsl(320, 100%, 50%)'; // Magenta
    return 'hsl(215, 20%, 45%)'; // Muted
  };

  const getSize = (level: number) => {
    if (level >= 90) return 'w-24 h-24';
    if (level >= 80) return 'w-20 h-20';
    if (level >= 70) return 'w-16 h-16';
    return 'w-14 h-14';
  };

  return (
    <section id="tech" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with daily. Hover over each to see proficiency levels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const color = getColor(tech.level);
            const size = getSize(tech.level);
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`${size} rounded-xl glass-card flex flex-col items-center justify-center cursor-pointer group relative`}
                style={{
                  boxShadow: `0 0 ${tech.level >= 80 ? '15px' : '5px'} ${color}30`,
                }}
              >
                <span 
                  className="text-xs font-medium text-center px-1 leading-tight"
                  style={{ color }}
                >
                  {tech.name}
                </span>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-card px-3 py-2 rounded-lg whitespace-nowrap">
                    <span className="text-xs font-mono" style={{ color }}>
                      {tech.level}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {tech.category}
                    </span>
                  </div>
                </div>

                {/* Pulsing ring for high proficiency */}
                {tech.level >= 90 && (
                  <div 
                    className="absolute inset-0 rounded-xl animate-glow-pulse"
                    style={{ 
                      border: `1px solid ${color}40`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-8 mt-12 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(185, 100%, 50%)' }} />
            <span className="text-muted-foreground">Expert (90%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(270, 100%, 60%)' }} />
            <span className="text-muted-foreground">Proficient (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(320, 100%, 50%)' }} />
            <span className="text-muted-foreground">Skilled (70%+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
