import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KI3nWSItqY0kTkQMMWRkxNRCViJJ4W2kzO4qYEi7rRqjGicuAvhO7ukAGR94GnpU5jDodox39RT7jKwbF5a3WZd00yVhdDmmW';

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