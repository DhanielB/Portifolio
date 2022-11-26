import Stripe from "stripe"

export default async function generateCheckout(req, res) {
  const { id } = req.query

  const lineItems = [{
    price: id || '',
    quantity: 1
  }]

  const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    success_url: process.env.SUCESS_URL || '',
    cancel_url: process.env.CANCEL_URL || '',
    line_items: lineItems,
    mode: 'payment'
  })

  res.status(200).json({ session: session })
}
