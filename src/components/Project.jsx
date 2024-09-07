import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";

export function RecentProjects() {
    const [visibleProjects, setVisibleProjects] = useState([]);

    const toggleVisibility = (index) => {
        const newVisibleProjects = [...visibleProjects];
        newVisibleProjects[index] = !newVisibleProjects[index];
        setVisibleProjects(newVisibleProjects);
    };

    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <h2 className="text-3xl text-center mb-8">Recent Projects</h2>
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
            <h2 className="text-4xl text-center mb-8">Projects</h2>
            {PROJECTS.map((project, index) => (
                <Project key={project.id} project={project} index={index} visible={visibleProjects[index]} toggleVisibility={toggleVisibility}/>
            ))}
        </div>
    )
};

function Project({project, index, visible, toggleVisibility}) {
    return (
        <div>
            <div onClick={() => toggleVisibility(index)} 
            className="flex flex-wrap items-center justify-center mb-6 gap-x-16 
            border-solid border-transparent hover:border-purple-600 border-2 rounded-3xl p-4">
                <ProjectImageSmall project={project} />
                <div className="lg:w-1/2">
                    <h3 className="text-center lg:text-left mb-2">{project.title}</h3>
                    <p className="text-gray-400 tracking-tight mb-2">{project.description}</p>
                    <div className="flex flex-wrap items-center">
                        {project.technologies.map((tech) => (
                            <span className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
            {visible && (
                <div onClick={() => toggleVisibility(index)} className="fixed inset-0 flex items-center justify-center">
                    <div className="w-11/12 lg:w-3/5 bg-neutral-900 p-4 lg:p-8 rounded-3xl border-4 
                    border-purple-600 overflow-auto max-h-3/4 flex flex-col">
                        <ProjectImageLarge project={project} />
                        <h2 className="text-center text-2xl lg:text-3xl my-2 lg:my-4">{project.title}</h2>
                        {project.paragraphs.map((text, i) => (
                            <p key={i} className="text-gray-300 mt-2 lg:mt-4 text-sm lg:text-md">{text}</p>
                        ))}
                        <div className="flex flex-wrap justify-center mt-4">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-black
                                text-purple-600 text-center">{tech}</span>
                            ))}
                        </div>
                        <Github project={project} />
                    </div>
                </div>
            )}
        </div>
    )
};

function ProjectImageSmall({project}) {
    if (project.image != null) {
        return (
            <img src={project.image} alt="image of project" 
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