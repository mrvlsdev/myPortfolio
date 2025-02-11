import React from "react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  description?: string;
  backgroundColor?: string;
}

const BioSection = ({
  title = "Hi, I'm John Doe",
  description = "I'm a passionate developer with over 5 years of experience in building web applications. I specialize in React, TypeScript, and modern web technologies. When I'm not coding, you can find me exploring new tech, writing technical blogs, or contributing to open-source projects.",
  backgroundColor = "bg-slate-50 dark:bg-slate-900",
}: Props) => {
  return (
    <section
      className={`${backgroundColor} min-h-[400px] w-full py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="pt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-900 dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
