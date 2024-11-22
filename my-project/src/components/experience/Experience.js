import Card from './Card'
import Data from './Data'

export default function Experience() {
    return (
        <div className="flex flex-col items-center p-20">
            <h2>Experience</h2>
            <p className="mb-8">Places I have worked over the years to gain soft skills and technical skills</p>
            <Card 
                title={Data[0].title} 
                url={Data[0].url} 
                date={Data[0].date}
                back={Data[0].back}
                />
        </div>
    )
}