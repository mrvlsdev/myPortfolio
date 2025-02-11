import React from "react";
import { motion } from "framer-motion";
import ThreeDCanvas from "./ThreeDCanvas";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
  onExploreClick?: () => void;
  backgroundColor?: string;
}

const HeroSection = ({
  title = "Welcome to My Portfolio",
  subtitle = "Full-Stack Developer & UI/UX Enthusiast",
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
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.div
          className="text-center space-y-6 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300"
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
              className="mt-8 px-8 py-6 text-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
