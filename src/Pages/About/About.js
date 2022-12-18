import React from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import AboutBanner from './AboutBanner/AboutBanner';
import Coures from './Coures/Coures';
import Educational from './Education/Educational';

const About = () => {
    useTitle('about page')
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Educational></Educational>
            <Coures></Coures>
        </div>
    );
};

export default About;