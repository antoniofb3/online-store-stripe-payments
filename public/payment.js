const stripe = Stripe('your-public-key-here'); // Replace with your Stripe public key
const elements = stripe.elements();
const cardElement = elements.create('card');

cardElement.mount('#card-element');

const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { paymentIntent, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
        alert('Payment failed: ' + error.message);
    } else {
        alert('Payment successful!');
        window.location.href = '/confirmation';
    }
});
