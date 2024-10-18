export default function Button({text, bgColour="bg-transparent", borderColor="darkBrown", icon=null}) {    
    
    return(
        <button className={`border-${borderColor} border-2 font-semibold py-2 px-4 rounded-2xl`}>
            {text}
        </button>
    )
}