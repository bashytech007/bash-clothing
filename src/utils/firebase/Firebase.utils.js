import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,

} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

}from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwkSWeQsMfET1CG1TRaUivCY3Vmqg1Jec",
  authDomain: "bash-clothing-db.firebaseapp.com",
  projectId: "bash-clothing-db",
  storageBucket: "bash-clothing-db.appspot.com",
  messagingSenderId: "131963999700",
  appId: "1:131963999700:web:990e2c4475b72ba0d53241"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)


export const db=getFirestore();

export const createUserDocumentFromAuth=async(
    userAuth,
    additionalInformation={displayName:'bashir'}
    )=>{
        if(!userAuth) return;
 const userDocRef=doc(db,'users',userAuth.uid)
 console.log(userDocRef);

 const userSnapShot=await getDoc(userDocRef);


if(!userSnapShot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    }catch(error){
        console.log('error creating the user',error.message)
    }

 //if user data exists
 //if user data does not exists
 //Create/set the document eith the data from userAuth iny collection

 return userDocRef;
};
}
export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email|| !password) return;
 

    return await createUserWithEmailAndPassword(auth,email,password)
}