import Button from "../Button.js"
import logos from "../../assets/techstack-icons"
import tools from "../../assets/tools-icons"

export default function MySkills() {

    const { c, css, html, java, js, python, reactjs } = logos
    const { canva, figma, git, github, intellij, jupyter, matlab, vscode } = tools

    return (
        <div className="flex flex-col p-14 items-center p-20">
            <h2 className="mr-auto">My Skills</h2>
            <p className="mr-auto my-8">Here are some of the skills I am working on</p>
            {/*Tech Stack */}
            
            <div className="flex flex-col gap-8 bg-white p-12 rounded-2xl items-center w-3/4">
                <div className="flex gap-6">
                    {/*Row 1*/}
                    {
                        Object.entries(logos).slice(0,4).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
                <div className="flex gap-6">
                    {/*Row 2*/}
                    {
                        Object.entries(logos).slice(4,7).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
            </div>
            
            {/*Tools */}
            <p className="mr-auto my-8">And these are some of the tools I have been working with:</p>
            <div className="flex flex-col gap-8 bg-white p-12 rounded-2xl items-center w-3/4 mt-4">
                <div className="flex gap-6"> 
                    {   
                        Object.entries(tools).slice(0,4).map(tool => {
                            const [name, icon] = tool
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
                <div className="flex gap-6">
                    {
                        Object.entries(tools).slice(4,8).map(tool => {
                            const [name, icon] = tool
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}