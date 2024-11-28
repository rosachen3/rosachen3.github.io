import Card from './Card'
import Data from './Data'

export default function Experience() {
    return (
        <div id="experience" className="flex flex-col items-center p-10 lg:p-20">
            <h2 className="text-2xl font-medium lg:text-4xl">Experience</h2>
            <p className="my-8 text-center lg:text-xl">Places I have worked over the years to gain soft skills and technical skills</p>
            
            <div className="flex flex-wrap justify-center gap-8">
                {Data.map((experience) => {
                    return (
                        <Card 
                            title={experience.title} 
                            url={experience.url} 
                            date={experience.date}
                            back={experience.back}
                            />
                    )
                })}

            </div>
        </div>
    )
}