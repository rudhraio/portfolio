function FooterSection() {
    return (<>
        <section>
            <div className="flex justify-between items-center  p-6 mt-12 md:px-12 px-2 bg-white border-t-2">
                <p className="text-gray-400 uppercase text-xs">
                    Last Updated: <span className="text-black normal-case	">May 21st, 2023</span>
                </p>
                <p>
                    
                </p>
                <div className="flex flex-row gap-6">
                    <a href="https://github.com/rudhraio" target="_blank">
                        <img src="src/assets/images/github.svg" alt="hero-section" />
                    </a>
                    <a href="https://www.linkedin.com/in/rudhra-kuruvella-9576101b9" target="_blank">
                        <img src="src/assets/images/linkedin.svg" alt="hero-section" />
                    </a>
                </div>
            </div>
        </section>
    </>)
}

export default FooterSection;