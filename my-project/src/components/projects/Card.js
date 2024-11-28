import cardInfo from './cardInfo'

export default function Card() {
    return (
        <div>
            {   
                cardInfo.map( (project, index) => (
                    <div className="bg-beige flex flex-col items-center justify-between mb-16 lg:flex-row rounded-2xl px-8 lg:px-20 lg:h-96 lg:gap-8" >
                        <div className="flex flex-col pt-10 lg:pt-0">
                            <h3 className="text-xl text-center font-semibold lg:text-left lg:text-2xl">{project.title}</h3>
                            <p className="my-4 lg:text-xl text-center lg:text-left">{project.paragraph}</p>  
                            {/* Tech Stack Tags */}
                            <div className="flex justify-center gap-2 lg:mb-0 lg:justify-start lg:gap-4">
                            {   
                                project.techStack.map((tech, idx) => (
                                    <div className="bg-lightBrown inline p-2 text-xs rounded-xl text-white font-medium md:text-base lg:text-lg"> {tech} </div>
                                ))
                            }
                            </div>
                            
                            {/* Links */}
                            <div className="flex justify-center my-6 gap-3 lg:justify-start lg:gap-8 lg:my-8">
                                {project.previewUrl ? 
                                    <a href={project.previewUrl} target="_blank" className="lg:text-xl text-blue font-semibold">Live Preview</a> : ""
                                }
                                <a href ={project.gitRepo} target="_blank" className="lg:text-xl text-blue font-semibold">Github Repository</a>
                            </div>
                        </div>
                        <div className="flex flex-shrink-0 justify-center lg:w-1/2 h-full">
                            <img src={project.imgUrl} className="h-auto" />
                        </div> 
                    </div>
                ))
            }

        </div>
    )
}