<template>
  <h1>Payment page</h1>

  <form id="payment-form">
    <div id="payment-element">
      <!--Stripe.js injects the Payment Element-->
    </div>
    <button id="submit">
      <div
        id="spinner"
        class="spinner hidden"
      />
      <span id="button-text">Pay now</span>
    </button>
    <div
      id="payment-message"
      class="hidden"
    />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    'auth'
  ]
})

/* global useHead, Stripe */
useHead({
  title: 'Payment',
  script: [
    {
      src: 'https://js.stripe.com/v3/'
    }
  ]
})

const {
  public: {
    API_BASE_URL,
    STRIPE_PUBLIC_KEY
  }
} = useRuntimeConfig()

if (process.client) {
  const stripe = Stripe(STRIPE_PUBLIC_KEY)

  // The items the customer wants to buy
  const items = [{ id: 'xl-tshirt' }]

  let elements

  initialize()
  checkStatus()

  document
    .querySelector('#payment-form')
    .addEventListener('submit', handleSubmit)

  // Fetches a payment intent and captures the client secret
  async function initialize () {
    const response = await fetch(`${API_BASE_URL}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
    const { clientSecret } = await response.json()

    const appearance = {
      theme: 'stripe'
    }
    elements = stripe.elements({ appearance, clientSecret })

    const paymentElementOptions = {
      layout: 'tabs'
    }

    const paymentElement = elements.create('payment', paymentElementOptions)
    paymentElement.mount('#payment-element')
  }

  async function handleSubmit (e) {
    e.preventDefault()
    setLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000'
      }
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      showMessage(error.message)
    } else {
      showMessage('An unexpected error occurred.')
    }

    setLoading(false)
  }

  // Fetches the payment intent status after payment submission
  async function checkStatus () {
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)

    switch (paymentIntent.status) {
      case 'succeeded':
        showMessage('Payment succeeded!')
        break
      case 'processing':
        showMessage('Your payment is processing.')
        break
      case 'requires_payment_method':
        showMessage('Your payment was not successful, please try again.')
        break
      default:
        showMessage('Something went wrong.')
        break
    }
  }

  // ------- UI helpers -------

  function showMessage (messageText) {
    const messageContainer = document.querySelector('#payment-message')

    messageContainer.classList.remove('hidden')
    messageContainer.textContent = messageText

    setTimeout(function () {
      messageContainer.classList.add('hidden')
      messageContainer.textContent = ''
    }, 4000)
  }

  // Show a spinner on payment submission
  function setLoading (isLoading) {
    if (isLoading) {
      // Disable the button and show a spinner
      document.querySelector('#submit').disabled = true
      document.querySelector('#spinner').classList.remove('hidden')
      document.querySelector('#button-text').classList.add('hidden')
    } else {
      document.querySelector('#submit').disabled = false
      document.querySelector('#spinner').classList.add('hidden')
      document.querySelector('#button-text').classList.remove('hidden')
    }
  }
}
</script>
