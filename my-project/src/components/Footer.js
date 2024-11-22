import logo from "../assets/Logo.png"
import github from "../assets/icons/Github.png"
import linkedin from "../assets/icons/LinkedIn.png"
import outlook from "../assets/icons/Outlook.png"

export default function Footer() {
    return(
        <div className="pt-8 flex flex-col items-center gap-4">
            
            <img src={logo} className="w-80"/>
            <div className="flex justify-between items-center">
                <ul className="flex font-semibold gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>             
                </ul>
            </div>
            <div className="flex gap-8 mb-8">
                <img src={github} alt="github" className="w-12 h-12"/>
                <img src={linkedin} alt="linkedin" className="w-12 h-12"/>
                <img src={outlook} alt="outlook" className="w-12 h-12"/>
            </div>
            <div className="w-full h-5 bg-mahogany"></div>

        </div>
    )
}