import {signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils'
import SignUpForm from '../../components/sign-up-form/Sign-up-form.componenets';
import SignInForm from '../../components/sign-in-form/Sign-in-form.componenets';

const Authentication =()=> {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
    const userDocRef=await  createUserDocumentFromAuth(user);
    };
   
  return (
    <div>
       <h1>Sign in Page  </h1>
       <button onClick={logGoogleUser}>
         Sign in with Google Popup
       </button>
       <SignInForm/>
       <SignUpForm/>
        </div>
  )
}

export default Authentication;