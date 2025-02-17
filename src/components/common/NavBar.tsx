import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { images } from '../../constants/images';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false); // State for mobile Features dropdown
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleFeatures = () => {
        setIsFeaturesOpen(!isFeaturesOpen);
    };

    const toggleMobileFeatures = () => {
        setIsMobileFeaturesOpen(!isMobileFeaturesOpen); // Toggle mobile Features dropdown
    };

    // Close mobile menu and dropdown when a dropdown item is clicked
    const handleMobileDropdownItemClick = () => {
        setIsMobileFeaturesOpen(false); // Close dropdown
        setIsMenuOpen(false); // Close mobile menu
    };

    // For About Us and Contact Us: Text color changes to #CEEF0A when active
    const isTextActive = (path: string) => {
        return location.pathname === path ? 'text-[#CEEF0A]' : 'text-white';
    };

    // For Features dropdown items: Background changes to #CEEF0A1A when active
    const isBgActive = (path: string) => {
        return location.pathname === path ? 'bg-[#CEEF0A1A]' : '';
    };

    // For mobile nav links: Add left border and border color when active
    const isMobileActive = (path: string) => {
        return location.pathname === path ? 'border-l-2 border-[#CEEF0A] bg-[#CEEF0A1A]' : '';
    };

    return (
        <div className="w-full justify-center items-center pt-12 bg-[#000000]">
            <div className="flex flex-row justify-between w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto">
                <Link to="/">
                    <img
                        src={images.logo.secondary}
                        alt="Monita Logo"
                        className="xl:w-[200px] w-[140px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] px-5 xl:flex lg:flex lg:flex-row xl:flex-row hidden justify-between items-center w-[354px] rounded-full">
                    <div className="relative">
                        <button
                            onClick={toggleFeatures}
                            className={`font-poppinsMedium hover:stroke-[#CFEF0C] group text-[15px] leading-[19px] font-medium focus:outline-none flex items-center hover:text-[#CFEF0C] ${isFeaturesOpen ? 'text-[#CFEF0C]' : 'text-white'}`}
                        >
                            Features
                            <svg
                                className={`w-4 h-4 ml-2 group-hover:stroke-[#CFEF0C] transition-transform ${isFeaturesOpen ? 'transform rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke={isFeaturesOpen ? '#CFEF0C' : 'white'}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isFeaturesOpen && (
                            <div className="absolute mt-5 w-[175px] bg-[#0E0E0E] border gap-1.5 flex flex-col border-[#1A1A1A] rounded-lg shadow-lg p-3">
                                <Link
                                    to="/receive-money"
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium rounded-sm text-nowrap ${isBgActive('/receive-money')}`}
                                    onClick={toggleFeatures}
                                >
                                    Receive Money
                                </Link>
                                <Link
                                    to="/one-card"
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium rounded-sm text-nowrap ${isBgActive('/one-card')}`}
                                    onClick={toggleFeatures}
                                >
                                    One Card
                                </Link>
                                <Link
                                    to="/send-money"
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium rounded-sm text-nowrap ${isBgActive('/send-money')}`}
                                    onClick={toggleFeatures}
                                >
                                    Send Money
                                </Link>
                                <Link
                                    to="/bill-payment"
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium rounded-sm text-nowrap ${isBgActive('/bill-payment')}`}
                                    onClick={toggleFeatures}
                                >
                                    Bill Payment
                                </Link>
                                <Link
                                    to="/gift-cards"
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium rounded-sm text-nowrap ${isBgActive('/gift-cards')}`}
                                    onClick={toggleFeatures}
                                >
                                    Gift Cards
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/about-us"
                        className={`font-poppinsMedium hover:text-[#CFEF0C] text-[15px] leading-[19px] font-medium ${isTextActive('/about-us')}`}
                        onClick={() => setIsFeaturesOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact-us"
                        className={`font-poppinsMedium hover:text-[#CFEF0C] text-[15px] leading-[19px] font-medium ${isTextActive('/contact-us')}`}
                        onClick={() => setIsFeaturesOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden xl:hidden flex">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-gray-100/10 bg-opacity-10 z-50 lg:hidden xl:hidden"
                    style={{
                        background: '#00000099',
                    }}
                >
                    <div className="fixed inset-y-0 right-0 w-[70%] bg-[#000] pt-12">
                        {/* Menu Header with Logo and Close Icon */}
                        <div className="flex justify-between items-center mb-8 px-6">
                            <img
                                src={images.logo.secondary}
                                alt="Monita Logo"
                                className="w-[120px]"
                            />
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col space-y-6">
                            <Link
                                to="/"
                                className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/')}`}
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                Home
                            </Link>
                            <div className="relative">
                                <button
                                    onClick={toggleMobileFeatures} // Only toggle dropdown, don't close menu
                                    className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium w-full text-left ${isMobileActive('/features')}`}
                                >
                                    Features
                                    <svg
                                        className={`w-4 h-4 ml-2 transition-transform inline-block ${isMobileFeaturesOpen ? 'transform rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {isMobileFeaturesOpen && (
                                    <div className="pl-6">
                                        <Link
                                            to="/receive-money"
                                            className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/receive-money')}`}
                                            onClick={handleMobileDropdownItemClick} // Close dropdown and menu
                                        >
                                            Receive Money
                                        </Link>
                                        <Link
                                            to="/one-card"
                                            className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/one-card')}`}
                                            onClick={handleMobileDropdownItemClick} // Close dropdown and menu
                                        >
                                            One Card
                                        </Link>
                                        <Link
                                            to="/send-money"
                                            className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/send-money')}`}
                                            onClick={handleMobileDropdownItemClick} // Close dropdown and menu
                                        >
                                            Send Money
                                        </Link>
                                        <Link
                                            to="/bill-payment"
                                            className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/bill-payment')}`}
                                            onClick={handleMobileDropdownItemClick} // Close dropdown and menu
                                        >
                                            Bill Payment
                                        </Link>
                                        <Link
                                            to="/gift-cards"
                                            className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/gift-cards')}`}
                                            onClick={handleMobileDropdownItemClick} // Close dropdown and menu
                                        >
                                            Gift Cards
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link
                                to="/about-us"
                                className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/about-us')}`}
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact-us"
                                className={`block px-6 py-3 text-sm text-white hover:bg-[#1A1A1A] font-poppinsMedium ${isMobileActive('/contact-us')}`}
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;