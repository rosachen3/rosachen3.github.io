import Icons from "./landing/Icons.js"
import Button from "./Button.js"

import logo from "../assets/Logo.png"
import github from "../assets/icons/Github.png"
import linkedin from "../assets/icons/LinkedIn.png"
import outlook from "../assets/icons/Outlook.png"

export default function Navbar() {
    return (
        <div className="flex flex-col pt-10 px-10 text-center lg:pt-20 lg:px-20">
            
            <img src={logo} className="mx-auto w-1/2 md:w-1/3 md:m-0"/>
            <div className="flex flex-col items-center text-sm mt-6 md:flex-row md:justify-between lg:text-lg">
                <ul className="flex font-semibold gap-4 lg:gap-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>             
                </ul>
                <div className="flex gap-4 mt-4 lg:gap-6">
                    <Icons src={github} alt="github"/>
                    <Icons src={linkedin} alt="linkedin"/>
                    <Icons src={outlook} alt="outlook"/>
                    <Button text="Let's Connect"/>
                </div>
            </div>

        </div>
    )
}