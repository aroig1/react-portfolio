import { EDUCATION } from "../constants"

export default function Education() {
    return (
        <div className="border-b border-neutral-900 my-8 mx-12 pb-4 lg:mx-32 lg:px-16">
            <h2 className="text-center text-4xl mb-8">Education</h2>
            {EDUCATION.map((education, index) => (
                <div key={index} className="container flex flex-wrap lg:justify-center">
                    <img src={education.logo} alt="U of A logo" 
                    className="hidden lg:inline-block w-12 h-12 mr-4"/>
                    <div className="mr-36">
                        <h3 className="text-lg"><em>{education.school}</em></h3>
                        <span className="text-gray-400">{education.location}</span>
                    </div>
                    <div className="lg:flex-1">
                        <h3 className="text-lg tracking-tight">{education.degree}</h3>
                        <span className="text-gray-400">{education.date}</span>
                        <ul className="list-disc text-gray-400 ml-8 my-2">
                            {education.accomplishments.map((fact) => (
                                <li>{fact}</li>
                            ))}
                        </ul>
                        <h4>Relevant Coursework</h4>
                        <div className="flex flex-wrap justify-start my-4 gap-x-2 gap-y-4">
                            {education.coursework.map((course) => (
                                <span className="py-1 px-4 rounded-xl bg-neutral-900 text-center text-sm text-gray-400">{course}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}