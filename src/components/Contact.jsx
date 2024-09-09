import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.5}}
            className="flex flex-col  text-center gap-2 mb-10">
            <h3 className="text-3xl mb-4">Get in Touch</h3>
            <span className="text-gray-400 text-sm">(928) 606-1732</span>
            <a href="mailto:aroig@arizona.edu"  className="text-gray-400 text-sm">aroig@arizona.edu</a>
            <a href="https://www.linkedin.com/in/aidan-javier-roig/" 
            className="text-gray-400 text-sm underline">
                linkedin.com/in/aidan-javier-roig
            </a>
        </motion.div>
    )
}