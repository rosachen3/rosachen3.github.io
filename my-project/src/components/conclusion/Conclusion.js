import Button from '../../components/Button'
import girlWave from '../../assets/girl-wave-bye.png'

export default function Conclusion() {
    return(
        <div className="bg-gradientOrange p-20 flex items-center">
            <div className="flex flex-col gap-14">
                <h1>That's the end of my web page. Thanks for reading to the end!</h1>
                <Button 
                    text="Contact Me" 
                    padding="medium" 
                    textColour='text-slate' 
                    borderColour='border-slate'/>
            </div>
            <img src={girlWave} className="size-2/5"/>
        </div>
    )
}