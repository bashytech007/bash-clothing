import { useContext } from 'react'
import  {ReactComponent as ShoppIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context';
const Carticon =()=>{
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const toggleIsCartOpen =()=> setIsCartOpen(!isCartOpen);
    return(
<div className='cart-icon-container' onClick={toggleIsCartOpen}>
     <ShoppIcon className='shopping-icon' />
    <span className='item-count'>{cartCount}</span>
</div>
  );
};

export default Carticon;