import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () =>{
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
          dispatch(clearCart());
    }
    return (
        <div className="p-4 m-4 text-center flex justify-center items-center flex-col">
            <h1 className="font-bold text-lg mb-4">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick = {handleClearCart}>Clear Cart</button>
            <div className="w-6/12 flex justify-center bg-slate-100 rounded-sm">
            {items.length === 0 ?<h1 className="text-lg font-bold">Cart is Empty. Add items to the cart!</h1> :<ItemList items={items}/> }
            </div>
        </div>
    )
};

export default Cart;