
import SignUpForm from '../../components/sign-up-form/Sign-up-form.componenets';
import SignInForm from '../../components/sign-in-form/Sign-in-form.componenets';
import {AuthenticationContainer} from  './authentication.styles.jsx'
const Authentication =()=> {
  return (
    <AuthenticationContainer>
       <SignInForm/>
       <SignUpForm/>
        </AuthenticationContainer>
  )
}

export default Authentication;