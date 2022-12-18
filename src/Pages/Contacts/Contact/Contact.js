import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const event = e.target;
        emailjs.sendForm('service_ni90tle', 'template_c1nfkv7', form.current, 'YHjKXKFa6C8oBs-QU')
            .then((result) => {
                toast.success('Data submit Successfully!');
                event.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactNav' className='container mx-auto my-36'>
            <form className="bg-white shadow-lg rounded-md p-16 md:w-1/2 mx-auto" ref={form} onSubmit={sendEmail}>
                <h3 className="text-center text-3xl font-bold mb-16">Conctact Me</h3>
                <label>Name</label>
                <input name="user_name" type="text" placeholder="Full Name" className="input input-bordered input-primary w-full" required />
                <label>Email</label>
                <input name="user_email" type="email" placeholder="Email" className="input input-bordered input-primary w-full" required />
                <label>Type your Message</label>
                <textarea cols="20" rows="10" className="textarea textarea-info w-full my-2" name="message" placeholder="Message" required></textarea>
                <input className="btn btn-primary text-white block" type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default Contact;