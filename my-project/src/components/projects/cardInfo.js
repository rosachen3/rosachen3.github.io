import Tenzies from "../../assets/projects/Tenzies.png"
import portfolioPreview from '../../assets/projects/portfolioPreview.png'

const images = [
    {
        id: 1,
        title: "Portfolio Website",
        techStack: ["ReactJS", "HTML", "CSS", "JavaScript"],
        paragraph: "This website right here! I aim to showcase my skills through my portfolio.",
        imgUrl: portfolioPreview,
        gitRepo: "https://github.com/rosachen3/rosachen3.github.io"
    },
    {
        id: 2,
        title: "Tenzies",
        techStack: ["ReactJS", "HTML", "CSS", "JavaScript"],
        paragraph: "A rolling dice game with the objective to roll the same number on all 10 dice.",
        imgUrl: Tenzies,
        previewUrl: "https://rosachen3-tenzies.netlify.app/",
        gitRepo: "https://github.com/rosachen3/Tenzies"
    }
]

export default images