function AboutMe() {
    return (
        <>
            <section className="border bg-white sm:mx-12 mx-2 solid-shadow" id="about-me">

                <div className="flex lg:flex-row flex-col justify-between gap-12 p-12 ">
                    <div className="basis-1/2 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col items-start">
                                <h4 className="text-6xl uppercase text-center">
                                    About ME.
                                </h4>
                                <p className="mt-6 font-medium text-gray-400">
                                    #GrowthHacker #ProductEngineer <br /> #Fullstack #Devops
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="basis-1/2">
                        <p className="font-light text-justify text-lg">
                            I am a software developer with extensive knowledge of modern frameworks, enabling me to build robust and highly scalable industry-ready applications. My expertise lies in developing software solutions that meet the highest standards of quality and performance. With a keen eye for detail and a deep understanding of cutting-edge technologies, I consistently deliver innovative and efficient solutions that exceed client expectations. My proficiency in various programming languages and frameworks allows me to tackle complex challenges and ensure the seamless integration of software components.
                        </p>
                        <p className="font-light text-justify text-lg mt-6">
                            My expertise extends beyond software development and product engineering to encompass software deployment and automation. I have an in-depth understanding of the intricacies involved in deploying software and have honed my skills in automating these processes. By leveraging various tools and techniques, I streamline workflows, improve efficiency, and minimize errors in the deployment process. Additionally, I have a robust knowledge of creating cloud infrastructure, allowing me to design scalable and resilient systems that harness the power of cloud computing. With my strong grasp of both development and operations, I ensure seamless software delivery and enhance the overall performance and reliability of applications.
                        </p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutMe