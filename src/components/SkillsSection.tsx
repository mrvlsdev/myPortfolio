import React from "react";
import { motion } from "framer-motion";
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
    description: "Building responsive and interactive user interfaces",
    level: "Expert",
  },
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    description: "Creating scalable server-side applications",
    level: "Advanced",
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8" />,
    description: "Designing and optimizing database structures",
    level: "Intermediate",
  },
  {
    name: "Web Performance",
    icon: <Sparkles className="w-8 h-8" />,
    description: "Optimizing web applications for speed and efficiency",
    level: "Advanced",
  },
  {
    name: "API Development",
    icon: <Code2 className="w-8 h-8" />,
    description: "Creating and maintaining RESTful APIs",
    level: "Expert",
  },
  {
    name: "Web Security",
    icon: <Globe className="w-8 h-8" />,
    description: "Implementing secure web practices and protocols",
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

const SkillsSection = ({ skills = defaultSkills }: Props) => {
  return (
    <section className="w-full min-h-screen bg-background py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-card">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {skill.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className={`mt-2 ${levelColors[skill.level]}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {skill.description}
                      </p>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to learn more about {skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
