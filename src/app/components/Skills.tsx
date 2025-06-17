import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Gatsby', 'HTML', 'CSS', 'Tailwind'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API', 'GraphQL'],
      icon: '⚙️'
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      icon: '🗄️'
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'VS Code'],
      icon: '🛠️'
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Puppeteer'],
      icon: '🧪'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-blue-600 h-2.5 rounded-full"
                        />
                      </div>
                      <span className="ml-3 text-gray-700 min-w-[100px]">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 