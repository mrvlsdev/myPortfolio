import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import SkillsSection from "./SkillsSection";
import ProjectShowcase from "./ProjectShowcase";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    // Add transition class before theme change
    document.documentElement.classList.add("theme-transition");

    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");

    // Remove transition class after theme change
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  const handleExploreClick = () => {
    document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      <Navbar
        onThemeToggle={handleThemeToggle}
        isDarkMode={isDarkMode}
        links={[
          { href: "#home", label: "Home" },
          { href: "#bio", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#testimonials", label: "Testimonials" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home">
          <HeroSection
            onExploreClick={handleExploreClick}
            backgroundColor={isDarkMode ? "bg-slate-900" : "bg-slate-100"}
            title="Building the Future of the Web"
            subtitle="Full-Stack Developer & UI/UX Enthusiast"
          />
        </section>

        <section id="bio">
          <BioSection
            title="Hi, I'm a Developer"
            description="I'm passionate about creating beautiful and functional web applications using modern technologies. With expertise in React, TypeScript, and various modern web frameworks, I strive to build seamless user experiences."
            backgroundColor={isDarkMode ? "bg-slate-800" : "bg-slate-50"}
          />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectShowcase />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="blog">
          <BlogSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <motion.footer
          className="py-8 text-center bg-background border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default Home;
