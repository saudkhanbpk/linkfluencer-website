import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React, { useState, FormEvent } from 'react';
 function Contact() {
        const [name, setName] = useState<string>('');
        const [email, setEmail] = useState<string>('');
        const [subject, setSubject] = useState<string>('');
        const [message, setMessage] = useState<string>('');
        const [isAgreed, setIsAgreed] = useState<boolean>(false);
    const [selectedComponent, setSelectedComponent] = useState('brand');

    
        const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
    
            if (!isAgreed) {
                alert("Please agree to the terms and policy.");
                return;
            }
    
            // Handle form submission, e.g., sending data to an API
            console.log({
                name,
                email,
                subject,
                message,
                isAgreed
            });
    
            // Reset form fields after submission
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setIsAgreed(false);
        };
    
    return (
        <>
            <Navbar selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent} />

            <div className='md:flex justify-center items-center flex-col md:min-h-screen p-8 md:pt-32'>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    <h1 className='text-3xl md:text-5xl font-semibold md:text-start text-center text-[#113E53] mb-5'>Contact Us</h1>
                    <input
                        className='md:w-[700px] border p-3 rounded-full mt-5'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='w-full md:w-[700px] border p-3 rounded-full mt-5'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='w-full md:w-[700px] border p-3 rounded-full mt-5'
                        type='text'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        className='w-full md:w-[700px] border p-3 rounded-xl mt-5'
                        rows={5}
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="flex gap-2 m-2 w-full">
                        <input
                            className="w-4"
                            type="checkbox"
                            checked={isAgreed}
                            onChange={() => setIsAgreed(!isAgreed)}
                        />
                        <p>Agreeing to our Terms and Policy</p>
                    </div>
                    <button
                        type="submit"
                        className="w-fit py-3 px-16 m-2 cursor-pointer self-end bg-[#020D3A] text-white rounded-full"
                    >
                        Submit
                    </button>
                </form>
                <div className='block md:hidden mt-3'><h1 className='text-2xl md:text-3xl font-semibold md:text-start text-start text-[#113E53] '>Launch your internet space with a boost</h1>
                    <div className=' flex flex-col justify-start'>
                        <input className='md:w-[450px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' /><br />
                        <div className='flex justify-start '>
                            <button className="w-fit py-3 px-8  rounded-full focus:outline-none md:centered bg-[#020D3A] text-white">
                                Create Smart Link
                            </button>
                        </div>

                    </div></div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
