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
        ></motion.div>
      </div>
    </section>
  );
};

export default Experience;
