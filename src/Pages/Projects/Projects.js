import React, { useEffect, useState } from 'react';
import Project from '../Home/Project/Project';

const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    useEffect(() => {
        fetch('https://portfolio-server-liart.vercel.app/projects')
            .then(data => data.json())
            .then(data => setProjectInfo(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container mx-auto my-36 '>
            <h3 className='text-center text-info text-4xl mb-16 font-semibold'>My Projects</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    projectInfo.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;