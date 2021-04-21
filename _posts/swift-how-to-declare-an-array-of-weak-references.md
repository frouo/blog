---
title: "How to declare an array of weak references in Swift?"
excerpt: ""
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

If you like this approach, please upvote my [StackOverflow answer ↗](https://stackoverflow.com/a/60707942/1679768). Thanks 🙏🏻. Here is the plain text sample code:

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
