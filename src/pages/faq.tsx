import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className={`border border-gray-200  shadow-sm ${isOpen ? "rounded-xl" : "rounded-full"}`}>
            <button
                className="md:w-[695px]  px-4 py-3 text-left bg-white focus:outline-none  flex justify-between items-center rounded-full"
                onClick={toggleAccordion}
            >
                <span className="font-medium text-gray-800">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 " />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </button>
            {isOpen && (
                <div className="px-4 py-3  border-gray-200">
                    <p className="text-gray-600">{answer}</p>
                </div>
            )}
        </div>
    );
};


function Faq() {
    const [name, setName] = useState<string>('Question text goes here?');
    const [email, setEmail] = useState<string>('Question text goes here?');
    const [subject, setSubject] = useState<string>('Question text goes here?');
    const [message, setMessage] = useState<string>('Question text goes here?');
    const [isAgreed, setIsAgreed] = useState<boolean>(false);
    const [selectedComponent, setSelectedComponent] = useState('brand');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        

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

    const faqItems = [
        {
            question: 'Question text goes here?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            question: 'Question text goes here?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            question: 'Question text goes here?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            question: 'Question text goes here?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            question: 'Question text goes here?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        }
    ]
    return (
        <>
            <Navbar selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent} />

            <div className='md:flex justify-center items-center flex-col md:min-h-screen p-8 md:pt-32'>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    <h1 className='text-3xl md:text-5xl font-semibold md:text-start text-center text-[#113E53] mb-5'>FAQs</h1>
                    <p className='text-xl md:w-[700px] md:text-start text-center mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <div className="space-y-4 md:w-[700px]">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
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
