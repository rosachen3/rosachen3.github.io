import Button from '../../components/Button'
import girlWave from '../../assets/girl-wave-bye.png'

export default function Conclusion() {
    return(
        <div className="bg-gradientOrange flex flex-col text-center items-center p-10 md:text-left md:flex-row lg:p-20">
            <div className="flex flex-col gap-5 mb-5 items-center lg:gap-14 lg:items-start">
                <h1 className="font-semibold leading-relaxed text-4xl md:text-4xl  lg:text-7xl lg:leading-snug">That's the end of my web page. Thanks for reading to the end!</h1>
                <a href="mailto:rosa.chen1@outlook.com">
                    <Button 
                        text="Contact Me" 
                        textColour='text-slate' 
                        borderColour='border-slate'/>
                </a>
            </div>
            <img src={girlWave} className="flex self-center w-3/4 sm:w-1/2 md:w-1/3"/>
        </div>
    )
}