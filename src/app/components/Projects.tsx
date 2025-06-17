import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import ProjectPreview from './ProjectPreview';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const projects = [
    {
      name: 'Amazon Price Scraper',
      description: 'A powerful price tracking tool for Amazon products with real-time alerts and trend analysis.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      features: ['Price tracking', 'Alerts', 'Trend graph', 'Notifications'],
      image: '/projects/amazon-scraper.png',
      demoLink: 'https://amazon-scraper-demo.com',
      githubLink: 'https://github.com/yourusername/amazon-scraper',
      longDescription: 'A comprehensive price tracking solution that helps users monitor Amazon product prices and receive notifications when prices drop. Features include historical price tracking, trend analysis, and customizable alert thresholds.',
      previewType: 'amazon-scraper'
    },
    {
      name: 'Mangrove Integrated Solutions',
      description: 'A modern company showcase website with lead capture functionality.',
      tech: ['React', 'Tailwind', 'Node.js'],
      features: ['Company showcase', 'Lead capture', 'Responsive design'],
      image: '/projects/mangrove.png',
      demoLink: 'https://mangrove-it.com',
      githubLink: 'https://github.com/yourusername/mangrove-website',
      longDescription: 'A professional website for Mangrove IT Solutions featuring a modern design, lead capture forms, and seamless integration with their CRM system. The site is optimized for performance and user experience.',
      previewType: 'mangrove'
    },
    {
      name: 'Algoris Landing Page',
      description: 'A static CMS-integrated landing page that boosted engagement by 30%.',
      tech: ['Gatsby', 'Tailwind', 'Strapi'],
      features: ['CMS integration', 'Static generation', 'Performance optimized'],
      image: '/projects/algoris.png',
      demoLink: 'https://algoris-landing.com',
      githubLink: 'https://github.com/yourusername/algoris-landing',
      longDescription: 'A high-performance landing page built with Gatsby and Strapi CMS. The project achieved a 30% increase in user engagement through optimized content delivery and interactive elements.',
      previewType: 'algoris'
    }
  ];

  const allTech = Array.from(new Set(projects.flatMap(project => project.tech)));

  const filteredProjects = selectedTech
    ? projects.filter(project => project.tech.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          
          {/* Tech Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTech === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-200">
                  <ProjectPreview type={project.previewType} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProject(index)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Details →
                    </button>
                    {/* Commented out GitHub Link */}
                    {/* <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{projects[selectedProject].name}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <ProjectPreview type={projects[selectedProject].previewType} />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-gray-600">{projects[selectedProject].longDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {projects[selectedProject].features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    {/* Commented out Live Demo Link */}
                    {/* {projects[selectedProject].demoLink && (
                      <a
                        href={projects[selectedProject].demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )} */}

                    {/* Commented out GitHub Link in Modal */}
                    {/* {projects[selectedProject].githubLink && (
                      <a
                        href={projects[selectedProject].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        GitHub
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 