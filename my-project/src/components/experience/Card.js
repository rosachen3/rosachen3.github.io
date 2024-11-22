import Button from '../Button'
import forwardArrow from '../../assets/experience-thumbnails/forwardArrow.png'
import backArrow from '../../assets/experience-thumbnails/backArrow.png'
import { useState } from 'react' 
import McMaster from '../../assets/experience-thumbnails/mcmaster.png'

export default function Card({title, url, date, back}) {    
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped((prev) => !prev)
    }

    return ( 
     
      <div className="w-[21rem] h-[29rem] bg-transparent rounded-3xl perspective-1000">
      <div 
          className={`relative w-full h-full preserve-3d duration-500 ${
              isFlipped ? 'rotate-y-180' : ''
          }`}
      >
          
      {/* Front Side */}
      <div className="w-full h-full absolute rounded-3xl overflow-hidden bg-beige p-10 backface-hidden flex flex-col gap-6 justify-center">
          <img src={url} alt={title} />
          <h4 className="h-14">{title}</h4>
          <h5>{date}</h5>
          <div className="mt-auto">
            <Button 
                text={"Learn More"} 
                clickHandler={handleFlip} 
                iconRight={forwardArrow}
            />
          </div>
      </div>
          
      {/* Back Side */}
      <div className="absolute rotate-y-180 w-full h-full bg-beige rounded-3xl p-10 backface-hidden flex flex-col justify-center gap-3">
          <h3 className="text-2xl">// ROLE OVERVIEW</h3>
          <p className="text-base">{back}</p>
          <div className="mt-auto">
            <Button 
                text={"Back"} 
                clickHandler={handleFlip} 
                iconRight={backArrow}
            />
          </div>
      </div>
    </div>
  </div>
  )
}
