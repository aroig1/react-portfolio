import { EXPERIENCES } from "../constants"

export function ShortExperience() {
    return (
        <div className="border-b border-neutral-900 lg:mx-32">
            <h2 className="text-3xl text-center">Experience</h2>
            <div className="flex justify-evenly">
                <div>
                    <h3>{EXPERIENCES[0].company}</h3>
                    <span>{EXPERIENCES[0].date}</span>
                </div>
                <div>
                    <h3>{EXPERIENCES[0].role}</h3>
                    <p>{EXPERIENCES[0].description}</p>
                </div>
            </div>
        </div>
    )
}