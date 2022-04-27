---
title: "How to declare an array of weak references in Swift"
excerpt: "It can be achieved in one line of code. No need to create extra classes or structs."
environment: "Swift 5"
coverImage: "/assets/blog/array-of-weak-references/cover.jpg"
date: "2021-04-21"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/array-of-weak-references/cover.jpg"
---

```swift
let foo = Foo()

var foos = [() -> Foo?]()
foos.append({ [weak foo] in return foo })

// Usage:
foos.forEach { $0()?.doSomething() }
```

That's it 🎉

No extra struct or class needed.

## How does it work?

`[weak foo]` is the trick. Instead of storing a strong reference of `foo`, we store a function that captured `foo` as `weak`.

## FP?

Yes, it is a functional programming approach.

Indeed, we did not create any class or a struct to achieve this. We simple declared a function `let captureWeakFoo: () -> Foo? = { [weak foo] in return foo }`.

Don't be afraid with `() -> Foo?`. Tell yourself that it is just a type! It is. It's the type defining a function that takes no parameter and returns an optional `Foo`.

Do not hesitate to create a typealias if it comes more readable for you

```swift
typealias WeakArray<T> = [() -> T?]
```

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">👉 How do I declare an array of weak references in Swift?<br><br>One line of code. No need for extra classes or structs as we can see a lot out there!<a href="https://t.co/upMMPKnDQL">https://t.co/upMMPKnDQL</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1385123378131001350?ref_src=twsrc%5Etfw">April 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
