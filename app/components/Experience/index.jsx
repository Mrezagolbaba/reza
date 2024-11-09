import { motion } from 'framer-motion'

const ExperienceSection = ({ id }) => {
  const experiences = [
    {
      title: "Lead Front-end Developer",
      company: "Extratik",
      location: "Tallinn, Estonia",
      period: "2023 – present",
      isPresent: true,
      technologies: [
        { name: "React", type: "frontend" },
        { name: "Next.js", type: "frontend" },
        { name: "TypeScript", type: "language" },
        { name: "Tailwind", type: "styling" },
        { name: "Redux", type: "state" },
        { name: "GraphQL", type: "api" },
        { name: "Jest", type: "testing" }
      ]
    },
    {
      title: "Senior Frontend Developer",
      company: "PWC",
      location: "Tallinn, Estonia",
      period: "2021 – 2023",
      technologies: [
        { name: "React", type: "frontend" },
        { name: "Vue.js", type: "frontend" },
        { name: "JavaScript", type: "language" },
        { name: "SASS", type: "styling" },
        { name: "REST API", type: "api" },
        { name: "Docker", type: "devops" }
      ]
    },
    {
      title: "Lead Front-end Developer",
      company: "Rental Track Pro",
      location: "Tallinn, Estonia",
      period: "2020 – 2021",
      technologies: [
        { name: "React", type: "frontend" },
        { name: "Redux", type: "state" },
        { name: "Node.js", type: "backend" },
        { name: "MongoDB", type: "database" },
        { name: "AWS", type: "cloud" }
      ]
    },
    {
      title: "Full-stack Developer",
      company: "Goki",
      location: "Sydney, Australia",
      period: "2016 – 2020",
      technologies: [
        { name: "React Native", type: "mobile" },
        { name: "Node.js", type: "backend" },
        { name: "PostgreSQL", type: "database" },
        { name: "Express", type: "backend" },
        { name: "Redis", type: "cache" }
      ]
    }
  ]

  return (
    <section id={id} className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-500">Experience</h3>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-xl font-medium text-gray-900 dark:text-gray-500 flex items-center gap-2">
                      {exp.title}
                      <span className="italic text-gray-600 dark:text-gray-400 hover:text-orange-500">
                        @ {exp.company}
                      </span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-500">{exp.period}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600 dark:bg-gray-800 dark:text-orange-400"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ExperienceSection