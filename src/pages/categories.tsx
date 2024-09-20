import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

function CategoriesComponent() {
    const Categories = [
        "Digital Marketing & Business", "DIY Home Decor", "Lifestyle & Wellness", "Fashion & Style", "Home & Living",
        "Health & Beauty", "Arts & Design", "Travel & Exploration", "Parenting & Family", "Fitness & Wearables",
        "Anime & Manga", "Food & Beverage", "Gaming & Esports", "Entertainment & Culture", "Education & Learning",
        "Outdoor & Adventure", "Business & Entrepreneurship", "Technology & Innovation", "Finance & Investment", "Personal Finance & Investment"
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCategories = Categories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCategorySelect = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
        setDropdownVisible(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        <div className="flex items-center justify-center md:min-h-screen bg-white border border-black">
            <div className="absolute top-0 left-0 mt-4 ml-4">
                <Image src='/images/main_logo.png' alt="Logo" width={150} height={40} />
            </div>
            <div className='md:flex gap-4 p-3 md:p-0'>

                <div className="w-fit self-center max-w-md p-8 bg-white rounded-lg relative">
                    <div className="flex items-center space-x-4 mb-4 relative md:right-12">
                        <div>
                            <button className="text-lg relative bottom-7 hidden md:flex self-center" >
                                <Image src='/images/arrow_back_dark.png' className="hover:rotate-45 duration-100" alt="Back" width={40} height={40} />
                            </button>
                        </div>

                        <div>
                            <h1 className="text-5xl text-navy self-center">Select Categories</h1>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-3 rounded-full border border-gray-500 m-1 w-full focus:outline-none focus:ring-2"
                            value={searchTerm}
                            onChange={(e: any) => {
                                setSearchTerm(e.target.value);
                                setDropdownVisible(true);
                            }}
                            onFocus={() => setDropdownVisible(true)}
                        />

                        {dropdownVisible && (
                            <div ref={dropdownRef} className="relative">
                                <div className="absolute z-10 bg-white border border-gray-300 w-full rounded-lg mt-2 max-h-40 overflow-y-auto">
                                    {filteredCategories.map((category, index) => (
                                        <div
                                            key={index}
                                            className={`p-2 cursor-pointer hover:bg-gray-200 ${selectedCategories.includes(category) ? 'bg-white text-gray-300' : ''}`}
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            className="w-fit py-3 px-8 m-2 rounded-full focus:outline-none bg-[#020D3A] text-white"
                        >
                            Continue
                        </button>
                    </form>
                </div>

                <div className='flex gap-1 flex-wrap md:w-[500px] bg-gray-100 p-6 rounded-2xl'>
                    {Categories.map((category, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 w-fit h-fit border rounded-full ${selectedCategories.includes(category) ? 'border border-black text-black bg-white' : 'bg-white text-gray-300'}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
          
        </div>
       
        </>
    );
}

export default CategoriesComponent;
