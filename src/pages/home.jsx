import NavMenu from "../components/layout/nav-menu";
import HeroSection from "../components/sections/hero-section";

function Home() {
    return (
        <>

            <section className="pattern"></section>
            <NavMenu />
            <main className="flex pt-24 sm:px-12 px-6">
                <HeroSection />
                
            </main>

        </>
    )
}

export default Home;