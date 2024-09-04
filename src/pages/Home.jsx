import React from "react";
import Hero from "../components/Hero";
import { ShortExperiences } from "../components/Experience";
import { ShortProjects } from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
        <Hero />
        <ShortExperiences />
        <ShortProjects />
        <Contact />
    </div>
  )
}

export default Home