import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

export function ShortExperiences() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <motion.h2 initial={{y: -50, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{duration: 1, delay: 1.75}}
                className="text-3xl text-center mb-8">Experience</motion.h2>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center mb-6">
                    <motion.div initial={{x: -150, opacity: 0}} whileInView={{x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1}}
                        className="lg:w-1/4">
                        <h3><em>{experience.company}</em></h3>
                        <span className="text-gray-400">{experience.date}</span>
                    </motion.div>
                    <motion.div initial={{x: 150, opacity: 0}} whileInView={{x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1}}
                        className="lg:w-1/2">
                        <h3 className="mb-2">{experience.role}</h3>
                        <p className="text-gray-400 tracking-tight mb-2">{experience.description}</p>
                        <div className="flex flex-wrap items-center">
                            {experience.technologies.map((tech, index) => (
                                <motion.span whileHover={{ scale: 1.25 }} key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export function LongExperiences() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <motion.h2 initial={{y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1}}
                className="text-4xl text-center mb-8">Work Experience</motion.h2>
            {EXPERIENCES.map((experience) => (
                <div className="flex flex-wrap lg:justify-center mb-6">
                    <motion.div initial={{x: -100, opacity: 0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                        className="flex flex-col lg:w-1/4">
                        <h3><em>{experience.company}</em></h3>
                        <span className="text-gray-400">{experience.location}</span>
                        <span className="text-gray-400">{experience.date}</span>
                    </motion.div>
                    <motion.div initial={{x: 100, opacity: 0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.5}}
                        className="lg:w-1/2">
                        <h3 className="mb-2">{experience.role}</h3>
                        <p className="text-gray-400 tracking-tight mb-2">{experience.description}</p>
                        <ul className="list-disc text-gray-400 ml-8 mb-4">
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap items-center">
                            {experience.technologies.map((tech, index) => (
                                <motion.span whileHover={{ scale: 1.25 }} key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}