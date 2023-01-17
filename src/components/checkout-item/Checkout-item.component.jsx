

import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart,clearItemFromCart,removeItemFromCart } from '../../store/cart/cart.action.js';
import {
  CheckoutItemContainer,
  ImageContainer,
  GeneralSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkoutitem.style.jsx";
const CheckoutItem=({cartItem})=>{
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems);

    const {name,imageUrl,price,quantity}=cartItem;

    const clearItemHandler=()=>dispatch(clearItemFromCart(cartItems,cartItem));

    const addItemHandler=()=>dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler=()=>dispatch(removeItemFromCart(cartItems,cartItem));
    return(
        <CheckoutItemContainer>
            <ImageContainer>
               <img src= {imageUrl} alt={`${name}`}/>

            </ImageContainer>
            <GeneralSpan>{name}</GeneralSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                &#10094;
                </Arrow>
               
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
                </Quantity>
            <GeneralSpan>{price}</GeneralSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;