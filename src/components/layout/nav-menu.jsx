import { createRef, useState } from "react";

function NavMenu() {
    // dropdown props
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="py-6 bg-white fixed min-w-full">
                <div className="sm:px-12 px-6 flex items-center min-h-min">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div>
                            <h5 className="text-3xl font-bold cursor-pointer">
                                Rudhra
                            </h5>
                        </div>
                        <div>
                            <div className="sm:flex flex-row gap-x-12 md:gap-x-24 hidden">
                                <a href="#" className="text-xl">Home</a>
                                <a href="#about-me" className="text-xl">About</a>
                                <a href="#skills" className="text-xl">Skills</a>
                                <a href="#work" className="text-xl">Work</a>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-x-6">
                                <a href="https://github.com/rudhraio" target="_blank">
                                    <img src="src/assets/images/github.svg" alt="hero-section" />
                                </a>
                                <a href="https://www.linkedin.com/in/rudhra-kuruvella-9576101b9" target="_blank">
                                    <img src="src/assets/images/linkedin.svg" alt="hero-section" />
                                </a>
                                <div className="relative inline-block sm:hidden text-left">
                                    <button
                                        onClick={toggleDropdown}
                                        type="button"
                                        id="dropdown-menu-button"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                    >
                                        <img src="src/assets/images/menu.svg" alt="hero-section" className="w-6 h-6" />
                                    </button>

                                    {isOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="dropdown-menu-button"
                                            >
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Home
                                                </a>
                                                <a
                                                    href="#about-me"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    About
                                                </a>
                                                <a
                                                    href="#skills"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Skills
                                                </a>
                                                <a
                                                    href="#work"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Work
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </nav>
        </>
    )
}
export default NavMenu;