import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mx-32 flex flex-wrap items-center justify-center lg:justify-evenly">
            <motion.div initial={{x: -100, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{duration: 1}}
                className="flex flex-col items-center lg:items-start w-full mb-4 lg:w-1/2">
                <h1 className="py-2 lg:py-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    About Me
                </h1>
                {ABOUT_TEXT.map((text) => (
                    <p className="my-2 max-w-2xl font-light text-center lg:text-left">
                        {text}
                    </p>
                ))}
            </motion.div>
            <motion.img initial={{x: 50, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{duration: 1, delay: 0.5}}
                src="/images/planPic.JPG" alt="picture of me" 
                className="rounded-3xl w-4/5 lg:w-2/5 lg:mt-12 object-cover max-h-128" /> 
        </div>
    )
}