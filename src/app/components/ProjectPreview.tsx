import { motion } from 'framer-motion';

interface ProjectPreviewProps {
  type: string;
}

const ProjectPreview = ({ type }: ProjectPreviewProps) => {
  const getPreviewContent = () => {
    switch (type) {
      case 'amazon-scraper':
        return (
          <div className="w-full h-full bg-white p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Product Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-32 bg-gray-200 rounded mb-2"
                />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>

              {/* Price Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="h-24 relative">
                  <motion.path
                    d="M0 50 Q 50 20, 100 40 T 200 30 T 300 50 T 400 20"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Notification */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                className="bg-blue-100 text-blue-600 p-3 rounded-lg text-sm"
              >
                Price dropped! Check it out →
              </motion.div>
            </motion.div>
          </div>
        );

      case 'mangrove':
        return (
          <div className="w-full h-full bg-white p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Hero Section */}
              <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg relative overflow-hidden">
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="bg-gray-50 rounded-lg p-3"
                  >
                    <div className="h-8 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="space-y-2">
                  <div className="h-8 bg-gray-200 rounded" />
                  <div className="h-8 bg-gray-200 rounded" />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-8 bg-blue-600 rounded text-white"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        );

      case 'algoris':
        return (
          <div className="w-full h-full bg-white p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Hero Section */}
              <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg relative overflow-hidden">
                <motion.div
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30"
                />
              </div>

              {/* Content Blocks */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="bg-gray-50 rounded-lg p-3"
                  >
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="grid grid-cols-3 gap-2"
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-2 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-8 bg-gray-200 rounded mb-1"
                    />
                    <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {getPreviewContent()}
    </div>
  );
};

export default ProjectPreview; 