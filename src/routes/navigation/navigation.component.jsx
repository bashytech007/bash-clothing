import { useContext } from 'react'
import { Fragment} from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as BashLogo} from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/Firebase.utils'
import CartIcon from '../../components/cart-icon/Carticon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import '../navigation/navigation.styles.scss' 
const Navigation = () => {

  const {currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext);
 
  
  return (
    <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
                 <BashLogo className='logo'/>
                 </Link>
       
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>):( <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )}
            <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
        </Fragment>
  );
}
export default Navigation
