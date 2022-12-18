import React from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import Projects from '../Projects/Projects';
import Banner from './Banner/Banner';
import Skills from './Skills/Skills';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;