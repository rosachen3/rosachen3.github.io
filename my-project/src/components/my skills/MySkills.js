import Button from "../Button.js"
import logos from "../../assets/techstack-icons"
import tools from "../../assets/tools-icons"

export default function MySkills() {

    const { C, CSS, HTML, Java, JS, Python, Reactjs } = logos
    const { canva, figma, git, github, intellij, jupyter, matlab, vscode } = tools

    return (
        <div className="flex flex-col p-10 items-center lg:p-20">
            <h2 className="mr-auto text-2xl font-medium lg:text-4xl">My Skills</h2>
            <p className="mr-auto my-8 md:text-xl">Here are some of the skills I am working on</p>
            {/*Tech Stack */}
            
            <div className="flex flex-col flex-wrap w-full bg-white p-6 rounded-2xl items-center lg:w-3/4 lg:p-12">
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    {
                        Object.entries(logos).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
            </div>
            
            {/*Tools */}
            <p className="mr-auto my-8 md:text-xl">And these are some of the tools I have been working with:</p>
            <div className="flex flex-col flex-wrap w-full bg-white p-6 rounded-2xl items-center lg:w-3/4 lg:p-12">
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    {
                        Object.entries(tools).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}