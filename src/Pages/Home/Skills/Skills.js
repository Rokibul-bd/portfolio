import React from 'react';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { DiMongodb } from '@react-icons/all-files/di/DiMongodb'
import Skill from '../skill/Skill';
const Skills = () => {
    return (
        <div className='bg-white mb-16'>
            <div className='container mx-auto'>
                <h4 className='text-center font-semibold text-3xl mb-16 justify-center'>My Skills</h4>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 g-4'>
                    <Skill val="80" Icon={FaReact} title="React" text="I have know React Js . I have done some project with react js"></Skill>
                    <Skill val="60" Icon={FaNodeJs} title="Node Js" text="I have know Node Js. I have done some project and doing one project with Node Js"></Skill>
                    <Skill val="65" Icon={DiMongodb} title="MongoDB" text="I have know MongoDb Crud operation. I have doing mongoDB."></Skill>
                </div>
            </div>
        </div>
    );
};

export default Skills;