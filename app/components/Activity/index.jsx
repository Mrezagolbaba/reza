import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

const ActivitySection = ({ id }) => {
  return (
    <section id={id} className="min-h-screen w-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-500">
            GitHub Activity
          </h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full p-8 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg backdrop-blur-sm"
          >
            <GitHubCalendar
              username="Mrezagolbaba"
              blockSize={15}
              blockMargin={5}
              color="#f97316"
              fontSize={16}
              style={{ width: '100%' }}
              className="w-full overflow-x-auto"
              theme={{
                light: ['#f1f5f9', '#f97316'],
                dark: ['#1f2937', '#f97316'],
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActivitySection