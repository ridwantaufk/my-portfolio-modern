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
