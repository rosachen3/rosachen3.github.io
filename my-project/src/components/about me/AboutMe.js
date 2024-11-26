import girlPhone from "../../assets/girl-with-phone.png"

export default function AboutMe() {
    return(
        <div className="bg-gradientOrange flex flex-col p-10 md:flex-row items-center lg:p-20 gap-12">
            <img src={girlPhone} className="flex self-center hidden md:block md:w-1/3"/>
            
            <div className="border-dashed border-4 border-mahogany rounded-lg p-6 text-center md:text-left md:p-14">
                <h2 className="mb-4 text-2xl font-medium md:text-4xl">About Me</h2>
                <p className="md:text-xl">Nice to meet you and thank you for visiting my portfolio page!</p>
                <p className="mt-4 md:text-xl"> My name is Rosa and I just finished my third year of Software Engineering (B.Eng) at McMaster University. I am passionate about front-end development (plus design), and am hoping to work towards to becoming a full fledged full-stack developer. I am always looking forward to connecting with others and learning new experiences!</p>
            </div>

            <img src={girlPhone} className="flex self-center w-3/4 sm:w-1/2 block md:hidden"/>
        </div>
    )
}