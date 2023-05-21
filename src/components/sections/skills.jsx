function Skills() {

    const LANGUAGES = ['C', 'C++', 'C#', 'JAVA', 'PYTHON', 'PHP', 'JAVASCRIPT', 'TYPESCRIPT', 'LUA'];
    const BF = ['NODEJS', 'DJANGO', 'FLASK', 'FASTAPI', 'LARAVEL'];
    const FF = ['REACT', 'ANGULAR', 'NEXTJS', 'CODEIGNITER', 'LARAVEL'];
    const CLOUD = ['LINUX', 'DNS', 'DEPLOYMENTS', 'SCALING & LOAD BALANCING', 'CONTAINERIZATION', 'ORCHESTRATION', 'AUTOMATION', 'SERVERLESS', 'MONITORING'];
    const OTHER = ['UI/UX', 'CONTENT WRITING', 'DIGITAL MARKETING', 'SEO', 'DEBUGGING', 'OPTIMIZATION']

    return (<>

        <section className="mt-12 md:mx-12 mx-2" id="skills">
            <div>
                <div>
                    <h4 className="text-6xl uppercase">
                        Skills.
                    </h4>
                </div>
                <div className="flex flex-col mt-6 gap-6">
                    <div className="bg-white p-6 border">
                        <p className="text-xl font-medium">
                            Languages
                        </p>
                        <p className="mt-6 flex flex-row gap-6 flex-wrap">
                            {
                                LANGUAGES.map((item) => {
                                    return <span className="bg-slate-100 cursor-pointer px-3 py-1 text-sm font-semibold shadow-sm" key={item}>
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>
                    <div className="bg-white p-6 border">
                        <p className="text-xl font-medium">
                            Frontend Frameworks
                        </p>
                        <p className="mt-6 flex flex-row gap-6 flex-wrap">
                            {
                                FF.map((item) => {
                                    return <span className="bg-slate-100 cursor-pointer px-3 py-1 text-sm font-semibold shadow-sm" key={item}>
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>
                    <div className="bg-white p-6 border">
                        <p className="text-xl font-medium">
                            Backend Frameworks
                        </p>
                        <p className="mt-6 flex flex-row gap-6 flex-wrap">
                            {
                                BF.map((item) => {
                                    return <span className="bg-slate-100 cursor-pointer px-3 py-1 text-sm font-semibold shadow-sm" key={item}>
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>
                    <div className="bg-white p-6 border">
                        <p className="text-xl font-medium">
                            Cloud
                        </p>
                        <p className="mt-6 flex flex-row gap-6 flex-wrap">
                            {
                                CLOUD.map((item) => {
                                    return <span className="bg-slate-100 cursor-pointer px-3 py-1 text-sm font-semibold shadow-sm" key={item}>
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>
                    <div className="bg-white p-6 border">
                        <p className="text-xl font-medium">
                            Other
                        </p>
                        <p className="mt-6 flex flex-row gap-6 flex-wrap">
                            {
                                OTHER.map((item) => {
                                    return <span className="bg-slate-100 cursor-pointer px-3 py-1 text-sm font-semibold shadow-sm" key={item}>
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </>);
}

export default Skills;