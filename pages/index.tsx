import React from "react";
import Stripe from "stripe";
import Header from "../components/Header";
import Background from "../components/Background";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

export default function App({ prices, checkoutUrl }: { prices: any, checkoutUrl: string }) {
  return (
    <div className="app">
      <Header/>
      <Background/>

      <main className="app__main">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree prices={prices} checkoutUrl={checkoutUrl}/>
      </main>
    </div>
  );
}



export async function getServerSideProps() {
  const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_KEY || "", {
    apiVersion: "2022-11-15",
  });


  const prices = await stripe.prices.list({
    expand: ['data.product']
  });

  const lineItems = [{
    price: price.id,
    quantity: 1
  }]

  const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    success_url: process.env.SUCESS_URL || '',
    cancel_url: process.env.CANCEL_URL || '',
    line_items: lineItems,
    mode: 'payment'
  })

  return {
    props: {
      prices: prices.data,
      checkoutUrl: session.url
    },
  };
}
