import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/Button.component";

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils";

import './sign-in-form.styles.scss'
const defaultFormFields ={
  
    email:'',
    password:'',
  
}
const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password,}=formFields;
   
    console.log(formFields);

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=async(event)=>{
      event.preventDefault();
      
     
      try{
       
           resetFormFields();
      }catch(error){
       
      }
    };
    const handleChange=(event)=>{

        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    };

    return (
        <div className="sign-up-container">
            <h2>Already Have an account?</h2>
            <span>Sign inwith your email and password</span>
            <form  onSubmit={handleSubmit}>
                
              
                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                
                <FormInput label="Password" type="password"required onChange={handleChange} name="password" value={password}/>
           
                <Button  type="submit">Sign In</Button>
            </form>
        </div>
    )
}
export default SignInForm;