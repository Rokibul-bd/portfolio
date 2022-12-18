import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiStar } from '@react-icons/all-files/ti/TiStar'
import useTitle from '../../Hooks/Title/useTitle';

const ProjectsDetails = () => {
    const projectDetails = useLoaderData();
    const { fullImg, name, liveLink, text, text1, text2, text3, technology, githubClient, githubServer } = projectDetails;
    useTitle(`project-${name}`)
    return (
        <div className='my-36 container mx-auto'>
            <div className='grid md:grid-cols-2'>
                <div>
                    <img className='w-full h-[500px] object-scale-down
                    ' src={fullImg} alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='card'>
                        <h3 className='font-semibold text-3xl mb-4'>{name}</h3>
                        <p>{text}</p>
                        <h4 className='text-2xl text-success font-semibold my-8'>WebSite Futures</h4>
                        <div className='flex items-start'><TiStar className='text-4xl'></TiStar> <p>{text1}</p></div>
                        <div className='flex items-start'><TiStar className='text-4xl'></TiStar> <p>{text2}</p></div>
                        <div className='flex items-start'><TiStar className='text-4xl'></TiStar> <p>{text3}</p></div>
                        <div>
                            <p className="my-6"><span className='text-2xl font-semibold'>Technology:</span>{technology}</p>
                            <div className='flex justify-center'>
                                <div className='flex mt-5'>
                                    <a className="btn bg-success text-white" href={liveLink}>Live Website</a>
                                    <a className="btn bg-success text-white" href={githubServer}>Server site Code</a>
                                    <a className="btn bg-success text-white" href={githubClient}>Client Site Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;