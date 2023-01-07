
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { ReactComponent as BashLogo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../store/user/user.selector";
// import {} from "../../contexts/cart.context";
import {selectIsCartOpen} from '../../store/cart/cart.selector'

import { signOutUser } from "../../utils/firebase/Firebase.utils";
import CartIcon from "../../components/cart-icon/Carticon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen=useSelector(selectIsCartOpen);

  

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <BashLogo className="logo" />
        </LogoContainer>
        
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
