
function Button(){
    
    const handleClick = (e) => e.target.textContent = "Hello";

    return(
        <button onClick={(e) => handleClick(e)}> Subscribe</button>
    );
}

export default Button