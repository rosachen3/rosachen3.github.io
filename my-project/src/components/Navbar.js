import Icons from "./landing/Icons.js"
import SmallButton from "./SmallButton.js"

import logo from "../assets/Logo.png"
import github from "../assets/icons/Github.png"
import linkedin from "../assets/icons/LinkedIn.png"
import outlook from "../assets/icons/Outlook.png"

export default function Navbar() {
    return (
        <div>
            
            <img src={logo} className="w-1/4"/>
            <div className="flex mt-6 justify-between items-center">
                <ul className="flex font-semibold gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>             
                </ul>
                <div className="flex gap-8">
                    <Icons src={github} alt="github"/>
                    <Icons src={linkedin} alt="linkedin"/>
                    <Icons src={outlook} alt="outlook"/>
                    <SmallButton text="Let's Connect"/>
                </div>
            </div>

        </div>
    )
}