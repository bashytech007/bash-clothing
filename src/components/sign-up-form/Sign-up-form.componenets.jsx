import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/Button.component";

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils";


import  {SignUpcontainer} from './sign-up-form.styles.jsx'
const defaultFormFields ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
   
    
    

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=async(event)=>{
      event.preventDefault();
      
      if(password!== confirmPassword){
        alert('passwords do not match')
        return;
      }
      try{
        const {user}= await createAuthUserWithEmailAndPassword(
            email,
            password
            );

            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
            
      }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user,email already in use')
        }else{

            console.log('user creation encoutred an error',error)
        }
      }
    };
    const handleChange=(event)=>{

        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    };

    return (
      <SignUpcontainer>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="2pac"
            required
            onChange={handleChange}
            value={displayName}
            label="DisplayName"
            name="displayName"
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="johndoe@gmail.com"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </SignUpcontainer>
    );
}
export default SignUpForm;