"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, User } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { theme } = useTheme();

  const [showName, setShowName] = useState(false);
  const [doneTypingHi, setDoneTypingHi] = useState(false);

  useEffect(() => {
    const hiTimer = setTimeout(() => {
      setDoneTypingHi(true);
    }, 1000);

    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1500);

    return () => {
      clearTimeout(hiTimer);
      clearTimeout(nameTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              theme === "light"
                ? "bg-blue-300"
                : theme === "dark"
                ? "bg-purple-400"
                : "bg-white"
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none select-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ${
                theme === "light"
                  ? "shadow-neumorphic-light"
                  : theme === "dark"
                  ? "shadow-neumorphic-dark"
                  : "shadow-glow border-2 border-white/30"
              }`}
            >
              <div
                className={`w-full h-full flex items-center justify-center ${
                  theme === "light"
                    ? "bg-gradient-to-br from-blue-100 to-purple-100"
                    : theme === "dark"
                    ? "bg-gradient-to-br from-gray-700 to-gray-800"
                    : "bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md"
                }`}
              >
                <User
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${
                    theme === "light"
                      ? "text-blue-600"
                      : theme === "dark"
                      ? "text-purple-400"
                      : "text-white"
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-4">
              <span className="block mb-2">
                <Typewriter
                  words={["Hi, I'm"]}
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={1000}
                  cursor={false}
                />
              </span>

              {showName && (
                <span
                  className={`block ${
                    theme === "gradient"
                      ? "text-white"
                      : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                  }`}
                >
                  <Typewriter
                    words={["Ridwan Taufik"]}
                    typeSpeed={80}
                    deleteSpeed={0}
                    cursor={false}
                  />
                </span>
              )}
            </h1>

            {doneTypingHi && showName && (
              <motion.p
                className={`text-xl sm:text-2xl font-medium ${
                  theme === "light"
                    ? "text-gray-600"
                    : theme === "dark"
                    ? "text-gray-300"
                    : "text-white/90"
                }`}
              >
                <Typewriter
                  words={["Full Stack Developer", "Especially React Family"]}
                  loop
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2000}
                  cursor
                  cursorStyle="|"
                />
              </motion.p>
            )}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${
              theme === "light"
                ? "text-gray-700"
                : theme === "dark"
                ? "text-gray-300"
                : "text-white/80"
            }`}
          >
            Passionate about creating innovative web solutions with modern
            technologies. Specialized in React, Next.js, Node.js, Express.js,
            and GraphQL, and building scalable applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className={`px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2 ${
                theme === "light"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-neumorphic-light"
                  : theme === "dark"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-neumorphic-dark"
                  : "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30"
              }`}
            >
              View Portfolio
              <ArrowDown className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                theme === "light"
                  ? "bg-white text-gray-800 shadow-neumorphic-light hover:shadow-neumorphic-inset-light"
                  : theme === "dark"
                  ? "bg-dark-surface text-white shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark"
                  : "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20"
              }`}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                theme === "light"
                  ? "border-gray-400"
                  : theme === "dark"
                  ? "border-gray-500"
                  : "border-white/50"
              }`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-3 rounded-full mt-2 ${
                  theme === "light"
                    ? "bg-gray-400"
                    : theme === "dark"
                    ? "bg-gray-500"
                    : "bg-white/50"
                }`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
