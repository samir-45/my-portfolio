// src/components/About.jsx
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div> */}
      <div className="absolute bottom-30 -right-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row text-start items-center gap-12">
          {/* Text Content - Left Side */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <motion.h3
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Meet Mahin
            </motion.h3>

            <motion.div
              className="space-y-4 text-lg text-black mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Hi, I’m Mahin Khan— a passionate Frontend Developer and budding Full-Stack Engineer who loves building clean, responsive, and user-friendly web experiences.
              </p>
              <p>
                My coding journey started with simple HTML pages, but curiosity soon led me to master JavaScript, React.js, and TailwindCSS, along with backend skills in Node.js, Express, and MongoDB. I enjoy crafting projects that challenge both my creativity and problem-solving skills.
              </p>
              <p>
                Outside of programming, I’m into football, video editing, and photography, which fuel my creativity beyond the screen. I believe in continuous learning, pushing my limits, and creating digital products that leave a lasting impression.
              </p>
            </motion.div>

            {/* Tech Specialties */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center cursor-pointer rounded-xl  space-x-2 p-3 bg-white/10 backdrop-blur-md border-b border-white/10 shadow">
                <CodeBracketIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-indigo-400">React & NextJs</span>
              </div>
              <div className="flex items-center cursor-pointer rounded-xl  space-x-2 p-3 bg-white/10 backdrop-blur-md border-b border-white/10 shadow">
                <CodeBracketIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-indigo-400">UI/UX Design</span>
              </div>
              <div className="flex items-center cursor-pointer rounded-xl  space-x-2 p-3 bg-white/10 backdrop-blur-md border-b border-white/10 shadow">
                <CodeBracketIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-indigo-400">Responsive Dev</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start'>
                <a
                  href="#contact"
                  className="cosmic-button"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="hidden md:inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>

            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-indigo-500/20 shadow-xl">
                {/* Replace with your actual image */}
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/30 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 overflow-hidden border-2 border-dashed border-gray-400 rounded-xl w-[92%] h-[92%] flex items-center justify-center text-gray-500">
                    <img className="w-full h-full object-cover" src="./mahin.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-indigo-400/30 rounded-2xl rotate-6 z-[-1]"></div>
              <div className="absolute -inset-6 border border-purple-500/20 rounded-2xl rotate-12 z-[-2]"></div>

              {/* Animated floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold">100%</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-white text-3xl font-bold">JS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;