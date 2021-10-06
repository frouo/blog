---
publish: "true"
title: "layoutIfNeeded vs setNeedsLayout"
excerpt: 'Stated succinctly, layoutIfNeeded says "update immediately please", whereas setNeedsLayout says "update in the next UI update cycle".'
environment: "iOS"
coverImage: "/assets/blog/ios-layoutifneeded-vs-setneedslayout/cover.jpg"
date: "2021-10-06T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/ios-layoutifneeded-vs-setneedslayout/cover.jpg"
---

## TLDR:

- `layoutIfNeeded` says **update immediately please**, whereas
- `setNeedsLayout` says **update but you can wait until the next UI update cycle**.

## Using more words

### `layoutIfNeeded`

The method is a synchronous call that tells the system you want a layout and redraw of a view and its subviews. And you want it done <u>immediately</u> without waiting for the update cycle. When the call to this method is complete, the layout has already been adjusted and drawn based on any changes that were noted prior to the method call.

[ doc ↗](https://developer.apple.com/documentation/uikit/uiview/1622507-layoutifneeded)

### `setNeedsLayout`

The method tells the system that you want it to layout and redraw that view, and all of its subviews, during the update views cycle. This is an asynchronous activity, because the method completes and returns immediately. It's only later (milliseconds) that the layout and redrawing actually happens. You just don’t know when exactly.

[ doc ↗](https://developer.apple.com/documentation/uikit/uiview/1622601-setneedslayout)

## Names can be deceiving

⚠️ Watch out, you may find the naming a little deceiving regarding what it does.

Remember, here, the _if needed_ means _do it immediately_. Which is a bit confusing IMO.

## References

This article paraphrases a great article from [Lawrence MacFadyen ↗](https://twitter.com/iosinsight) that is no more available on the web, unfortunately.

The link in case it reappears one day: [iosinsight.com ↗](http://www.iosinsight.com/setneedslayout-vs-layoutifneeded-explained/).

## Thank you

Hope it helps.
