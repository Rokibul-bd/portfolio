import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { shortImg, name, liveLink, status, text, _id } = project;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={shortImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <a href={liveLink} className='btn text-white'>Live Website</a>
                    <Link to={`/projects/${_id}`} className='btn btn-primary hover:outline-primary text-white'>Veiw Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;