import { useContext } from "react"
import { AppContext } from "./AppContext";

const ProductCard = () => {
    const {cart} = useContext(AppContext);

    return(
        <button onClick={() => cart.dispatch({type: 'ADD_ITEM', payload: {id: 1, name: 'Product 1'}})}>Add to Cart
         ({cart.state.items.length})</button>
    );
};
export default ProductCard;