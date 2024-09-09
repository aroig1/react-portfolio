import { FaReact } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { PiGitlabLogoDuotone } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiAssemblyscript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { CONCEPTS } from "../constants";

import { motion } from "framer-motion";

export function Technologies() {
    const IMAGE_SIZE = 50;
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mb-35 lg:mx-32">
            <motion.h3 initial={{y: -50, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{duration: 1, delay: 1.25}}
                className="text-center text-3xl my-8">Technologies</motion.h3>
            <motion.div initial={{x: -100, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{duration: 1, delay: 1.5}}
                className="flex flex-wrap justify-evenly mx-16 gap-4 mb-4">
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaReact className="text-blue-400" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiSvelte className="text-orange-700" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiPandas className="text-purple-600" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaCloudflare className="text-orange-400" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <PiGitlabLogoDuotone className="text-orange-700" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaGitAlt className="text-red-500" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaGithub size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiJira className="text-blue-500" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiAzuredevops className="text-blue-500" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiAnaconda className="text-green-800" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaLinux size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaJenkins size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiAnsible className="text-red-500" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <FaDocker className="text-blue-400" size={IMAGE_SIZE}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <SiSelenium className="text-green-600" size={IMAGE_SIZE}/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export function Skills() {
    const IMAGE_SIZE = 50;
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mb-35 lg:mx-32">
            <motion.h2 initial={{y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="text-center text-4xl my-4">Languages</motion.h2>
            <motion.div initial={{x: -100, opacity: 0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="flex flex-wrap justify-center mx-16 gap-5 gap-y-8 lg:gap-14 my-8 text-gray-400">
                <motion.div whileHover={{ scale: 1.25 }}
                    className="flex flex-col items-center gap-1">
                    <FaPython className="text-yellow-400" size={IMAGE_SIZE}/>
                    <span>Python</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }}
                    className="flex flex-col items-center gap-1">
                    <FaJava className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Java</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiCplusplus className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>C, C++</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiAssemblyscript className="text-blue-600" size={IMAGE_SIZE}/>
                    <span>MIPS Assembly</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <img src="/images/verilogLogo.png" alt="verilog logo" width={IMAGE_SIZE} height={IMAGE_SIZE}/>
                    <span>Verilog</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaHtml5 className="text-orange-500" size={IMAGE_SIZE}/>
                    <span>HTML</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaCss3Alt className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>CSS</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <IoLogoJavascript className="text-yellow-400" size={IMAGE_SIZE}/>
                    <span>Javascript</span>
                </motion.div>
            </motion.div>
            <motion.h2 initial={{y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="text-center text-4xl my-4">Technologies</motion.h2>
            <motion.div initial={{x: -100, opacity: 0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="flex flex-wrap justify-center mx-16 gap-x-5 gap-y-8 lg:gap-x-14 my-8 text-gray-400">
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaReact className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>React</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiSvelte className="text-orange-700" size={IMAGE_SIZE}/>
                    <span>SvelteKit</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiPandas className="text-purple-600" size={IMAGE_SIZE}/>
                    <span>Pandas</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaCloudflare className="text-orange-400" size={IMAGE_SIZE}/>
                    <span>Cloudflare</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <PiGitlabLogoDuotone className="text-orange-700" size={IMAGE_SIZE}/>
                    <span>GitLab</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaGitAlt className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Git</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaGithub className="text-white" size={IMAGE_SIZE}/>
                    <span>Github</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiJira className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>Jira</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiAzuredevops className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>Azure DevOps</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiAnaconda className="text-green-800" size={IMAGE_SIZE}/>
                    <span>Anaconda</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaLinux className="text-white" size={IMAGE_SIZE}/>
                    <span>Linux</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaJenkins className="text-white" size={IMAGE_SIZE}/>
                    <span>Jenkins</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiAnsible className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Ansible</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaDocker className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Docker</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiSelenium className="text-green-600" size={IMAGE_SIZE}/>
                    <span>Selenium</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <SiApachemaven className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Maven</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.25 }} className="flex flex-col items-center gap-1">
                    <FaBitbucket className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Bitbucket</span>
                </motion.div>
            </motion.div>
            <motion.h2 initial={{y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="text-center text-4xl my-4">Concepts</motion.h2>
            <motion.div initial={{x: -100, opacity: 0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{duration: 1, delay: 0.25}}
                className="flex flex-wrap justify-center mx-16 gap-x-2 gap-y-4 my-8 lg:gap-5 text-gray-400">
                {CONCEPTS.map((concept, index) => (
                    <motion.span whileHover={{ scale: 1.1 }} key={index} className="py-1 px-4 rounded-xl bg-neutral-900 text-center">{concept}</motion.span>
                ))}
            </motion.div>
        </div>
    )
}