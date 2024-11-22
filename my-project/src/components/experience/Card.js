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
      <div className="w-full h-full absolute rounded-3xl overflow-hidden bg-beige p-6 backface-hidden flex flex-col gap-4 justify-center">
          <img src={url} alt={title} />
          <h4>{title}</h4>
          <h5>{date}</h5>
          <Button 
              text={"Learn More"} 
              clickHandler={handleFlip} 
              iconRight={forwardArrow}
          />
      </div>
          
      {/* Back Side */}
      <div className="absolute rotate-y-180 w-full h-full bg-beige rounded-3xl overflow-hidden p-6 space-y-5 backface-hidden flex flex-col justify-center">
          <h3 className="text-3xl">// ROLE OVERVIEW</h3>
          <p className="text-lg">{back}</p>
          <Button 
              text={"Back"} 
              clickHandler={handleFlip} 
              iconRight={backArrow}
          />
      </div>
    </div>
  </div>
  )
}
