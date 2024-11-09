import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const RecentProjects = ({ id }) => {
    const projects = [
        // {
        //     title: "Personal Portfolio",
        //     description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
        //     tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        //     github: "https://github.com/yourusername/portfolio",
        // },
        // {
        //     title: "E-commerce Dashboard",
        //     description: "Admin dashboard for managing products, orders, and customers.",
        //     tech: ["React", "Node.js", "MongoDB"],
        //     github: "https://github.com/yourusername/dashboard",
        // },
        {
            title: "Packcraft",
            description: "A CLI tool to quickly scaffold new projects with common development tools and configurations.",
            tech: ["javascript", "cli"],
            github: "https://github.com/Mrezagolbaba/packcraft",
        },
        {
            title: "Word highlighter",
            description: "A powerful Chrome extension that helps you highlight and navigate through specific words on any webpage, with real-time word counting and dark mode support.",
            tech: ["javascript", "chrome-extension"],
            github: "https://github.com/Mrezagolbaba/word-highlighter",
        }
    ]

    return (
        <section id={id} className="min-h-screen w-full flex items-center">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-500">Passionate projects</h3>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="space-y-4"> {/* Changed from space-x-4 to space-y-4 for vertical spacing */}
                            <div className="flex justify-between items-start">
                                <h4 className="text-xl font-medium text-gray-900 dark:text-gray-400">
                                    {project.title}
                                </h4>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500" 
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
    
                            <p className="text-gray-600 dark:text-gray-500">
                                {project.description}
                            </p>
    
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
        
    )
}

export default RecentProjects