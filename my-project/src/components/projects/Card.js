import cardInfo from './cardInfo'

export default function Card() {
    return (
        <div>
            {   
                cardInfo.map( (project, index) => (
                    <div className="bg-beige flex items-center mb-16 rounded-2xl px-20 h-96 gap-8">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.paragraph}</p>  
                            {/* Tech Stack Tags */}
                            <div className="flex gap-4">
                            {   
                                project.techStack.map((tech, idx) => (
                                    <div className="bg-lightBrown inline p-2 rounded-xl text-white font-normal my-5"> {tech} </div>
                                ))
                            }
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-8 my-4">
                                <a href="#" className="text-2xl text-blue font-semibold">Live Preview</a>
                                <a href ="#" className="text-2xl text-blue font-semibold">Github Repository</a>
                            </div>
                        </div>
                        <img src={project.url} className="h-full"/>  
                    </div>
                ))
            }

        </div>
    )
}