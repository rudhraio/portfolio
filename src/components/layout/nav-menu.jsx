function NavMenu() {
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
                                <a href="#" className="text-xl">About</a>
                                <a href="#" className="text-xl">Skills</a>
                                <a href="#" className="text-xl">Work</a>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-x-6">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                    </svg>
                                </a>
                                <a href="#" className="sm:hidden block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>

                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </nav>
        </>
    )
}
export default NavMenu;