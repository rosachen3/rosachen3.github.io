import logo from "../assets/Logo.png"
import github from "../assets/icons/Github.png"
import linkedin from "../assets/icons/LinkedIn.png"
import outlook from "../assets/icons/Outlook.png"
import Icons from "../components/landing/Icons"

export default function Footer() {
    return(
        <div className="pt-4 flex flex-col items-center gap-4 pt-12">
            
            <img src={logo} className="mx-auto w-1/3 md:w-1/6 md:m-0"/>
            <div className="flex flex-col items-center text-sm md:flex-row md:justify-between lg:text-lg">
                <ul className="flex font-semibold gap-4 lg:gap-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>             
                </ul>
            </div>
            <div className="flex gap-4 pb-8 lg:gap-6">
                    <Icons src={github} alt="github"/>
                    <Icons src={linkedin} alt="linkedin"/>
                    <Icons src={outlook} alt="outlook"/>
                </div>
            <div className="w-full h-5 bg-mahogany"></div>

        </div>
    )
}