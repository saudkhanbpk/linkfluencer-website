import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react';

function Faq() {
    const [name, setName] = useState<string>('Question text goes here?');
    const [email, setEmail] = useState<string>('Question text goes here?');
    const [subject, setSubject] = useState<string>('Question text goes here?');
    const [message, setMessage] = useState<string>('Question text goes here?');
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
        setName('Question text goes here?');
        setEmail('Question text goes here?');
        setSubject('Question text goes here?');
        setMessage('Question text goes here?');
        setIsAgreed(false);
    };
const router = useRouter()
    const handleContactClick = () => {
        router.push('/contact')
    };

    const dropdownOptions1 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const dropdownOptions2 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const dropdownOptions3 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const dropdownOptions4 = [
        { value: 'option1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <>
            <Navbar selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent} />

            <div className='md:flex justify-center items-center flex-col md:min-h-screen p-8 md:pt-32'>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    <h1 className='text-3xl md:text-5xl font-semibold md:text-start text-center text-[#113E53] mb-5'>FAQs</h1>
                    <p className='text-xl md:w-[700px] md:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <select
                        className='md:w-[700px] border p-3 rounded-full mt-5 '
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                        <option disabled>Question text goes here?</option>
                        {dropdownOptions1.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        className='w-full md:w-[700px] border p-3 rounded-full mt-5'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <option disabled>Question text goes here?</option>
                        {dropdownOptions2.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        className='w-full md:w-[700px]  border p-3 rounded-full mt-5'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option disabled>Question text goes here?</option>
                        {dropdownOptions3.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        className='w-full md:w-[700px]  border p-3  rounded-full mt-5'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                        <option disabled>Question text goes here?</option>
                        {dropdownOptions4.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className='flex flex-col justify-start mt-20'>
                        <h1 className='text-2xl md:text-4xl font-semibold float-start text-[#020D3A] '>
                            Still have a question?
                        </h1><br />
                        <button
                            type="button" // Make this button not submit the form
                            onClick={handleContactClick} // Call the custom handler
                            className="w-fit py-3 px-8 m-2 cursor-pointer bg-[#020D3A] text-white rounded-full"
                        >
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
