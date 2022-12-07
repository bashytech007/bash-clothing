import {signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils'
import SignUpForm from '../../components/sign-up-form/Sign-up-form.componenets';
import SignInForm from '../../components/sign-in-form/Sign-in-form.componenets';
import './authentication.styles.scss'
const Authentication =()=> {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
    const userDocRef=await  createUserDocumentFromAuth(user);
    };
   
  return (
    <div className='authentication-container'>
       <SignInForm/>
       <SignUpForm/>
        </div>
  )
}

export default Authentication;