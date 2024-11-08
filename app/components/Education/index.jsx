import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const EducationSection = ({id}) => {
    return (
        <section id={id} className="min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <h3 className="text-3xl font-semibold dark:text-gray-500">Education</h3>
                <div className="flex items-baseline space-x-2">
                    <ChevronRight className="text-primary" />
                    <div>
                        <h4 className="text-xl font-medium dark:text-gray-500">BSc in Computer Science</h4>
                        <p className="text-muted-foreground dark:text-gray-500">University of Technology, 2014 - 2018</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
export default EducationSection;