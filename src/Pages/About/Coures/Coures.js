import React from 'react';
const Coures = () => {
    return (
        <div className='container mx-auto my-36'>
            <h4 className='font-semibold text-3xl text-center mb-16'>Among the courses I have attended</h4>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center py-4">
                    <h4 className='text-3xl font-semibold'>Programing Hero</h4>
                    <p className='text-lg my-2'>I am complite programing Hero Web Development Course</p>
                    <p className='text-4xl'>Batch Six</p>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
                    <h4 className='text-3xl font-semibold'>Eurpean It</h4>
                    <p className='text-lg my-2'>I am complite European It React JS Course</p>
                    <p className='text-4xl'>Batch React JS</p>
                </div>
            </div>
        </div>
    );
};

export default Coures;