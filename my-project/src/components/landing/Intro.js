import Button from "../Button.js"
import girlSplash from "../../assets/girl-with-hand-on-face.png"
import ScrollDown from "../../assets/icons/ScrollDown.png"
import Download from "../../assets/icons/Download.png"

export default function Intro() {
    return (
        <div className="my-16 flex p-20">
            
            <div className="w-3/5">
                <div>
                    <Button text="👋 Welcome to my Portfolio" bgColour="bg-darkPeach" borderColour="border-transparent" />
                    <h1 className="my-10">I'm Rosa, <br/> An Aspiring Full-<br/>Stack Developer</h1>
                </div>
                
                <div className="flex gap-4">
                    <Button 
                        text="About Me" 
                        bgColour="bg-mahogany" 
                        padding="medium" 
                        borderColour="border-transparent" 
                        textColour="text-white"
                        iconRight={ScrollDown}
                    />
                        
                    <Button 
                        text="Resume"
                        padding="medium"
                        iconRight={Download}
                        />
                </div>
            </div>
            <img src={girlSplash} className="size-2/5 ml-auto"/>

        </div>
    )
}