import { Link, Outlet } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="text-white">
            <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <nav className="flex justify-between items-center p-4">
                <h1 className="container text-2xl">
                    <Link to="/" className="w-max">Aidan Roig</Link>
                </h1>
                <div className="container flex justify-around items-center mx-10">
                    <Link to="/about">About Me</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="container flex justify-end items-center gap-5 mr-5">
                    <a href="https://www.linkedin.com/in/aidan-javier-roig/">
                        <FaLinkedin size={25}/>
                    </a>
                    <a href="https://github.com/aroig1">
                        <FaGithub size={25}/>
                    </a>
                    <a href="mailto:aroig@arizona.edu">
                        <MdOutlineEmail size={25}/>
                    </a>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}