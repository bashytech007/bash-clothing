import {signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils'
import SignUpForm from '../../components/sign-up-form/Sign-up-form.componenets';
import SignInForm from '../../components/sign-in-form/Sign-in-form.componenets';
import {AuthenticationContainer} from  './authentication.styles.jsx'
const Authentication =()=> {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
    const userDocRef=await  createUserDocumentFromAuth(user);
    };
   
  return (
    <AuthenticationContainer>
       <SignInForm/>
       <SignUpForm/>
        </AuthenticationContainer>
  )
}

export default Authentication;