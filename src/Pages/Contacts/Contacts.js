import React from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import Contact from './Contact/Contact';
const Contacts = () => {
    useTitle('Contact')
    return (
        <div>
            <Contact></Contact>
        </div>
    );
};

export default Contacts;