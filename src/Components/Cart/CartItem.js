import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux';

const CartItem = ({cartItem}) => {
   const dishes = dataDishes.find(item=>item.id===cartItem.dishId)
    const dispatch = useDispatch();
    return (
        <div>
            <p>{dishes.name}</p>
           <p>{cartItem.quantity} portion(s)</p>
           <p>Price: $ {dishes.price*cartItem.quantity}</p>
           <span onClick={()=>dispatch(removeItemFromCart({
            cartItemId: cartItem.id}))}>
           <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnklEQVR4nO2ZsQ0CMRTFPBGsSMk0wFQcA1wfGqhTvPyEQ7aU6qToO3GVAxEZyQVonXXlwMO3FRJt8YpRAG9gDMPbnLy/Aj2aNxCeUPX3GAXwBjJMCBPKMCFMKMOEMKEME8KEMkwIE8owIUwow5e5Dm31s8qv78/hBV4Tf3Y8KwQeEwVuFQJnYJ8w/A6cKgS+EndgKxh8+5x82fAi/8gb2f6alupaoaQAAAAASUVORK5CYII="alt="icon"/> 
           </span>
        </div>
    )
}
export default CartItem;