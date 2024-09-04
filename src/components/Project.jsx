import { TOP_PROJECTS } from "../constants"

export function ShortProjects() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <h2 className="text-3xl text-center mb-8">Recent Projects</h2>
            {TOP_PROJECTS.map((project) => (
                <div className="flex flex-wrap items-center justify-center mb-6 gap-x-16">
                    <img src={project.image} alt="image of project" 
                    className="mb-2 w-3/4 lg:w-1/4"/>
                    <div className="lg:w-1/2">
                        <h3 className="text-center lg:text-left mb-2">{project.title}</h3>
                        <p className="text-gray-400 tracking-tight mb-2">{project.description}</p>
                        <div className="flex flex-wrap items-center">
                            {project.technologies.map((tech) => (
                                <span className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-700 text-center">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}