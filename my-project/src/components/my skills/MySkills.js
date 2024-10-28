import Button from "../Button.js"
import logos from "../../assets/techstack-icons"

export default function MySkills() {

    const { c, css, html, java, js, python, reactjs } = logos

    return (
        <div className="flex flex-col p-14 items-center p-20">
            <h2 className="mr-auto">My Skills</h2>
            <p className="mr-auto mb-8">Here are some of the skills I am working on</p>
            {/*Tech Stack */}
            
            <div className="flex flex-col gap-8 bg-white p-12 rounded-2xl items-center w-3/4">
                <div className="flex gap-6">
                    {
                        Object.entries(logos).slice(0,4).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
                <div className="flex gap-6">
                    {
                        Object.entries(logos).slice(4,7).map(logo => {
                            const [name, icon] = logo
                            return <Button text={name} iconLeft={icon}/>
                        })
                    }
                </div>
            </div>
            

            <div className="bg-white">
                
            </div>
        </div>
    )
}