import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KI4qaSC7tstK8sJfcsc9y3fQTmJ6JX3CTP2IikNvBq0AnX65JuMCw4CCCSUlyFaWnAUc0GMZct3AKJUVGfSROLE00ZJlBbyWt';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");

    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Discount Master"
            billingAddress
            shippingAddress
            image='https://res.cloudinary.com/ruppinder-in/image/upload/v1642224145/crown.svg'
            description={`Your Total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;