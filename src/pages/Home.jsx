import React from "react";
import Hero from "../components/Hero";
import { ShortExperiences } from "../components/Experience";
import { ShortProjects } from "../components/Project";
import Contact from "../components/Contact";
import { Technologies } from "../components/Technologies";

const Home = () => {
  return (
    <div>
        <Hero />
        <Technologies />
        <ShortExperiences />
        <ShortProjects />
        <Contact />
    </div>
  )
}

export default Home