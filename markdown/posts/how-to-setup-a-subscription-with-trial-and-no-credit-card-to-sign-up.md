---
title: "How to let your users try before they buy"
excerpt: "In this post I describe how to set up a subscription with a 14-day trial period, no credit card required to sign up. With Stripe as payment platform."
environment: "Fullstack"
coverImage: "/assets/blog/no-cc-14-day-trial/cover.jpg"
date: "2021-06-21"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/no-cc-14-day-trial/cover.jpg"
---

The best way to convince your prospects of the value of your product is to let them try it. Let's say for a short period of time, 14 days.

Here is how I came to implement this in [Lembot ↗](https://lembot.com).

With [Stripe ↗](https://stripe.com) as payment platform.

## Back-end

At sign up:

1. create your User
2. create a Stripe [<code>Customer</code> ↗](https://stripe.com/docs/api/customers/create)
3. add the Stripe Customer's [<code>id</code> ↗](https://stripe.com/docs/api/customers/object#customer_object-id) to your User
4. compute the trial end date (eg. `now + 14 days`) and add it to your User too.

So your User database should look like:

| id  | email       | password | stripeCustomerId   | trialEndAt          |
| --- | ----------- | -------- | ------------------ | ------------------- |
| 1   | me@mail.com | hidden   | cus_JCnZPUfKfFarTf | 2021-07-04T00:00:00 |

## Front-end

First, check the [Stripe Subscription API ↗️](https://stripe.com/docs/api/subscriptions/list) to list the user's current subscriptions.

If the API returns a subscription, then grant the user access to your website. Also, provide a link to the [Customer Portal ↗️](https://stripe.com/docs/api/customer_portal) page so the user is free to cancel its subscription anytime.

Otherwise check `trialEndAt`:

If `trialEndAt` date is in the future, then grant User access to your website. Else, tell your user the trial period is over and ask to subscribe. In both case, provide a link to the [Stripe Checkout ↗️](https://stripe.com/docs/billing/subscriptions/checkout) payment page so User can subscribe.

Here is the state diagram:

[![](https://mermaid.ink/img/pako:eNp1kt9KwzAUxl_lEBhV2RC9LLXQdUMEwUJ3Z2VkaebC1mQkqSKll975CPpyPon5064baq-SnN855ztfT4OIKCkK0WjUMM50CE2gN7SiQRiUWG6Dth2NCq401nTG8LPE1eTluuBgvvwKQsi1ZHsKeb1SxJw0ExyS7M4TiQG-P98hIYQqBbcSc03LLrb4MwhnC8nw7rxrMc2GHmmttKiohExIjXeeSG2ZdEPJFiI7Sqxt-pyXiY4u3UNXKb0_qmR5UWsfmlkhXx9gkuBhDa5_wX3s8eIJJpPYzOrvzghg66U_RBHZCEZoHB8ssXQf948H2oasJape9V79QbiJuLCUGrDeUCdmmvUPp3qWbvhfqkzFY1WeOu3cZTqFvv8rRDcwmPkvbt0bMIhs6kGub2y8753urmiMzI-sMCvN6jU2WCC3dgUKzdFuXoEK3hqu3pem4bxkWkgUrvFO0THCtRb5Gyco1LKmPdQtaEe1Pyk06O8)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kt9KwzAUxl_lEBhV2RC9LLXQdUMEwUJ3Z2VkaebC1mQkqSKll975CPpyPon5064baq-SnN855ztfT4OIKCkK0WjUMM50CE2gN7SiQRiUWG6Dth2NCq401nTG8LPE1eTluuBgvvwKQsi1ZHsKeb1SxJw0ExyS7M4TiQG-P98hIYQqBbcSc03LLrb4MwhnC8nw7rxrMc2GHmmttKiohExIjXeeSG2ZdEPJFiI7Sqxt-pyXiY4u3UNXKb0_qmR5UWsfmlkhXx9gkuBhDa5_wX3s8eIJJpPYzOrvzghg66U_RBHZCEZoHB8ssXQf948H2oasJape9V79QbiJuLCUGrDeUCdmmvUPp3qWbvhfqkzFY1WeOu3cZTqFvv8rRDcwmPkvbt0bMIhs6kGub2y8753urmiMzI-sMCvN6jU2WCC3dgUKzdFuXoEK3hqu3pem4bxkWkgUrvFO0THCtRb5Gyco1LKmPdQtaEe1Pyk06O8)

## A quick word about the Stripe Subscription API

Stripe API allows to create a subscription without specifying any payment method and using the parameter [<code>trial_period_days</code> ↗️](https://stripe.com/docs/api/subscriptions/create#create_subscription-trial_period_days).

So it's tempting to create a subscription with a trial at sign up. That's what I did at first 😅...

But that's not what you want. Why?

Here is the documentation for `trial_period_days`:

> Integer representing the number of trial period days before the customer is charged for the first time.

Indeed, at the end of the trial, Stripe automatically charges the customer and create an invoice for the upcoming month.

Even if the customer has no payment method.

Obviously, since no payment method has been entered, Stripe is not able to charge the customer. As a result, at the end of the month Stripe automatically cancels the subscription and keep the unpaid invoice.

That's not what you want because you don't want your customer to have an unpaid invoice in its Customer Portal. Your customer was there to try for 14 days, no reason to be charged.

Below, a screenshot of the Stripe Customer Portal in this situation. The current plan is empty because Stripe ended up canceling the Subscription and the first invoice remains unpaid.

![unpaid invoice](/assets/blog/no-cc-14-day-trial/unpaid-invoice.jpg)
_Stripe Customer Portal_

_Disclamer: I am not saying that it's a bug. I now realize it is well designed. It is designed this way so both [Stripe Checkout ↗](https://stripe.com/docs/payments/checkout) and [Customer Portal ↗](https://stripe.com/docs/billing/subscriptions/customer-portal) pages are consistent with each other and work out-of-the-box._

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">🗒 Let your users try before they buy<br><br>A blog post on how to implement a subscription with 14-day trial, no credit card required to sign up. With <a href="https://twitter.com/stripe?ref_src=twsrc%5Etfw">@stripe</a> as payment platform.<a href="https://twitter.com/hashtag/dev?src=hash&amp;ref_src=twsrc%5Etfw">#dev</a><a href="https://t.co/4zt2MvQXmA">https://t.co/4zt2MvQXmA</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1412161247030689796?ref_src=twsrc%5Etfw">July 5, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
