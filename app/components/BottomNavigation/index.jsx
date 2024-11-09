import clsx from 'clsx'
import { Home, Briefcase, GraduationCap, Activity, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes' 

const BottomNavigation = ({ activeSection, onSectionChange }) => {
  const { theme, setTheme } = useTheme()
  
  const navigation = [
    { name: "About", href: "about", icon: Home },
    { name: "Experience", href: "experience", icon: Briefcase },
    { name: "Projects", href: "project", icon: Briefcase },
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center w-full z-50 px-4">
      <nav className="bg-gray/80 dark:bg-black/80 rounded-full shadow-lg px-4 py-2 backdrop-blur-sm border border-gray-200 dark:border-zinc-800">
        <ul className="flex items-center gap-8">
          {navigation.map((item) =>  {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={clsx(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-orange-500",
                    activeSection === item.href
                      ? "text-orange-500"
                      : "text-black dark:text-zinc-400"
                  )}
                >
                  <Icon 
                    className={clsx(
                      "w-6 h-6 md:hidden",
                      activeSection === item.href
                        ? "text-orange-500"
                        : "text-gray-600 dark:text-zinc-400"
                    )}
                  />
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
                  {activeSection === item.href && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/70 to-orange-500/0" />
                  )}
                </button>
              </li>
            )
          })}
          
          <li>
            <button
              onClick={toggleTheme}
              className="relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-orange-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-zinc-400 hover:text-orange-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-600 hover:text-orange-500" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BottomNavigation