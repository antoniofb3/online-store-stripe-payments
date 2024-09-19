const express = require('express');
const app = express();
const stripe = require('stripe')('your-secret-key-here'); // Replace with your Stripe secret key
app.use(express.static('public'));
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body; // Get the total amount from frontend
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Amount in cents
        currency: 'usd',
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
