import clsx from 'clsx'
import { Home, Briefcase, GraduationCap, Activity, Mail } from 'lucide-react'

const BottomNavigation = ({ activeSection, onSectionChange }) => {
  const navigation = [
    { name: "About", href: "about", icon: Home },
    { name: "Experience", href: "experience", icon: Briefcase },
    { name: "Education", href: "education", icon: GraduationCap },
    { name: "Activity", href: "activity", icon: Activity },
    { name: "Contact", href: "contact", icon: Mail }
  ]

  const handleNavigation = (item) => {
    const element = document.getElementById(item.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onSectionChange(item.href)
    }
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center w-full z-50 px-4">
      <nav className="bg-white/80 dark:bg-black/80 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-zinc-800">
        <ul className="flex items-center">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={clsx(
                    "relative group flex items-center justify-center",
                    "px-3 py-4 md:px-8 md:py-4",
                    "transition-colors hover:text-orange-500"
                  )}
                >
                  {/* Icon only for mobile */}
                  <Icon 
                    className={clsx(
                      "w-6 h-6 md:hidden",
                      activeSection === item.href
                        ? "text-orange-500"
                        : "text-gray-600 dark:text-zinc-400"
                    )}
                  />
                  
                  {/* Text only for desktop */}
                  <span 
                    className={clsx(
                      "hidden md:block text-sm font-medium",
                      activeSection === item.href
                        ? "text-orange-500"
                        : "text-gray-600 dark:text-zinc-400"
                    )}
                  >
                    {item.name}
                  </span>

                  {/* Simple underline for active state */}
                  {activeSection === item.href && (
                    <span className={clsx(
                     "absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/70 to-orange-500/0" 
                    )} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default BottomNavigation