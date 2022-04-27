---
title: 'How to avoid the "Non-breaking space used instead of regular expression" warning in Xcode'
excerpt: "I have this warning everytime I type a closure. In this post I tried various solution. Sorry I found nothing satisfying."
environment: "Xcode 12.3"
coverImage: "/assets/blog/non-breaking-space-warning/cover.png"
date: "2021-02-03"
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

1. Type your snippet in Xcode, here `items.map { <#code#> }`
2. Select the part of the snippet, here <code><kbd>space</kbd>{ <#code#> }</code>
3. Xcode Menu > Editor > Create Code Snippet
4. Enter a title
5. Click Done

![create snippet](/assets/blog/non-breaking-space-warning/create-snippet.gif)

## An azerty keyboard thing

As I said, I guess this ennoying thing should mostly concern AZERTY keyboards because on these keyboards, you have to hold <kbd>⌥ option</kbd> to print <kbd>{</kbd> or <kbd>}</kbd>.

## First try with editing `IDETextKeyBindingSet.plist` file

I did try this [stackoverflow answer](https://apple.stackexchange.com/a/179653) from [klanomath](https://apple.stackexchange.com/users/93229/klanomath) 🙏🏻.

It's kind of work. Indeed I no longer have the warning but for the reason that <kbd>⌥ option</kbd><kbd>space</kbd> no longer works at all: no more space neither normal nor non-breaking.

Which was very bordering on my typing speed.

Plus I would probably have to redo the modification with every new Xcode version.

## Also tried with no luck

1. [iTerm2](https://iterm2.com/) [stackoverflow answer](https://superuser.com/a/680752) but it's only working inside the iTerm2 editor
2. Modifying `~/Library/KeyBindings/DefaultKeyBinding.dict` [stackoverflow answer](https://superuser.com/a/142573) but I don't want to touch that file indeed...

Now I use the snippet.

Please reach me if you find a better solution 👋

## Thank you

Hope it helps. Please drop a ❤️ on my Twitter post to show your support 🙏.

<blockquote data-theme="dark" class="twitter-tweet"><p lang="en" dir="ltr">Am I the only one having this warning all the time?<br><br>My solution has been to create a snippet ` { &lt;#code#&gt; }` so I no more have to write empty closure.<br><br>Please comment below if you face the same and found a better solution 🙏🏻🙂<a href="https://twitter.com/hashtag/Xcode?src=hash&amp;ref_src=twsrc%5Etfw">#Xcode</a> <a href="https://twitter.com/hashtag/iOSDev?src=hash&amp;ref_src=twsrc%5Etfw">#iOSDev</a> <a href="https://twitter.com/hashtag/azerty?src=hash&amp;ref_src=twsrc%5Etfw">#azerty</a><a href="https://t.co/9DEFMVKZrE">https://t.co/9DEFMVKZrE</a></p>&mdash; François Rouault ☕️ (@frouo) <a href="https://twitter.com/frouo/status/1357260105956392960?ref_src=twsrc%5Etfw">February 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
