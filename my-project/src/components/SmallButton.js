export default function SmallButton({text}) {
    return(
        <button className="border-darkBrown border-2 
            font-semibold 
            py-2 px-4 rounded-2xl
            hover:bg-darkBrown 
            hover:text-white 
            hover:border-transparent">
            {text}
        </button>
    )
}