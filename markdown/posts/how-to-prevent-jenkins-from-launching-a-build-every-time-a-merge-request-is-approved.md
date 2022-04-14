---
publish: "true"
title: "How to prevent Jenkins from launching a build every time a MR is approved"
excerpt: "Let's be green 🌳, for free. In this post I show you how to avoid an unnecessary launch of your CI."
environment: "CI"
coverImage: "/assets/blog/jenkins-mr-approved/cover-jenkins-config.jpg"
date: "2021-02-11T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/jenkins-mr-approved/cover-jenkins-config.jpg"
---

If you are using Gitlab Enterprise Edition ([EE](https://about.gitlab.com/install/ce-or-ee/)) and [Jenkins](https://www.jenkins.io/) for continuous integration you may have noticed that, by default, Jenkins triggers a build when a Merge Request is approved.

I personally don't find this useful. Indeed, approvals does not affect code so there no need to re-run the CI.

So, let's be green 🌱 and disable this option in Jenkins, it's easy:

1. Go on your Jenkins project home page
2. Click `Configure` on the left
3. Uncheck `Approved Merge Requets (EE-only)`
4. Finally, do not forget to `Apply` / `Save`!

![step1](/assets/blog/jenkins-mr-approved/jenkins-step1.png)
![step2](/assets/blog/jenkins-mr-approved/jenkins-step2.png)

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">Using Gitlab (EE) and Jenkins? Please uncheck this option 🙏🏻🌱 <a href="https://twitter.com/hashtag/GreenIT?src=hash&amp;ref_src=twsrc%5Etfw">#GreenIT</a> <a href="https://t.co/nHlEHZGo4f">https://t.co/nHlEHZGo4f</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1359970384708325378?ref_src=twsrc%5Etfw">February 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
