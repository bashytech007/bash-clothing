import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import {PaymentFormContainer,FormContainer} from './payment-form-styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component'

const PaymentForm=()=>{
    const stripe=useStripe();
    const elements=useElements();
const paymentHandler=async(e)=>{
    e.preventDefault();

    if(!stripe||!elements){
      return;
    }
    const response=await fetch('/.netlify/functions/create-payment-intent',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({amount:10000})
    }).then(res=>res.json());

    const {paymentIntent:{client_secret}}=response;
    console.log(client_secret);

    const paymentResult=await stripe.confirmCardPayment(client_secret,{payment_method:{
        card:elements.getElement(CardElement),
        billing_details:{
            name:'Aremu Bashir'
        }
    }})
    if(paymentResult.error){
      alert(paymentResult.error);  
    }else{
        if(paymentResult.paymentIntent.status==='succeeded'){
          alert('Payment Successful');  
        }
    }
};
    return (
      <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment:</h2>
          <CardElement />
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>PayNow</Button>
        </FormContainer>
      </PaymentFormContainer>
    );
}


export default PaymentForm;