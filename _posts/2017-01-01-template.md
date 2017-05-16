---
layout: post
title:  "Template Post"
date:   2017-01-01
categories: Jekyll
<!-- image: /assets/post_assets/template_post/demo5.jpg -->
tags: test
toc: true
---

A quick how-to guide to help you contribute to this site. Use this template to get started writing extension documentation.

<!-- more -->

## Writing a Post

Head over to [Github](https://github.com/domhnallohanlon/thunkable_extensions) and create a new branch of the repo there. Start by creating a copy of this template post which you can find in the `_posts` directory. You can use this template and existing posts as a reference for your own post. The naming convention for articles is YYYY-MM-DD-name-of-your-post.filetype, so for example this file is `2017-01-01-template.md`.
<!-- 
If you are a new contributor your posts should be added to the `_drafts` directroy so that the can be reveiwed before being added to the site. Posts that are approved are added to the `_posts` directory where they can be indexed and added to the website.
 -->
## Front Matter

At the top of every post, before you write anything else, you need to include the following information:

```YAML

---
layout: post
title:  "TITLE OF YOUR POST"
date:   2017-01-01
categories: POST CATEGORY
tags: RELEVANT TAGS
author: YOUR NAME
toc: true
---

```

The first three items, **layout**, **title** and **date** are fairly self-explanatory.

**category:** choose *one* of the the following:

- Tools, for information about the user and their device
- Camera, for extensions that interact with the camera, or that take pictures.
- Design, anything that has to do with visual appearance or aesthetics
- Monetisation, extensions that handle advertising or payments
- Bluetooth, anything to do with Bluetooth... everyone loves bluetooth.

**tags:** are space separated and should always, at a minimum, include the developers name and extension name.

**author:** the default author is Domhall, so unless you want me taking credit for your hard work put your name or nickname here.

**toc:** a simple true/false, depending on whether or not you want a table of contents beside your article (it's to the right of the screen right now if you're using a desktop computer.)

## Post Description

After the front matter, the next thing to include is a very brief (20 words or so) description of what the extension does. This text is displayed in the cards on the home page. Once you are finished add the following HTML comment:

```HTML
<!-- more -->
```

Next, every post has to have an overview.

## Overview

This table should be at the top of every page. It's a collection of links for users to get started with an extension as quickly as possible. 

| Extension Developer | LINK |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" target="_blank" hidden> Open in Thunkable</a> LINK| 
| Get the .aix | <a href="http://community.thunkable.com/t/colours-extension/2513?u=helios" hidden>Manual Download</a> LINK|
| Click-to-Copy Link | <a href="#" id="copyButton" hidden>com.vishwas.Colours.aix</a> LINK
| Donate to Developer | LINK |
| License | LINK|

<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/e/e754019115c3749479777af7a952fbf347e06927.aix</p>

## Community Links

In many case the extension will be hosted, or at the very least discussed, 
on the Thunkable communnity. If this is that case then you can include a topic-specific link in a pull quote, like so:

> If you need any help with your article just get in touch over on the [Thunkable Community](https://community.thunkable.com)


## Images

A picture paints a thousand words and, especially for users who are not native English speakers, the more visual aids you can provide the better. When creating a post for this site you can specify an **optional** feature image, that gets displayed on the home pages and you can add images directly to your article. 

### Feature Image

The feature image is specified in the yaml at the very to of the post using the image attriude. The path to all visual assets will begin `assets/post_assets/` followed by the directory you are using and the file name you want to load. 

```yaml

---
image: assets/post_assets/YOUR_FOLDER/YOUR_IMAGE.png
---

```


### In-line Images

If you are writing a markdown file you can use valid markdown or HTML.

```markdown

![Image Title](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/YOUR_FOLDER/YOUR_IMAGE.png)

```

You can also use html

```html
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/YOUR_FOLDER/YOUR_IMAGE.png">

```
