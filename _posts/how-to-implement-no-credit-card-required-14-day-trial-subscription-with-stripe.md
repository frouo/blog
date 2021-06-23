---
publish: "true"
title: "How to implement a no credit card required 14-day trial subscription with Stripe"
excerpt: "In this post, I describe how I came to implement a no CC 14-day trial subscription with Stripe. Unfortunately it cannot be 100% handled by the Stripe API."
environment: "fullstack"
coverImage: "/assets/blog/no-cc-14-day-trial/cover.jpg"
date: "2021-06-21T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/no-cc-14-day-trial/cover.jpg"
---

Unfortunately it cannot be 100% handled by the Stripe API.

## First (wrong) attempt

My first implementation was pretty naïve. Back-end side, when signing up a new user, the following operations occured:

1. create a Stripe [<code>Customer</code> ↗](https://stripe.com/docs/api/customers/create)
2. create a user with its name, email, password and Stripe Customer unique identifier.
3. create a Stripe [<code>Subscription</code> ↗](https://stripe.com/docs/api/subscriptions/create) with parameters [<code>trial_period_days: 14</code>](https://stripe.com/docs/api/subscriptions/create#create_subscription-trial_period_days), [<code>items</code>](https://stripe.com/docs/api/subscriptions/create#create_subscription-items), and [<code>customer</code>](https://stripe.com/docs/api/subscriptions/create#create_subscription-customer).

Note that we have not specified any payment method either for the Customer or for the Subscription.

## What is wrong with that?

👉 at the end of the trial period, Stripe charges the customer. Right away. And also creates an invoice for the coming month.

But remember the title: "no credit card required". Meaning that Stripe has no payment method to charge the customer.

So the invoice will remain unpaid and Stripe will attempt to charge the customer from time to time throughout the month.

Finally, at the end of the month, Stripe automatically cancels the subscription if payment is still unsuccessful.

Here is a screenshot of the [Stripe Customer Portal ↗](https://stripe.com/docs/billing/subscriptions/customer-portal)

![unpaid invoice](/assets/blog/no-cc-14-day-trial/unpaid-invoice.jpg)
_Stripe Customer Portal - The current plan is empty because Stripe ended up canceling the Subscription and the first invoice remains unpaid._

You agree it is a bad user experience.

## The Stripe API is not designed to handle this scenario

I could not found any parameter to avoid the unpaid invoice.

I was so surprised that I contacted Stripe Support. Lucie answered quickly and confirmed that Stripe has not such feature:

> Je vais faire part de cette évolution à Stripe et qui j'espère pourra aboutir à une nouvelle fonctionnalité.

> _Translate:_ I will share this with Stripe and hopefully lead to a new feature.

## Final solution

Back-end:

At sign up, create a Stripe Customer + create a User with name, email, password, Stripe Customer id, and `trialEndAt` (equal to `now + 14 days`).

Front-end:

1. `if` User subscribes ([API ↗️](https://stripe.com/docs/api/subscriptions/list)), `then` grant User access to your website. Also, provide a link to its Customer Portal page ([API ↗️](https://stripe.com/docs/api/customer_portal)) so User is free to cancel its subscription anytime.
2. `else if` current time is below User's `trialEndAt`, `then` grant User access to your website. Also, provide a link to the Stripe Checkout payment page [API ↗️](https://stripe.com/docs/billing/subscriptions/checkout) so User can subscribe.
3. `else` deny User access, tell User that the trial period is over and provide a link to the Stripe Checkout payment page so User can subscribe.

## Conclusion

Don't be fooled with [<code>trial_period_days</code>](https://stripe.com/docs/api/subscriptions/create#create_subscription-trial_period_days) Subscription's parameter.

## Thank you

Hope it helps.
