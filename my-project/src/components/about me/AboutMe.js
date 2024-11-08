import girlPhone from "../../assets/girl-with-phone.png"

export default function AboutMe() {
    return(
        <div className="bg-gradientOrange flex items-center p-20 gap-12">
            <img src={girlPhone} className="w-1/3 h-1/3"/>
            
            <div className="border-dashed border-4 border-mahogany rounded-lg p-14">
                <h2 className="mb-4">About Me</h2>
                <p>Nice to meet you and thank you for visiting my portfolio page!</p>
                <p className="mt-4"> My name is Rosa and I just finished my third year of Software Engineering (B.Eng) at McMaster University. I am passionate about front-end development (plus design), and am hoping to work towards to becoming a full fledged full-stack developer. I am always looking forward to connecting with others and learning new experiences!</p>
            </div>
        </div>
    )
}