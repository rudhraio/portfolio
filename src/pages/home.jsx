import NavMenu from "../components/layout/nav-menu";

function Home() {
    return (
        <>
            <section className="pattern"></section>
            <NavMenu />
            <section className="min-h-screen flex justify-center items-center">
                <h3 className="text-4xl">
                    Welcome there 👋
                </h3>
            </section>
        </>
    )
}

export default Home;