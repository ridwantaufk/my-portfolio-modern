"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  Braces,
  LayoutDashboard,
  CloudLightning,
  BadgeHelp,
  FileCode,
  GitBranch,
  Server,
  Database,
  Terminal,
  BookOpen,
  Figma,
} from "lucide-react";
import { SiDocker } from "react-icons/si";

const Skills = () => {
  const { theme } = useTheme();

  const iconColor = (color: string) => ({ color, size: 24 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <Braces {...iconColor("#61DAFB")} />,
          level: 90,
        },
        {
          name: "Next.js",
          icon: <LayoutDashboard {...iconColor("#000000")} />,
          level: 85,
        },
        {
          name: "Tailwind CSS",
          icon: <CloudLightning {...iconColor("#38BDF8")} />,
          level: 95,
        },
        {
          name: "Bootstrap",
          icon: <BadgeHelp {...iconColor("#7952B3")} />,
          level: 80,
        },
        {
          name: "TypeScript",
          icon: <FileCode {...iconColor("#3178C6")} />,
          level: 85,
        },
        {
          name: "JavaScript",
          icon: <FileCode {...iconColor("#F7DF1E")} />,
          level: 90,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <Terminal {...iconColor("#339933")} />,
          level: 85,
        },
        {
          name: "Express.js",
          icon: <Server {...iconColor("#000000")} />,
          level: 80,
        },
        {
          name: "GraphQL",
          icon: <GitBranch {...iconColor("#E10098")} />,
          level: 75,
        },
        {
          name: "Laravel",
          icon: <BookOpen {...iconColor("#FF2D20")} />,
          level: 70,
        },
        {
          name: "PHP",
          icon: <FileCode {...iconColor("#777BB4")} />,
          level: 75,
        },
        {
          name: "Python",
          icon: <FileCode {...iconColor("#3776AB")} />,
          level: 70,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "PostgreSQL",
          icon: <Database {...iconColor("#336791")} />,
          level: 80,
        },
        {
          name: "MySQL",
          icon: <Database {...iconColor("#4479A1")} />,
          level: 85,
        },
        {
          name: "MongoDB",
          icon: <Database {...iconColor("#47A248")} />,
          level: 75,
        },
        {
          name: "Redis",
          icon: <Database {...iconColor("#DC382D")} />,
          level: 70,
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          icon: <GitBranch {...iconColor("#F05032")} />,
          level: 90,
        },
        {
          name: "Docker",
          icon: <SiDocker color="#2496ED" size={24} />,
          level: 75,
        },
        {
          name: "VS Code",
          icon: <Terminal {...iconColor("#007ACC")} />,
          level: 95,
        },
        {
          name: "Postman",
          icon: <BadgeHelp {...iconColor("#FF6C37")} />,
          level: 85,
        },
        {
          name: "JIRA",
          icon: <BookOpen {...iconColor("#0052CC")} />,
          level: 80,
        },
        { name: "Figma", icon: <Figma {...iconColor("#F24E1E")} />, level: 70 },
      ],
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
      id="skills"
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
          {/* Section Title */}
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
                Skills & Technologies
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
              Here are the technologies and tools I work with to bring ideas to
              life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`p-6 rounded-3xl transition-all duration-300 ${
                  theme === "light"
                    ? "bg-white shadow-neumorphic-light hover:shadow-neumorphic-inset-light"
                    : theme === "dark"
                    ? "bg-dark-surface shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark"
                    : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                }`}
              >
                {/* Category Title */}
                <h3
                  className={`text-xl font-bold font-poppins mb-6 text-center ${
                    theme === "gradient"
                      ? "text-white"
                      : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                  }`}
                >
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.02 }}
                      className={`p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                        theme === "light"
                          ? "bg-gray-50 hover:bg-gray-100 hover:shadow-md"
                          : theme === "dark"
                          ? "bg-gray-800 hover:bg-gray-700 hover:shadow-md"
                          : "bg-white/5 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span
                            className={`font-medium ${
                              theme === "light"
                                ? "text-gray-800"
                                : theme === "dark"
                                ? "text-gray-200"
                                : "text-white"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-semibold ${
                            theme === "light"
                              ? "text-blue-600"
                              : theme === "dark"
                              ? "text-purple-400"
                              : "text-white/80"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          theme === "light"
                            ? "bg-gray-200"
                            : theme === "dark"
                            ? "bg-gray-700"
                            : "bg-white/20"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${
                            theme === "light"
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : theme === "dark"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-gradient-to-r from-white/60 to-white/80"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mt-16 text-center p-8 rounded-3xl ${
              theme === "light"
                ? "bg-white shadow-neumorphic-light"
                : theme === "dark"
                ? "bg-dark-surface shadow-neumorphic-dark"
                : "bg-white/10 backdrop-blur-md border border-white/20"
            }`}
          >
            <h3
              className={`text-2xl font-bold font-poppins mb-4 ${
                theme === "gradient"
                  ? "text-white"
                  : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
              }`}
            >
              Always Learning
            </h3>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "light"
                  ? "text-gray-600"
                  : theme === "dark"
                  ? "text-gray-300"
                  : "text-white/80"
              }`}
            >
              Technology evolves rapidly, and so do I. I'm constantly exploring
              new frameworks, tools, and best practices to stay current with
              industry trends and deliver cutting-edge solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
