import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/rakibbd/"><FaLinkedin className='text-3xl'></FaLinkedin></a>
                    <a href="https://github.com/Rokibul-bd"><FaGithub className='text-3xl'></FaGithub> </a>
                    <a href="https://www.facebook.com/rakiblovejannat"> <FaFacebookSquare className='text-3xl'></FaFacebookSquare> </a>
                </div>
            </div>
            <div>
                <p>Email: mdrokibulislamcmt176@gmail.com</p>
                <p>Copyright © 2022 - All right reserved by Md Rakib Mia</p>
            </div>
        </footer>
    );
};

export default Footer;