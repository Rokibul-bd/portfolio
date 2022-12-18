import React from 'react';

const Skill = ({ Icon, title, text, val }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0 mt-4 md:mt-0">
            <div className="card-body">
                <div className='flex justify-center'>
                    <Icon className="text-5xl"></Icon>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <progress className="progress progress-info w-56" value={val} max="100"></progress>
            </div>
        </div>
    );
};

export default Skill;