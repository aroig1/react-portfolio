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

export function Technologies() {
    const IMAGE_SIZE = 50;
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mb-35 lg:mx-32">
            <h3 className="text-center text-3xl my-8">Technologies</h3>
            <div className="flex flex-wrap justify-evenly mx-16 gap-4 mb-4">
                <FaReact className="text-blue-400" size={IMAGE_SIZE}/>
                <SiSvelte className="text-orange-700" size={IMAGE_SIZE}/>
                <SiPandas className="text-purple-600" size={IMAGE_SIZE}/>
                <FaCloudflare className="text-orange-400" size={IMAGE_SIZE}/>
                <PiGitlabLogoDuotone className="text-orange-700" size={IMAGE_SIZE}/>
                <FaGitAlt className="text-red-500" size={IMAGE_SIZE}/>
                <FaGithub size={IMAGE_SIZE}/>
                <SiJira className="text-blue-500" size={IMAGE_SIZE}/>
                <SiAzuredevops className="text-blue-500" size={IMAGE_SIZE}/>
                <SiAnaconda className="text-green-800" size={IMAGE_SIZE}/>
                <FaLinux size={IMAGE_SIZE}/>
                <FaJenkins size={IMAGE_SIZE}/>
                <SiAnsible className="text-red-500" size={IMAGE_SIZE}/>
                <FaDocker className="text-blue-400" size={IMAGE_SIZE}/>
                <SiSelenium className="text-green-600" size={IMAGE_SIZE}/>
            </div>
        </div>
    )
}

export function Skills() {
    const IMAGE_SIZE = 50;
    return (
        <div className="border-b border-neutral-900 pb-4 mx-6 lg:mb-35 lg:mx-32">
            <h2 className="text-center text-4xl my-8">Skills</h2>
            <h3 className="text-center text-3xl my-4">Languages</h3>
            <div className="flex flex-wrap justify-center mx-16 gap-5 gap-y-8 lg:gap-14 my-8 text-gray-400">
                <div className="flex flex-col items-center gap-1">
                    <FaPython className="text-yellow-400" size={IMAGE_SIZE}/>
                    <span>Python</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaJava className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Java</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiCplusplus className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>C, C++</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiAssemblyscript className="text-blue-600" size={IMAGE_SIZE}/>
                    <span>MIPS Assembly</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src="src/assets/verilogLogo.png" alt="verilog logo" width={IMAGE_SIZE} height={IMAGE_SIZE}/>
                    <span>Verilog</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaHtml5 className="text-orange-500" size={IMAGE_SIZE}/>
                    <span>HTML</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaCss3Alt className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>CSS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <IoLogoJavascript className="text-yellow-400" size={IMAGE_SIZE}/>
                    <span>Javascript</span>
                </div>
            </div>
            <h3 className="text-center text-3xl my-4">Technologies</h3>
            <div className="flex flex-wrap justify-center mx-16 gap-x-5 gap-y-8 lg:gap-x-14 my-8 text-gray-400">
                <div className="flex flex-col items-center gap-1">
                    <FaReact className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>React</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiSvelte className="text-orange-700" size={IMAGE_SIZE}/>
                    <span>SvelteKit</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiPandas className="text-purple-600" size={IMAGE_SIZE}/>
                    <span>Pandas</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaCloudflare className="text-orange-400" size={IMAGE_SIZE}/>
                    <span>Cloudflare</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <PiGitlabLogoDuotone className="text-orange-700" size={IMAGE_SIZE}/>
                    <span>GitLab</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaGitAlt className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Git</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaGithub className="text-white" size={IMAGE_SIZE}/>
                    <span>Github</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiJira className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>Jira</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiAzuredevops className="text-blue-500" size={IMAGE_SIZE}/>
                    <span>Azure DevOps</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiAnaconda className="text-green-800" size={IMAGE_SIZE}/>
                    <span>Anaconda</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaLinux className="text-white" size={IMAGE_SIZE}/>
                    <span>Linux</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaJenkins className="text-white" size={IMAGE_SIZE}/>
                    <span>Jenkins</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiAnsible className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Ansible</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaDocker className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Docker</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiSelenium className="text-green-600" size={IMAGE_SIZE}/>
                    <span>Selenium</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <SiApachemaven className="text-red-500" size={IMAGE_SIZE}/>
                    <span>Maven</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FaBitbucket className="text-blue-400" size={IMAGE_SIZE}/>
                    <span>Bitbucket</span>
                </div>
            </div>
            <h3 className="text-center text-3xl my-4">Concepts</h3>
            <div className="flex flex-wrap justify-center mx-16 gap-x-2 gap-y-4 my-8 lg:gap-5 text-gray-400">
                {CONCEPTS.map((concept) => (
                    <span className="py-1 px-4 rounded-xl bg-neutral-900 text-center">{concept}</span>
                ))}
            </div>
        </div>
    )
}