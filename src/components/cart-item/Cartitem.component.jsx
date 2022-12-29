import {CartItemContainer,ItemDetails}from './cart-item.styles.jsx'

const Cartitem=({cartitem})=>{
    const {name,imageUrl,price,quantity}=cartitem;
return(
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
)


}
export default Cartitem;