import photo from "../robot-svgrepo-com.svg"
export default function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 flex-col md:flex-row items-center">
                <div className="lg:flex-grow ld:pr-24 md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I`m Valentyna. <br className="hidden lg:inline-block"/>
                        I love to build amazing apps!
                    </h1>
                    <p className="mb-8">
                    Creative programmer with three years of experience and extensive knowledge in  creating front-end applications. Aspiring to  combine lore with strong technical skills to excel as a Front-End Developer.
                    </p>
                    <div className="flex justify-center sm:flex-nowrap">
                        <a href="#contact" className="w-fit text-lg py-2 px-6 bg-fuchsia-900 text-white border-0 hover:bg-fuchsia-600  rounded">Work with Me </a>
                        <a href="#projects" className="w-fit text-lg ml-4 py-2 px-6 bg-fuchsia-900 text-white border-0 hover:bg-fuchsia-600  rounded">My Works</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
                    <img className="object-cover object-center" src={photo}
                    alt="me"></img>
                </div>
            </div>
        </section>
    )
}