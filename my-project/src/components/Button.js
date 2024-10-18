export default function Button({
    text,
    bgColour="bg-transparent", 
    borderColour="border-mahogany", 
    padding="py-2 px-4", 
    textColour="text-mahogany", 
    icon=false}) {    

    padding = padding === "medium" ? "py-4 px-11" : padding

    return(
        <div>
            <button className={`flex gap-3 ${bgColour} ${borderColour} border-2 font-semibold ${padding} rounded-2xl ${textColour}
                `}    
            >
                {text}
                {icon && <img src={icon} className="w-7 h-7"/>}
            </button>
        </div>
    )
}