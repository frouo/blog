---
title: 'How to avoid the "Non-breaking space used instead of regular expression" warning in Xcode'
excerpt: ""
environment: "Xcode 12.3"
coverImage: "/assets/blog/non-breaking-space-warning/cover.png"
date: "2021-02-03T00:00:00.000Z"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/non-breaking-space-warning/cover.png"
---

## Why this warning?

Non-breaking space is produced by pressing <kbd>⌥ option</kbd><kbd>space</kbd>. Which happens to me all the time when typing such a code line `items.map { ... }` because I tend to hold prematurely or release too late the <kbd>⌥ option</kbd> key needed to print the `{` or `}` symbols (azerty).

<kbd>m</kbd><kbd>a</kbd><kbd>p</kbd><kbd style="transform: translateY(4px);">⌥ option (holding)</kbd><kbd>space</kbd><kbd>(</kbd>

## Chosen solution

### Use a snippet!

Create an empty closure snippet and use <kbd>⌘ cmd</kbd><kbd>⇧ shift</kbd><kbd>L</kbd> to insert the snippet. It even ended up speeding up my workflow 🎉

![snippet library](/assets/blog/non-breaking-space-warning/snippet-library.png)

### Usage

![snippet usage](/assets/blog/non-breaking-space-warning/snippet-usage.gif)

### How to create this snippet

1. • Type your snippet in Xcode, here `items.map { <#code#> }`
2. • Select the part of the snippet, here <code><kbd>space</kbd>{ <#code#> }</code>
3. • Xcode Menu > Editor > Create Code Snippet
4. • Enter a title
5. • Click Done

![create snippet](/assets/blog/non-breaking-space-warning/create-snippet.gif)

## An azerty keyboard thing

As I said, I guess this ennoying thing should mostly concern AZERTY keyboards because on these keyboards, you have to hold <kbd>⌥ option</kbd> to print <kbd>{</kbd> or <kbd>}</kbd>.

## First try with editing `IDETextKeyBindingSet.plist` file

I did try this [stackoverflow answer](https://apple.stackexchange.com/a/179653) from [klanomath](https://apple.stackexchange.com/users/93229/klanomath) 🙏🏻.

It's kind of work. Indeed I no longer have the warning but for the reason that <kbd>⌥ option</kbd><kbd>space</kbd> no longer works at all: no more space neither normal nor non-breaking.

Which was very bordering on my typing speed.

Plus I would probably have to redo the modification with every new Xcode version.

## Also tried with no luck

1. • iTerm2 [stackoverflow answer](https://superuser.com/a/680752) but it's only working in iTerm2 editor
2. • Modifying `~/Library/KeyBindings/DefaultKeyBinding.dict` [stackoverflow answer](https://superuser.com/a/142573) but I don't want to touch that file indeed...

Now I use the snippet.

Please reach me if you find a better solution 👋
