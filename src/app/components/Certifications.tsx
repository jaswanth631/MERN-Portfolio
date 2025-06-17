import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'JavaScript',
      platform: 'Udemy',
      icon: '📜'
    },
    {
      name: 'Advanced CSS',
      platform: 'Udemy',
      icon: '🎨'
    },
    {
      name: 'Advanced SQL',
      platform: 'Udemy',
      icon: '🗄️'
    },
    {
      name: 'TypeScript Professional',
      platform: 'Udemy',
      icon: '📘'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex space-x-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-64 bg-gray-50 rounded-lg p-6 shadow-sm"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.platform}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 