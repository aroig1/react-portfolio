import React from 'react';
import Introduction from '../components/Introduction';
import Contact from '../components/Contact';
import FuturePlan from '../components/FuturePlan';
import OutsideClass from '../components/OutsideClass';

const AboutMe = () => {
  return (
    <div>
        <Introduction />
        <FuturePlan />
        <OutsideClass />
        <Contact />
    </div>
  );
};

export default AboutMe;
