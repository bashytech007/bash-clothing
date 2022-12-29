import {CheckoutItemContainer,ImageContainer,GeneralSpan,Quantity,Arrow,Value,RemoveButton} from './checkoutitem.style.jsx'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
const CheckoutItem=({cartItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    const {clearItemFromCart,addItemToCart,removeItemToCart}=useContext(CartContext);
    const clearItemHandler=()=>clearItemFromCart(cartItem);

    const addItemHandler=()=>addItemToCart(cartItem);
    const removeItemHandler=()=>removeItemToCart(cartItem);
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