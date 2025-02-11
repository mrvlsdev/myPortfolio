import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeDCanvas from "./ThreeDCanvas";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import AnimatedText from "./AnimatedText";

interface Props {
  title?: string;
  subtitle?: string;
  onExploreClick?: () => void;
  backgroundColor?: string;
}

const HeroSection = ({
  title = "MOUHAMDOU SEYDOU DIOP",
  subtitle = "Full-Stack Developer & UI/UX Engineer",
  onExploreClick = () => {},
  backgroundColor = "bg-slate-900",
}: Props) => {
  const handleMouseMove = (e: React.MouseEvent) => {
    // Mouse movement handling for 3D effect
    const { clientX, clientY } = e;
    // Pass to ThreeDCanvas if needed
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background Canvas */}
      <ThreeDCanvas
        onMouseMove={handleMouseMove}
        particleCount={50}
        backgroundColor={backgroundColor}
        isDarkMode={backgroundColor.includes("900")}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        {/* Social Links */}
        <motion.div
          className="absolute left-8 bottom-8 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:webdev.seydou@gmail.com"
            className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail className="w-6 h-6" />
          </a>
          <div className="w-px h-24 bg-white/20 mx-auto mt-2" />
        </motion.div>
        <motion.div
          className="text-center space-y-6 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text={title}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 tracking-tight leading-none mb-6 drop-shadow-lg"
          />

          <motion.p
            className="text-xl md:text-2xl text-foreground/90 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={onExploreClick}
              className="mt-8 px-8 py-6 text-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 text-white dark:text-white group relative overflow-hidden"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-30 animate-gradient-x pointer-events-none" />
    </div>
  );
};

export default HeroSection;
