import Card from './Card'
import Data from './Data'

export default function Experience() {
    return (
        <div className="flex flex-col items-center p-20">
            <h2>Experience</h2>
            <p className="mb-8">Places I have worked over the years to gain soft skills and technical skills</p>
            
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