import cardInfo from './cardInfo'

export default function Card() {
    return (
        <div>
            {   
                cardInfo.map( (project, index) => (
                    <div className="bg-beige flex items-center mb-16 rounded-2xl px-24 h-80 gap-8">
                        <div>
                            <h3>{project.title}</h3>
                            
                            {/* Tech Stack Tags */}
                            <div className="flex gap-4">
                            {   
                                project.techStack.map((tech, idx) => (
                                    <div className="bg-lightBrown inline p-2 rounded-xl text-white font-normal my-5"> {tech} </div>
                                ))
                            }
                            </div>

                            <p>{project.paragraph}</p>  
                        </div>
                        <img src={project.url} className="h-full"/>  
                    </div>
                ))
            }
        </div>
    )
}