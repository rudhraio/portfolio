import NavMenu from "../components/layout/nav-menu";
import AboutMe from "../components/sections/about-me";
import HeroSection from "../components/sections/hero-section";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import ContactMe from "../components/sections/contact-me";

function Home() {
    return (
        <>

            <section className="pattern"></section>
            <NavMenu />
            <main className="flex flex-col pt-24 sm:px-12 px-6 gap-y-6">
                <HeroSection />
                <AboutMe />
                <Skills />
                <Projects />
                <ContactMe />
                
            </main>
            <section className="min-h-[36rem]"></section>

        </>
    )
}

export default Home;