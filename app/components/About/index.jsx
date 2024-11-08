import { motion } from "framer-motion";
const AboutSection = ({id}) => {
    return (    
        <section id="about" className="min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 dark:text-gray-500">Mohamadreza Golbaba</h1>
          <h2 className="text-2xl text-primary mb-6 dark:text-gray-500">Softwear Enginner</h2>
          <p className="max-w-lg text-muted-foreground dark:text-gray-500">
            Crafting digital experiences with code and creativity. Specializing in React, Node.js, and interactive web applications.
          </p>
        </motion.div>
      </section>
    )
}
export default AboutSection;