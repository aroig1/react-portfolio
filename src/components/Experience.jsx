import { EXPERIENCES } from "../constants"

export function ShortExperiences() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <h2 className="text-3xl text-center mb-8">Experience</h2>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center mb-6">
                    <div className="lg:w-1/4">
                        <h3><em>{experience.company}</em></h3>
                        <span className="text-gray-400">{experience.date}</span>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="mb-2">{experience.role}</h3>
                        <p className="text-gray-400 tracking-tight mb-2">{experience.description}</p>
                        <div className="flex flex-wrap items-center">
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function LongExperiences() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 lg:mx-32 lg:px-16">
            <h2 className="text-4xl text-center mb-8">Work Experience</h2>
            {EXPERIENCES.map((experience) => (
                <div className="flex flex-wrap lg:justify-center mb-6">
                    <div className="flex flex-col lg:w-1/4">
                        <h3><em>{experience.company}</em></h3>
                        <span className="text-gray-400">{experience.location}</span>
                        <span className="text-gray-400">{experience.date}</span>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="mb-2">{experience.role}</h3>
                        <p className="text-gray-400 tracking-tight mb-2">{experience.description}</p>
                        <ul className="list-disc text-gray-400 ml-8 mb-4">
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap items-center">
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="text-sm mr-4 mb-4 px-2 py-1 rounded-xl bg-neutral-900 text-purple-600 text-center">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}