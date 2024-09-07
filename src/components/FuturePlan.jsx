import { FUTURE_PLAN } from "../constants"

export default function FuturePlan() {
    return (
        <div className="border-b border-neutral-900 mt-4 pb-4 mx-6 lg:mb-35 lg:mx-32 flex flex-wrap items-center justify-center lg:justify-evenly">
            <img src="src/assets/sunsetPic.JPG" alt="picture of me" 
            className="rounded-3xl w-4/5 lg:w-2/5 object-cover max-h-128" /> 
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                <h1 className="mt-4 py-2 lg:py-4 text-4xl font-thin tracking-tight lg:text-6xl">
                    10 Year Plan
                </h1>
                {FUTURE_PLAN.map((text, index) => (
                    <p index={index} className="my-2 max-w-2xl pt-4 font-light text-center lg:text-left">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}