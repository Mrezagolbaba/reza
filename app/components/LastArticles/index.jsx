import { motion } from 'framer-motion'

const ArticlesSection = ({ id }) => {
  const articles = [
    {
      title: 'Why the React team removed Create React App (CRA) from the React project',
      publishedAt: '2023-03-20',
      url: 'https://medium.com/@m.reza.golbaba/why-the-react-team-removed-create-react-app-cra-from-the-react-project-444ae7168a48',
    },
    {
      title: 'How to configure a Next.js application with Docker',
      publishedAt: '2023-03-30',
      url: 'https://medium.com/@m.reza.golbaba/how-to-configure-a-next-js-application-with-docker-60833e7a2a94',
    },
    {
      title: 'A Beginner’s Guide to Developing Chrome Extensions',
      publishedAt: '2023-04-21',
      url: 'https://medium.com/@m.reza.golbaba/a-beginners-guide-to-developing-chrome-extensions-9087cb6228f',
    },
    {
      title: 'Exploring the Latest Features in TypeScript 5.3',
      publishedAt: '2024-10-22',
      url: 'https://medium.com/@m.reza.golbaba/exploring-the-latest-features-in-typescript-5-3-a1c775a250cf',
    }
    // You can add more articles here following the same structure
  ]

  return (
    <section id={id} className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-500">Articles</h3>
        
        <div className="space-y-6">
          {articles.map((article, index) => (
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
                    <a 
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h4 className="text-xl font-medium text-gray-900 dark:text-gray-500 hover:text-orange-500 transition-colors">
                        {article.title}
                      </h4>
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Published on {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ArticlesSection