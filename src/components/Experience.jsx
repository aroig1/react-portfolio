import { EXPERIENCES } from "../constants"

export function ShortExperience() {
    return (
        <div className="border-b border-neutral-900 my-8 lg:mx-32">
            <h2 className="text-3xl text-center mb-4">Experience</h2>
            <div className="flex justify-evenly">
                <div className="lg:w-1/4">
                    <h3>{EXPERIENCES[0].company}</h3>
                    <span className="text-gray-400">{EXPERIENCES[0].date}</span>
                </div>
                <div className="lg:w-1/2">
                    <h3 className="mb-2">{EXPERIENCES[0].role}</h3>
                    <p className="text-gray-400">{EXPERIENCES[0].description}</p>
                </div>
            </div>
        </div>
    )
}