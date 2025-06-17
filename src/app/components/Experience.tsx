import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Algoris',
      period: 'Apr 2023 – Present',
      title: 'MERN Stack Developer',
      description: 'Working on building and maintaining web applications using the MERN stack.',
      highlights: [
        '30+ API integrations (Shopify, NetSuite, etc.)',
        'OAuth security implementations',
        'Webhooks & polling-based triggers',
        'Docker-based workflows',
        'Team collaboration emphasis'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{exp.company}</h3>
                    <p className="text-gray-600">{exp.period}</p>
                  </div>
                </div>
                <h4 className="text-xl text-gray-700 mb-4">{exp.title}</h4>
                <p className="text-gray-600 mb-6">{exp.description}</p>
                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600">{highlight}</span>
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

export default Experience; 