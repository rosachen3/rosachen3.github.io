export default function Icons({src, alt}) {
    return(
        <a href="#">
            <img src={src} alt={alt} className="w-8 lg:w-14 lg:h-14"/>
        </a>
    )
}