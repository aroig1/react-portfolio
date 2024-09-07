import { OUTSIDE_CLASS } from "../constants"

export default function OutsideClass() {
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mx-32 flex flex-wrap items-center justify-center lg:justify-evenly">
            <div className="flex flex-col items-center lg:items-start w-full mb-4 lg:w-1/2">
                <h1 className="py-2 lg:py-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    Outside of Class
                </h1>
                {OUTSIDE_CLASS.map((text) => (
                    <p className="my-2 max-w-2xl font-light text-center lg:text-left">
                        {text}
                    </p>
                ))}
            </div>
            <img src="src/assets/dunkingPic.JPG" alt="picture of me" 
            className="rounded-3xl w-4/5 lg:w-2/5 lg:mt-12 object-cover object-center max-h-128" /> 
        </div>
    )
}