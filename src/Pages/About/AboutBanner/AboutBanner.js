import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import myPhoto from '../../../Vendors/img/banner-img.jpeg'
const AboutBanner = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myPhoto} className="max-w-sm rounded-lg" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">I am Front End Developer</h1>
                    <p className="py-6">Hi, This is Rokibul. Front End Developer. I am doing Mearn Stack Development</p>
                    <p>I am very hard working and dedicated person. I am doing 2 FullStack project. I am countinue leaning something.</p>
                    <div className='my-4 py-8 flex gap-8'>
                        <a href="https://www.linkedin.com/in/rakibbd/"><FaLinkedin className='text-3xl'></FaLinkedin></a>
                        <a href="https://github.com/Rokibul-bd"><FaGithub className='text-3xl'></FaGithub> </a>
                        <a href="https://www.facebook.com/rakiblovejannat"> <FaFacebookSquare className='text-3xl'></FaFacebookSquare> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;