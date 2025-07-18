"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer (Self-Employed)",
      company: "Freelance / Remote",
      location: "Remote",
      period: "2022 - 2025",
      type: "Remote",
      description:
        "Delivered multiple full-stack projects for clients worldwide with modern tech stack, real-time capabilities, and secure architecture.",
      responsibilities: [
        "Developed Corporate Finance Hub: Role-based access, GraphQL backend, real-time Socket.io integration",
        "Built UMKM Sales Information System: JWT auth, CAPTCHA, printable reports, responsive UI",
        "Created Vehicle Service Management: service tracking, job queueing, mechanic assignment",
        "Built Clinic Management System: multi-role system for patient records and appointments",
        "Engineered AI suite using Python + OpenCV: face recognition, gesture control, motion detection",
        "Developed English Learning Platform: WebRTC video call, TTS/STT, DeepSeek AI integration",
        "Worked across full stack with scalable architecture, reusable components, and CI/CD deployment",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "GraphQL",
        "REST API",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Socket.io",
        "JWT",
        "OAuth",
        "Git",
        "Postman",
        "Vercel",
        "Railway",
      ],
      website: "https://github.com/your-portfolio",
    },
    {
      id: 2,
      title: "Operator Leader & Robotic Controller",
      company: "PT. Astra Honda Motor",
      location: "Jakarta, Indonesia",
      period: "2019 - 2021",
      type: "Full-time",
      description:
        "Oversaw and managed production processes and robots, ensuring high quality and efficiency standards in manufacturing.",
      responsibilities: [
        "Managed 3 robots and 7 CNC machines including turning, drilling, leak test, boring, honing",
        "Maintained production target of 400 units/day with high safety and quality compliance",
        "Led 6-member team for troubleshooting and performance improvement initiatives",
        "Optimized robotic workflow for reliability and efficiency in production lines",
      ],
      technologies: [
        "CNC",
        "Robotics",
        "Manufacturing Systems",
        "Process Optimization",
      ],
      website: "https://www.astra-honda.com",
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="experience"
      className={`py-20 ${
        theme === "light"
          ? "bg-gray-50"
          : theme === "dark"
          ? "bg-gray-900/50"
          : "bg-black/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4"
            >
              <span
                className={
                  theme === "gradient"
                    ? "text-white"
                    : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                }
              >
                Work Experience
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`h-1 mx-auto rounded-full ${
                theme === "gradient"
                  ? "bg-white"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`mt-6 text-lg max-w-2xl mx-auto ${
                theme === "light"
                  ? "text-gray-600"
                  : theme === "dark"
                  ? "text-gray-300"
                  : "text-white/80"
              }`}
            >
              My professional journey and career milestones
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div
              className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                theme === "light"
                  ? "bg-gradient-to-b from-blue-400 to-purple-400"
                  : theme === "dark"
                  ? "bg-gradient-to-b from-purple-400 to-pink-400"
                  : "bg-gradient-to-b from-white/60 to-white/30"
              }`}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative z-10 w-4 h-4 rounded-full border-4 ${
                      theme === "light"
                        ? "bg-white border-blue-500"
                        : theme === "dark"
                        ? "bg-dark-bg border-purple-500"
                        : "bg-white border-white"
                    } flex-shrink-0 mt-6`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${
                        theme === "light"
                          ? "bg-blue-500"
                          : theme === "dark"
                          ? "bg-purple-500"
                          : "bg-white"
                      } opacity-20`}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`ml-8 flex-1 p-6 rounded-3xl transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white shadow-neumorphic-light hover:shadow-xl"
                        : theme === "dark"
                        ? "bg-dark-surface shadow-neumorphic-dark hover:shadow-xl"
                        : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3
                          className={`text-xl font-bold font-poppins mb-1 ${
                            theme === "light"
                              ? "text-gray-800"
                              : theme === "dark"
                              ? "text-white"
                              : "text-white"
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold hover:underline flex items-center gap-1 ${
                              theme === "light"
                                ? "text-blue-600 hover:text-blue-700"
                                : theme === "dark"
                                ? "text-purple-400 hover:text-purple-300"
                                : "text-white/90 hover:text-white"
                            }`}
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "light"
                            ? "text-gray-500"
                            : theme === "dark"
                            ? "text-gray-400"
                            : "text-white/70"
                        }`}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p
                      className={`mb-4 leading-relaxed ${
                        theme === "light"
                          ? "text-gray-600"
                          : theme === "dark"
                          ? "text-gray-300"
                          : "text-white/80"
                      }`}
                    >
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4
                        className={`font-semibold mb-2 ${
                          theme === "light"
                            ? "text-gray-800"
                            : theme === "dark"
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul
                        className={`space-y-1 ${
                          theme === "light"
                            ? "text-gray-600"
                            : theme === "dark"
                            ? "text-gray-300"
                            : "text-white/80"
                        }`}
                      >
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className={`w-[5px] h-[5px] rounded-lg mt-2 flex-shrink-0 ${
                                theme === "light"
                                  ? "bg-blue-500"
                                  : theme === "dark"
                                  ? "bg-purple-500"
                                  : "bg-white"
                              }`}
                            />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4
                        className={`font-semibold mb-2 ${
                          theme === "light"
                            ? "text-gray-800"
                            : theme === "dark"
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              theme === "light"
                                ? "bg-blue-100 text-blue-800"
                                : theme === "dark"
                                ? "bg-purple-900 text-purple-200"
                                : "bg-white/20 text-white backdrop-blur-md"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                theme === "light"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-neumorphic-light hover:from-blue-700 hover:to-purple-700"
                  : theme === "dark"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-neumorphic-dark hover:from-purple-700 hover:to-pink-700"
                  : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
              }`}
            >
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
