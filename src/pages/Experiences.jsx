import React from 'react';
import Education from '../components/Education';
import { LongExperiences } from '../components/Experience';
import { Skills } from '../components/Technologies';
import Contact from "../components/Contact";

const Experiences = () => {
  return (
    <div>
        <Education />
        <LongExperiences />
        <Skills />
        <Contact />
    </div>
  );
};

export default Experiences;