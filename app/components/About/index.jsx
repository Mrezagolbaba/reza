import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({
  name = "Mohamadreza Golbaba",
  role = "Software Engineer",
  location = "Tallinn, Estonia",
  nationality = "Iranian",
  avatarUrl = "/avatar.jpg",
  id = "about"
}) => {
  return (
    <section id={id}>
      <motion.section
        className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={avatarUrl}
          alt=""
          className="w-24 h-24 rounded-full"
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          An explorer in code, bringing clarity to complexity and crafting experiences that feel effortless.
        </motion.h1>
      </motion.section>
    </section>
  );
};

export default AboutSection;