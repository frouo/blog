---
title: "How to build eco-friendly mobile apps"
excerpt: "Let's try to think about the climate impacts of a mobile app and solutions to reduce them."
environment: "Green IT"
coverImage: "/assets/blog/eco-friendly-mobile-apps/cover.jpeg"
date: "2022-06-27"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/eco-friendly-mobile-apps/cover.jpeg"
---

Let's face it, creating an app requires human and computer resources so it is basically not green. That said, if your business needs an app, let's see how we can reduce its impact.

Here is a list of actionable tips to help you make your app eco-friendly.

🗜️ **Keep your app size low**

Let's focus on that, it's a good intro.

Picture that, imagine you could reduce your app by 5Mo, imagine your app has 1 million downloads, yes, you just saved the world of 5Mo x 1.000.000 = 5**To** of network transaction! That's huge. And remember, the same story repeats everytime you publish on update of your app on the store! Indeed, the phone re-downloads the whole app new version and re-install it for every updates.

That's why you must focus your effort on that at first place.

Both platforms provide documentation to help reduce your app's size (cf. links down below).

🖼️ **Use lightweight images**

This is probably the easiest and most impactful thing to do.

Locally:

Go through your app's assets, images and icons, and optimize them.

I highly recommand this tool to reduce all your images' size in seconds: [ImageOptim&nbsp;↗️](https://imageoptim.com/).

Remote:

I am pretty sure your app does fetch images from the web, right? If so, tell your back-end friends to work on reducing their images too. Downloading smaller images will make your app feel faster and use less battery.

🌙 **Prefer dark colors**

The darker the color is, the less energy it costs to display on screen.

This is especially true for LED screens where 1 black pixel corresponds to turning off 1 LED, leading to less power consumption.

🐢 **Keep frame rate low**

The less pixels move or change colors, the less the system must refresh the screen, leading to less graphical computations, less power consumption.

Avoid unecessary layout updates, overkill animations, and worse, endless animations (like shiny or blinking buttons). Less is more ✌️

💾 **Watch CPU usage**

Be a good programers 😅, avoid useless for-loops and over-engineered solutions: computations cost energy.

I didn't find proper documentation on how the memory (RAM) works but it looks like the power consumption is not related to the amount of memory you are using. That said, of course, prefer using 1Mo instead of 2Go of RAM! Leave me a message if you have better insight on this. Thanks.

🍔 **Avoid using (too much) external libraries**

Big topic here! I won't blame you for using external libs, not reinventing the wheel is 100% acceptable.

But let's think about external lib impacts:

The environmental impact of using an external library comes from downloading the lib source code. Over and over again.

You might think "oh come on dude!", but think of it twice:

Everytime you (or your CI!) need a lib, you download all the code of that lib. Which is even worse when you only need 1/3 of what the lib can offer.

In addition to that, you might need third party tools in order to bring external lib into you app. For example, if you are an iOS developer, you will likely use Cocoapods as a package repository. I love Cocoapods. But using Cocoapods means ruby, which certainly means ruby version manager (like `rvm`). In other words, you need ruby to create a Swift app... 🤪 and these third party tools need to be downloaded.

Finally, regarding the 2/3 of unused code, I don't think it's such a big deal since both iOS and Android has mecanism to shrink dead code.

🔁 **Trigger Continuous Integration on relevant events**

Your continuous integration (aka CI, like Gitlab-CI, Jenkins, Travis...) requires a computer to boot / run, clone your repository, download tooling and app's dependencies (cf. 🍔 above), and so on.

That represents a lot of power resources and network transactions.

Check out your CI settings and find out with your team when it's appropriate to run the CI.

For example, I have made a post on [how to prevent Jenkins from launching a build every time a merge request is approved ↗️](https://frouo.com/posts/how-to-prevent-jenkins-from-launching-a-build-every-time-a-merge-request-is-approved).

🛍️ **Fight the consumer society**

Make your app compatible with old versions of iOS and Android.

So a two years old device might not feel outdated.

## General mindset

Basically, the less energy your app needs, the less impact it has on the Environment. That simple.

Focus on your app's power consumption: CPU, GPU, GPS, sounds, network, everything needs power. The less, the better.

Thank you for your time, hope this help ❤️

## Share your advice

I am sure there are plenty more ideas on how to make your app eco-friendly.

👉 Please share your tips [here ↗️](https://twitter.com/frouo/status/1542814776723705857)

Thanks

## References

- [developpement mobile durable - Gabriel Adgeg (🇫🇷) ↗️](https://speakerdeck.com/gabrieladgeg/developpement-mobile-durable)
- [NOWU | Your planet. Your media. ↗️](https://www.nowuproject.eu/)
- [how to prevent Jenkins from launching a build every time a merge request is approved ↗️](https://frouo.com/posts/how-to-prevent-jenkins-from-launching-a-build-every-time-a-merge-request-is-approved)

#### iOS

- [reducing your iOS app's size ↗️](https://developer.apple.com/documentation/xcode/reducing-your-app-s-size#Automate-the-Generation-of-the-App-Size-Report)
- [app thinning (slicing, on-demand resources and bitcode) ↗️](https://developer.apple.com/videos/play/wwdc2015/404/)

#### Android

- [reduce Android APK size ↗️](https://developer.android.com/topic/performance/reduce-apk-size)
- [android shrink code ↗️](https://developer.android.com/studio/build/shrink-code)
