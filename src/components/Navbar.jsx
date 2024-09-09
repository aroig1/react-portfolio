import { Link, Outlet } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-white">
            <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <nav className="flex justify-between items-center p-4">
                <h1 className="container text-2xl">
                    <Link to="/" className="w-max hover:text-purple-500">Aidan Roig</Link>
                </h1>

                <MediaQuery query='(min-width: 1024px)'>
                    <div className="container flex justify-around items-center mx-10">
                        <Link to="/about" className="hover:text-purple-500">About Me</Link>
                        <Link to="/experience" className="hover:text-purple-500">Experience</Link>
                        <Link to="/projects" className="hover:text-purple-500">Projects</Link>
                    </div>
                </MediaQuery>

                <div className="container flex justify-end items-center gap-5 mr-5">
                    <a href="https://www.linkedin.com/in/aidan-javier-roig/">
                        <FaLinkedin size={25} className="hover:text-purple-500"/>
                    </a>
                    <a href="https://github.com/aroig1">
                        <FaGithub size={25} className="hover:text-purple-500"/>
                    </a>
                    <a href="mailto:aroig@arizona.edu">
                        <MdOutlineEmail size={25} className="hover:text-purple-500"/>
                    </a>
                </div>

                <MediaQuery query='(max-width: 1024px)'>
                    <div onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={25}/> : <FaBars size={30} />}
                    </div>
                </MediaQuery>

            </nav>
            <MediaQuery query='(max-width: 1024px)'>
                {isOpen && (
                    <motion.div initial={{y: -25, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{duration: 0.5}}
                        className="absolute right-4 top-14 flex flex-col items-start bg-white text-black">
                        <Link to="/about" className="hover:text-purple-500 p-2" onClick={toggleMenu}>About Me</Link>
                        <Link to="/experience" className="hover:text-purple-500 p-2" onClick={toggleMenu}>Experience</Link>
                        <Link to="/projects" className="hover:text-purple-500 p-2" onClick={toggleMenu}>Projects</Link>
                    </motion.div>
                )}
            </MediaQuery>
            <Outlet />
        </div>
    );
}