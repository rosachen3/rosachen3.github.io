import Data from './Data'
import Button from '../Button'
import Arrow from '../../assets/experience-thumbnails/arrow.png'

export default function Card() {
    return (
        <div className="flex justify-center flex-wrap">
            {Data.map((experience) => (
                <div className="flex flex-col bg-beige p-7 m-7 w-1/4 rounded-2xl gap-4">
                    <div className="flex flex-col flex-grow gap-4">
                        <img src={experience.url} alt={experience.title} />
                        <h4 className="h-1/6">{experience.title}</h4>
                        <h5>{experience.date}</h5>
                    </div>
                    <div className="mt-auto">
                        <Button text="Learn More" iconRight={Arrow}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
