export default function Button({
    text,
    bgColour="bg-transparent", 
    borderColour="border-mahogany", 
    padding="p-2 lg:p-4", 
    textColour="text-mahogany", 
    clickHandler,
    iconLeft=false,
    iconRight=false}) {    

    return(
        <div className={`${text==="Let's Connect" ? "hidden md:inline-block" : ""}`}>
            <button onClick={clickHandler} className={`flex gap-2 md:gap-4 ${bgColour} ${borderColour} border-2 font-semibold md:font-bold text-sm ${padding} lg:text-xl rounded-2xl ${textColour} items-center`}>
                {iconLeft && <img src={iconLeft} className="w-7 h-7"/>}
                {text}
                {iconRight && <img src={iconRight} className="w-7 h-7"/>}
            </button>
        </div>
    )
}