import logo from "../assets/Logo.png"
import github from "../assets/icons/Github.png"
import linkedin from "../assets/icons/LinkedIn.png"
import outlook from "../assets/icons/Outlook.png"
import Icons from "../components/landing/Icons"
import { Link } from "react-scroll"

export default function Footer() {
    return(
        <div className="pt-4 flex flex-col items-center gap-4 pt-12">
            
            <img src={logo} className="mx-auto w-1/3 md:w-1/6 md:m-0"/>
            <div className="flex flex-col items-center text-sm md:flex-row md:justify-between lg:text-lg">
                <ul className="flex font-semibold gap-4 lg:gap-6">
                    <li><button>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={600}>Home</Link>
                    </button></li>
                    <li><button>
                        <Link to="aboutme" spy={true} smooth={true} offset={0} duration={600}>About</Link>
                    </button></li>
                    <li><button>
                        <Link to="myskills" spy={true} smooth={true} offset={0} duration={600}>Skills</Link>
                    </button></li>
                    <li><button>
                        <Link to="projects" spy={true} smooth={true} offset={0} duration={600}>Projects</Link>
                    </button></li>
                    <li><button>
                        <Link to="experience" spy={true} smooth={true} offset={0} duration={600}>Experience</Link>
                    </button></li>           
                </ul>
            </div>
            <div className="flex gap-4 pb-8 lg:gap-6">
                <a href="https://github.com/rosachen3" target="_blank"><Icons src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/rosachen3/" target="_blank"><Icons src={linkedin} alt="linkedin"/></a>
                <a href="mailto:rosa.chen1@outlook.com"><Icons src={outlook} alt="outlook"/></a>
                </div>
            <div className="w-full h-5 bg-mahogany"></div>

        </div>
    )
}