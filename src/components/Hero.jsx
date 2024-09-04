import { HERO_CONTENT } from "../constants"

export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mb-35 lg:mx-32 flex flex-wrap items-center justify-center lg:justify-evenly">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                <h1 className="py-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aidan Roig</h1>
                <h2 className="pb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</h2>
                <p className="my-2 max-w-2xl py-6 font-light text-center lg:text-left">
                    {HERO_CONTENT}
                </p>
            </div>
            <img src="src/assets/HeroPic.JPG" alt="picture of me" 
            className="rounded-3xl w-3/4 lg:w-2/5 lg:mt-12"/>
        </div>
    )
}