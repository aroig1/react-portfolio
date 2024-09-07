import React from "react";
import Hero from "../components/Hero";
import { ShortExperiences } from "../components/Experience";
import { RecentProjects } from "../components/Project";
import Contact from "../components/Contact";
import { Technologies } from "../components/Technologies";

const Home = () => {
  return (
    <div>
        <Hero />
        <Technologies />
        <ShortExperiences />
        <RecentProjects />
        <Contact />
    </div>
  )
}

export default Home