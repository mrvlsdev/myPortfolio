import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import { Code2, Database, Globe, Layout, Server, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface Props {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-8 h-8" />,
    description:
      "Frontend web development is the practice of creating the visual and interactive elements of a website that users see and interact with in their web browsers. It encompasses HTML for structure, CSS for styling, and JavaScript for dynamic functionality, focusing on responsive design, user experience, and performance optimization.",
    level: "Expert",
  },
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    description:
      "Backend development involves server-side web application logic and integration. It includes writing APIs, managing databases, handling authentication, processing data, and ensuring server performance and security. Technologies often include Node.js, Python, Ruby, and various database systems.",
    level: "Advanced",
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8" />,
    description:
      "Database management systems (DBMS) are software applications that interact with users, other applications, and the database itself to capture and analyze data. Modern databases include relational databases like PostgreSQL, document stores like MongoDB, and real-time databases like Firebase.",
    level: "Intermediate",
  },
  {
    name: "Web Performance",
    icon: <Sparkles className="w-8 h-8" />,
    description:
      "Web performance optimization involves techniques and best practices to improve the speed and efficiency of websites. This includes code splitting, lazy loading, caching strategies, image optimization, and monitoring tools to ensure fast page loads and smooth user experiences.",
    level: "Advanced",
  },
  {
    name: "API Development",
    icon: <Code2 className="w-8 h-8" />,
    description:
      "API (Application Programming Interface) development involves creating protocols and tools that allow different software applications to communicate. This includes RESTful APIs, GraphQL, WebSockets, and other protocols that enable data exchange between client and server applications.",
    level: "Expert",
  },
  {
    name: "Web Security",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Web security encompasses protecting websites and web applications from security threats. This includes implementing HTTPS, preventing XSS and CSRF attacks, securing authentication systems, and following OWASP security guidelines to protect user data and maintain system integrity.",
    level: "Intermediate",
  },
];

const levelColors = {
  Beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Intermediate:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Advanced:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Expert: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const getRelatedTechnologies = (skillName: string): string[] => {
  switch (skillName) {
    case "Frontend Development":
      return [
        "React",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Webpack",
      ];
    case "Backend Development":
      return ["Node.js", "Express", "Python", "Django", "PostgreSQL", "Docker"];
    case "Database Management":
      return [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "MySQL",
        "Firebase",
        "Supabase",
      ];
    case "Web Performance":
      return [
        "Lighthouse",
        "WebPageTest",
        "Chrome DevTools",
        "Performance API",
        "Core Web Vitals",
      ];
    case "API Development":
      return ["REST", "GraphQL", "WebSocket", "OpenAPI", "tRPC", "Swagger"];
    case "Web Security":
      return ["HTTPS", "OAuth", "JWT", "CORS", "CSP", "OWASP"];
    default:
      return [];
  }
};

const SkillsSection = ({ skills = defaultSkills }: Props) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background to-background/95 relative overflow-hidden py-16 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-30 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-30 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  height: selectedSkill === skill.name ? "auto" : "100%",
                }}
                transition={{
                  layout: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.2 },
                }}
                onClick={() =>
                  setSelectedSkill(
                    selectedSkill === skill.name ? null : skill.name,
                  )
                }
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        className={`p-6 hover:shadow-xl transition-all duration-500 cursor-pointer bg-card/30 backdrop-blur-sm border-primary/10 hover:bg-card/50 group ${selectedSkill === skill.name ? "ring-2 ring-primary shadow-lg shadow-primary/10" : ""}`}
                      >
                        <motion.div
                          layout="position"
                          className="flex items-center space-x-4 mb-4"
                        >
                          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <div>
                            <motion.h3
                              layout="position"
                              className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                            >
                              {skill.name}
                            </motion.h3>
                            <Badge
                              variant="secondary"
                              className={`mt-2 ${levelColors[skill.level]}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        </motion.div>
                        <motion.p
                          layout="position"
                          className={`text-muted-foreground transition-all duration-300 ${selectedSkill === skill.name ? "" : "line-clamp-3"}`}
                        >
                          {skill.description}
                        </motion.p>
                        <AnimatePresence>
                          {selectedSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-primary/10"
                            >
                              <h4 className="text-sm font-medium mb-2">
                                Related Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {getRelatedTechnologies(skill.name).map(
                                  (tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                                    >
                                      {tech}
                                    </Badge>
                                  ),
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {selectedSkill === skill.name
                          ? "Click to collapse"
                          : "Click to expand"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
