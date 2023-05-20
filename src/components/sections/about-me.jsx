function AboutMe() {
    return (
        <>
            <section className="border bg-white sm:mx-12 mx-2 solid-shadow">

                <div className="flex lg:flex-row flex-col justify-between gap-12 p-12 ">
                    <div className="basis-1/2 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col items-start">
                                <h4 className="text-6xl uppercase text-center">
                                    About ME
                                </h4>
                                <p className="mt-6 font-medium text-gray-400">
                                    #GrowthHacker #ProductEngineer <br /> #Fullstack #Devops
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="basis-1/2">
                        <p className="font-light text-justify text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh eu massa dictum semper eget ac neque. Nam tellus quam, malesuada ac nibh dignissim, sollicitudin vestibulum libero.
                            <br />
                            <br /> Aliquam erat volutpat. Curabitur molestie, dui ut varius porttitor, eros lectus gravida justo, sit amet faucibus dolor erat a tellus. Aliquam erat volutpat. Nulla laoreet, libero a elementum dapibus, orci quam lacinia nisl, in mollis lacus ligula non enim.
                            <br /><br />
                            Nunc efficitur mauris et justo varius egestas. Sed posuere consectetur ex, ac volutpat eros interdum ac. Aliquam consectetur interdum sapien ut vehicula. Pellentesque efficitur nunc justo, a laoreet risus tincidunt nec. Cras sit amet nibh ut magna laoreet condimentum sit amet ac mi.
                        </p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutMe