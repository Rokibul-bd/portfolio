import React from 'react';
import TypedReactHooks from '../../../Hooks/Typed/TypedReactHooks';
import bannerImg from '../../../Vendors/img/banner-img.jpeg'
const Banner = () => {

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex flex-col lg:flex-row-reverse justify-between">
                <img src={bannerImg} className="max-w-sm rounded-lg " alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-purple-700">Md Rakib Mia</h1>
                    <div className='text-2xl flex mt-4'> <p>My Skills - </p> <TypedReactHooks></TypedReactHooks></div>
                    <p className="py-6">Profesonal Front End Developer. I have done five fullStack website with Node js MongDB , React Js , Firebase</p>
                    <a href="https://drive.google.com/file/d/1uWB9ZEWeGt_qSP6SggT7hk8DA5dBA4OH/view?usp=share_link" className="btn btn-primary text-white">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;