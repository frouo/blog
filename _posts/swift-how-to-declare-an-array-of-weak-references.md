---
publish: "true"
title: "How to declare an array of weak references in Swift?"
excerpt: "It can be achieved in one line of code. No need to create extra classes or structs."
environment: "Swift 5"
coverImage: "/assets/blog/array-of-weak-references/cover.jpg"
date: "2021-04-21T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/array-of-weak-references/cover.jpg"
---

To declare an array of weak `Foo` references, define an array of closures `() -> Foo?` and capture the `foo` instance you want to store as a weak reference using `[weak foo]`.

That's it 🎉

No extra struct or class needed.

Don't be afraid with `() -> Foo?`, it's just a type, the type of a function that has no parameters and returns `Foo?`. It's just a matter of habit.

Here is the full code example:

```swift
class Foo {
  func doSomething() {

  }
}

// -------------

let foo = Foo()

var foos = [() -> Foo?]()
foos.append({ [weak foo] in return foo })

foos.forEach { $0()?.doSomething() }
```

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">👉 How do I declare an array of weak references in Swift?<br><br>One line of code. No need for extra classes or structs as we can see a lot out there!<a href="https://t.co/upMMPKnDQL">https://t.co/upMMPKnDQL</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1385123378131001350?ref_src=twsrc%5Etfw">April 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
