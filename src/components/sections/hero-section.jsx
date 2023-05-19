function HeroSection() {
    return (<>
        <section className="flex w-full">
            <div className="flex flex-col gap-12 md:flex-row md:justify-around justify-center items-center w-full lg:py-12 py-6">
                <div className="flex flex-col">
                    <h3 className="lg:text-7xl text-5xl">
                        Hey There 👋
                    </h3>
                    <h1 className="lg:text-9xl text-7xl mt-6">
                        I'm Rudhra
                    </h1>
                    <p className="mt-6 lg:text-xl text-md max-w-xl text-gray-400">
                        A passionate and skilled individual in the field of technology, I possess a deep love for all things tech-related and a strong desire to stay at the forefront of technological advancements
                    </p>
                </div>
                <div className="">
                    <img src="https://picsum.photos/seed/picsum/500/600" alt="hero-section" className="rounded-md shadow-lg" />
                </div>
            </div>
        </section>
    </>)
}

export default HeroSection