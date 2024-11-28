import Button from "../Button.js"
import girlSplash from "../../assets/girl-with-hand-on-face.png"
import ScrollDown from "../../assets/icons/ScrollDown.png"
import Download from "../../assets/icons/Download.png"
import Resume from "../../assets/RosaChen_Resume.pdf"
import { Link } from "react-scroll"

export default function Intro() {
    return (
        <div id="home" className="flex flex-col text-center p-10 md:text-left md:flex-row lg:p-20">
            
            <div className="md:w-3/5">
                <div className="flex flex-col items-center md:block">
                    <Button text="👋 Welcome to my Portfolio" bgColour="bg-darkPeach" borderColour="border-transparent" />
                    <h1 className="font-semibold leading-normal text-4xl mt-6 md:my-10 s md:text-4xl lg:text-7xl lg:leading-snug">I'm Rosa, <br/> An Aspiring Full-<br/>Stack Developer</h1>
                </div>
                
                <div className="flex my-4 gap-4 justify-center md:justify-start">
                    <Link to="aboutme" spy={true} smooth={true} offset={0} duration={600}>
                        <Button 
                            text="About Me" 
                            bgColour="bg-mahogany"  
                            borderColour="border-transparent" 
                            textColour="text-white"
                            iconRight={ScrollDown}
                        />
                    </Link>
                        
                    <a href={Resume} download="Resume" target="_blank">
                        <Button 
                            text="Resume"
                            iconRight={Download}
                        />
                    </a>
                </div>
            </div>
            <img src={girlSplash} className="flex self-center w-3/4 sm:w-1/2 md:w-1/3"/>

        </div>
    )
}