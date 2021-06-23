---
publish: "true"
title: "Does lazy var capture self?"
excerpt: "No. Immediately applied closure is automatically considered @noescape."
environment: "Swift 5"
coverImage: "/assets/blog/lazy-var/cover.jpg"
date: "2021-01-01T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/lazy-var/cover.jpg"
---

No.

By default, immediately applied closure `{}` is considered `@noescape` by the compiler. Meaning that it doesn't capture self.

Indeed, let's picture that. If your application gets to the point where `self.label` is calculated, then obviously `self` exists! The closure can therefore be executed `{}()` with the guarantee that `self` exists.

**⚠️⤵**

This is not to be confused with closure properties that are lazily defined!

![lazy var closure](/assets/blog/lazy-var/lazy-var-closure.jpg)

Notice the absence of `()` at the end of the snippet.

In this case a strong reference is created in the closure, see `self.`. Unless you specify `[unowned self]` or `[weak self]` as you please depending on the context.

## References

[docs.swift.org - Lazy Stored Properties](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID257)

> A lazy stored property is a property whose initial value is not calculated until the first time it is used. You indicate a lazy stored property by writing the lazy modifier before its declaration.

[stackoverflow.com - Lazy initialisation and retain cycle](https://stackoverflow.com/a/38144190/1679768)

> <blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/aligatr?ref_src=twsrc%5Etfw">@aligatr</a> When you immediately apply a closure, it&#39;s automatically noescape.</p>&mdash; Joe Groff (@jckarter) <a href="https://twitter.com/jckarter/status/704100315587477504?ref_src=twsrc%5Etfw">February 29, 2016</a></blockquote>

[stackoverflow.com - What is difference between @noescape, @escaping and @autoclosure?](https://stackoverflow.com/a/39613221/1679768)

> The default (when not specified) is @noescaping in Swift 3 (see [swift proposals](https://github.com/apple/swift-evolution/blob/master/proposals/0103-make-noescape-default.md)). They keyword does not actually exist anymore. There is only @escaping.

[stackoverflow.com - Must all variable or lazy variable initializer in Swift include weak self?](https://stackoverflow.com/a/40794717/1679768)

> This is not to be confused with closure properties that are lazily defined!

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">Do you also ask yourself this question every time you write a lazy var? <a href="https://twitter.com/hashtag/swift?src=hash&amp;ref_src=twsrc%5Etfw">#swift</a> <a href="https://twitter.com/hashtag/developers?src=hash&amp;ref_src=twsrc%5Etfw">#developers</a> <a href="https://t.co/E8dQkXw7Tn">https://t.co/E8dQkXw7Tn</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1354579946077827072?ref_src=twsrc%5Etfw">January 28, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
