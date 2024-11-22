export default function Button({
    text,
    bgColour="bg-transparent", 
    borderColour="border-mahogany", 
    padding="py-2 px-4", 
    textColour="text-mahogany", 
    clickHandler,
    iconLeft=false,
    iconRight=false}) {    

    padding = padding === "medium" ? "py-4 px-11" : padding

    return(
        <div>
            <button onClick={clickHandler} className={`flex gap-3 ${bgColour} ${borderColour} border-2 font-semibold ${padding} rounded-2xl ${textColour}`}>
                {iconLeft && <img src={iconLeft} className="w-7 h-7"/>}
                {text}
                {iconRight && <img src={iconRight} className="w-7 h-7"/>}
            </button>
        </div>
    )
}