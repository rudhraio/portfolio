function ContactMe() {
    return (
        <section className="mt-12 md:mx-12 mx-2" id="contact-me">
            <div>
                <div>
                    <h4 className="text-6xl uppercase">
                        GET IN TOUCH.
                    </h4>
                </div>
                <div className="p-6 flex lg:flex-row flex-col mt-6 gap-12 lg:gap-6 justify-around items-center bg-black bg-opacity-90">
                    <div className="flex flex-col gap-y-16">
                        <div>
                            <h5 className="text-5xl font-bold text-white">
                                Love to here <br />
                                from you ❤️
                            </h5>
                        </div>
                        <div className="mt-7 p-12 solid-shadow-white bg-white border">
                            <p className="text-xl mb-6">
                                Reach out to me at
                            </p>
                            <h3 className="font-semibold text-5xl">
                                hi@rudhra.io
                            </h3>

                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white mb-2">Name</label>
                                <input type="text" className="text-3xl p-3 py-4 border min-w-[32rem]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white mb-2">Email</label>
                                <input type="text" className="text-3xl p-3 py-4 border min-w-[32rem]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white mb-2">Message</label>
                                <textarea type="text" className="text-3xl p-3 py-4 border min-w-[32rem]" rows={5}></textarea>
                            </div>
                            <div className="float-left ms-auto">
                                <button className="bg-white py-4 px-6 font-bold text-base">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactMe;