<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button class="btn" @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51L8PIDAO6ksULFYSj3M7heyyiyGrVxDX18jx6UY2iUWXiGkmV541nJuElgJG8xZtzWNWqEr2xSENlFYoR8pcwOSr00tVkU5FpE";
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1L8f0sAO6ksULFYSdUm3M7jm', 
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/success',
      cancelURL: 'http://localhost:8080/error',
    };
  },
  methods: {
    submit () {
     
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
<style>
.btn{
  
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 50px;
  margin-left:250px;

}
</style>