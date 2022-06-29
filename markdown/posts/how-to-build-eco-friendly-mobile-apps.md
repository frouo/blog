---
title: "How to make an eco-friendly mobile app"
excerpt: "Let's try to think about the climate impacts of a mobile app and solutions to reduce them."
environment: "GreenIT"
coverImage: "/assets/blog/eco-friendly-mobile-apps/cover.jpg"
date: "2022-06-27"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/eco-friendly-mobile-apps/cover.jpg"
---

Here is a list of actionable tips to help you make your app eco-friendly:

🗜️ **Keep your app size low**

Let's focus on that, it's a good intro by the way.

Picture that, imagine you reduced your app by 5Mo, imagine your app has 1 million downloads, yes, you just saved the world of 5Mo x 1.000.000 = 5**To** of network transaction! That's huge. And the same story repeats for every single update of your app! Indeed, when you publish an update, the whole app is re-downloaded on the phone from the app store. That's very huge!

Both platforms provide documentation to help reduce your app's size.

Independently of the platform, here are some tips:

🌙 **Prefer dark colors**

This is especially true for LED screens where 1 black pixel corresponds to turning off 1 LED, leading to less power consumption.

🐢 **Keep frame rate low**

Avoid unecessary layout updates and overdo on animations like screen transitions and micro animations. Indeed, the lower the pixels move or change colors, the less the system must refresh the screen and less graphical computations, leading to less power consumption.

💾 **Watch CPU & RAM usage**

Be a good programers 😅, avoid useless for-loops, avoid keeping useless objects in memory. Items in memory and computations cost energy.

🖼️ **Use lightweight images**

This is probably the easiest and impactful thing to do.

Go through your app assets, images and icons, and optimize them.

I highly recommand this tool to reduce all your images' size in seconds: [ImageOptim](https://imageoptim.com/).

Also, I am pretty sure your app does fetch images from the web, right? If so, tell your back-end friends to work on reduce images' size. Downloading smaller images will make your app feel faster and use less battery.

🍔 **Avoid using (too much) external libraries**

Big topic here! I won't blame you for using external libs, not reinventing the wheel is 100% acceptable.

But let's think about external lib impacts:

I won't spend too much on "unused code", you may only use 1/3 of what the lib can offer, but that's not a big deal since both iOS and Android has mecanism to shrink dead code.

What becomes problematic is:

- every time you add a lib, you download all the code of that lib, and you might only need 1/3 of it...
- you might need to stuff on tools to make it possible. For example, if you are an iOS developer, you will likely use Cocoapods as a package repository. I love Cocoapods. But using Cocoapods means ruby, ruby means ruby version manager (like `rvm`). In other words, you need ruby to create a Swift app... 🤪

🔁 **Trigger Continuous Integration on relevant events**

Your continuous integration (aka CI, like Gitlab-CI, Jenkins, Travis...) requires a computer to boot / run, clone your repository, download tooling and app's dependencies (cf. 🍔 above), and so on.

That's a lot of power resources and network transactions.

Check out your CI settings and find with your team when it's appropriate to run the CI.

For example, I have made a post on [how to prevent Jenkins from launching a build every time a merge request is approved ↗️](https://frouo.com/posts/how-to-prevent-jenkins-from-launching-a-build-every-time-a-merge-request-is-approved)

🛍️ **Fight the consumer society**

Make your app compatible with old versions of iOS and Android.

So a two years old device might not feel outdated.

## General mindset

Basically, the less energy your app needs, the less impact it has on the Environment. That simple.

Focus on your app's power consumption: CPU, GPU, GPS, sounds, network, everything needs power. The less, the better.

## Thank you

Hope this help I think there are plenty more ideas on how to make your app eco-friendly. Please share your tips.

## References

- [developpement mobile durable - Gabriel Adgeg (🇫🇷) ↗️](https://speakerdeck.com/gabrieladgeg/developpement-mobile-durable)

### iOS

- [reducing your iOS app's size ↗️](https://developer.apple.com/documentation/xcode/reducing-your-app-s-size#Automate-the-Generation-of-the-App-Size-Report)
- [app thinning (slicing, on-demand resources and bitcode) ↗️](https://developer.apple.com/videos/play/wwdc2015/404/)

### Android

- [reduce Android APK size ↗️](https://developer.android.com/topic/performance/reduce-apk-size)
- [android shrink code ↗️](https://developer.android.com/studio/build/shrink-code)
- []()

### CI

- [how to prevent Jenkins from launching a build every time a merge request is approved ↗️](https://frouo.com/posts/how-to-prevent-jenkins-from-launching-a-build-every-time-a-merge-request-is-approved)
