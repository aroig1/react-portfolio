import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export function RecentProjects() {
    const [visibleProjects, setVisibleProjects] = useState([]);

    const toggleVisibility = (index) => {
        const newVisibleProjects = [...visibleProjects];
        newVisibleProjects[index] = !newVisibleProjects[index];
        setVisibleProjects(newVisibleProjects);
    };

    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <motion.h2 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1}}
                className="text-3xl text-center mb-8">Recent Projects</motion.h2>
            {PROJECTS.slice(0, 3).map((project, index) => (
                <Project key={project.id} project={project} index={index} visible={visibleProjects[index]} toggleVisibility={toggleVisibility} />
            ))}
        </div>
    )
};

export function AllProjects() {
    const [visibleProjects, setVisibleProjects] = useState([]);

    const toggleVisibility = (index) => {
        const newVisibleProjects = [...visibleProjects];
        newVisibleProjects[index] = !newVisibleProjects[index];
        setVisibleProjects(newVisibleProjects);
    };

    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <motion.h2 initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1 }} transition={{duration: 1}}
                className="text-4xl text-center mb-8">Projects</motion.h2>
            {PROJECTS.map((project, index) => (
                <Project key={project.id} project={project} index={index} visible={visibleProjects[index]} toggleVisibility={toggleVisibility}/>
            ))}
        </div>
    )
};

function Project({project, index, visible, toggleVisibility}) {
    return (
        <div>
            <motion.div whileHover={{ scale: 1.05 }} onClick={() => toggleVisibility(index)} 
            className="flex flex-wrap items-center justify-center mb-6 gap-x-16 
            border-solid border-transparent hover:border-purple-600 border-2 rounded-3xl p-4">
                <ProjectImageSmall project={project} />
                <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.5}}
                    className="lg:w-1/2">
                    <h3 className="text-center lg:text-left mb-2">{project.title}</h3>
                    <p className="text-gray-400 tracking-tight mb-2">{project.description}</p>
                    <div className="flex flex-wrap items-center">
                        {project.technologies.map((tech) => (
                            <motion.span whileHover={{ scale: 1.25 }} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
            {visible && (
                <div onClick={() => toggleVisibility(index)} className="fixed inset-0 flex items-center justify-center">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1 }} transition={{duration: 0.5}}
                        className="w-11/12 lg:w-3/5 bg-neutral-900 p-4 lg:p-8 rounded-3xl border-4 
                    border-purple-600 overflow-auto max-h-3/4 flex flex-col">
                        <ProjectImageLarge project={project} />
                        <h2 className="text-center text-2xl lg:text-3xl my-2 lg:my-4">{project.title}</h2>
                        {project.paragraphs.map((text, i) => (
                            <p key={i} className="text-gray-300 mt-2 lg:mt-4 text-sm lg:text-md">{text}</p>
                        ))}
                        <div className="flex flex-wrap justify-center mt-4">
                            {project.technologies.map((tech, index) => (
                                <motion.span whileHover={{ scale: 1.25 }} key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-black
                                text-purple-600 text-center">{tech}</motion.span>
                            ))}
                        </div>
                        <Github project={project} />
                    </motion.div>
                </div>
            )}
        </div>
    )
};

function ProjectImageSmall({project}) {
    if (project.image != null) {
        return (
            <motion.img initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                src={project.image} alt="image of project" 
                className="mb-2 w-3/4 lg:w-1/4 max-h-96 object-contain"/>
        )
    }
}

function ProjectImageLarge({project}) {
    if (project.image != null) {
        return (
            <img src={project.image} alt="project image" className="object-contain max-h-96" />
        )
    }
}

function Github({project}) {
    if (project.github != null) {
        return (
            <a href={project.github} className="self-center">
                <FaGithub size={50} className="hover:text-purple-500"/>
            </a>
        )
    }
}