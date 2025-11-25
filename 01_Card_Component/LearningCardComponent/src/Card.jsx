
import dragonPic from './assets/dragon.jpg'

function Card(){

    return(
        <div className ="card">
            <img className= "cardImage" src={dragonPic} alt="Dragon Image"></img>
            <h2 className="cardTitle">Dragon</h2>
            <p className="cardDescription">He is a fearsome flying unit capable of attacking both ground and air units, with both high health and damage. Their attacks are ranged and deal splash damage, observed when he attacks enemy troops that overlap or over walls.</p>
        </div>
    );

}

export default Card