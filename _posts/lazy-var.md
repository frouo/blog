---
title: "Does lazy var property capture self?"
excerpt: "No."
environment: "Swift 5"
coverImage: "/assets/blog/lazy-var/cover.jpg"
date: "2021-01-01T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/lazy-var/cover.jpg"
---

**No.**

Immediately applied closure is considered `@noescape` by the compiler by default. Meaning that it does not capture `self`.

In this case where `lazy var` computes a property, its closure is immediately applied when `self` accesses `label` for the first time. Note the `()` after the closing curly bracket `}`.

## ⚠️

This is not to be confused with closure properties that are lazily defined!

![lazy var closure](/assets/blog/lazy-var/lazy-var-closure.jpg)

In this case a strong reference is created via `self.` in the closure, unless you specify `[unowned self]`. Unowned because you know in this case that the label shouldn't exist if the self object doesn't.

## References

[SO - Lazy initialisation and retain cycle](https://stackoverflow.com/a/38144190/1679768)

> <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/aligatr?ref_src=twsrc%5Etfw">@aligatr</a> When you immediately apply a closure, it&#39;s automatically noescape.</p>&mdash; Joe Groff (@jckarter) <a href="https://twitter.com/jckarter/status/704100315587477504?ref_src=twsrc%5Etfw">February 29, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[SO - What is difference between @noescape, @escaping and @autoclosure?](https://stackoverflow.com/a/39613221/1679768)

> The default (when not specified) is @noescaping in Swift 3 (see [swift proposals](https://github.com/apple/swift-evolution/blob/master/proposals/0103-make-noescape-default.md)). They keyword does not actually exist anymore. There is only @escaping.

[SO - Must all variable or lazy variable initializer in Swift include weak self?](https://stackoverflow.com/a/40794717/1679768)

> This is not to be confused with closure properties that are lazily defined!
