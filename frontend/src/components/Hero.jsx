import Navbar from "./Navbar"

const Hero = () => {

    return (
        <>
            <section className="h-screen bg-blue-400 relative clip-path-heroPoly">
                <Navbar />
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
                        <span className="">laborum doloribus</span>delectus
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded">Get started</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded ">Learn more</button>
                    </div>
                </div>
                <div className="curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="curve-fill"></path>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Hero

