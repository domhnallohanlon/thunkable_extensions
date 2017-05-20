---
layout: post
title: FAB Extension
date: 2017-05-14
categories: Design
tags: Pavitra Sander FAB
developer: Pavitra and Sander
---

The Floating Action Button, or FAB, is one of the most distinctive design features of Material Design, and with this extension you can easily add one to your app.  

<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/pavi2410/" target="_blank">Pavitra</a> and <a href="http://www.sanderjochems.nl/appinventor/extension/4/floatingactionbutton" target="_blank">Sander</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/fab/fab_starter_template.asc" class="flat_btn" target="_blank"> Open in Thunkable</a>|
| Get the .aix | <a href="https://community.thunkable.com/uploads/default/original/2X/5/594cd84a60e4d7dce28de3af3eb889a8ac47a2f7.aix" >Manual Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">com.sander0542_pavitra.FAB.aix</a>
| Donate to Developers | N/A |
| License | N/A </a>|

<p hidden id="copyTarget">https://community.thunkable.com/uploads/default/original/2X/5/594cd84a60e4d7dce28de3af3eb889a8ac47a2f7.aix</p>

## Thunkable Community

>If you have any questions about the FAB Extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/fab-extension-material-ui-feature/3488?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

You can either follow all the steps as shown in the animation below or you can add the starter project directly to your thunkable by <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/fab/fab_starter_template.asc" class="flat_btn" target="_blank">clicking here.</a>

![installation](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/install_ce.gif)

## Blocks

### Events

These event handlers are used when the FAB is pressed and when the user presses and holds down the FAB.

![Click](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Click.png)
![Long Click](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/LongClick.png)

### Procedures

The **Create** procedure has to be run in order to make a FAB visible on the screen. If you change any properties before creating the FAB you will cause an error, so the best practice is to create at start-up and then change the visibility if you need it hidden.
![Init](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Initialize.png)


### Settings

**Color**
Gets the colour of the FAB or sets it, using standard colors.
![Color](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Color.png)

**Icon**
The getter returns the path of the FAB image and the setter allows you to specify a new image to use. Have a look at the example app to see this is action.
![Icon](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Icon.png)

**Is Created**
The block returns a boolean (true/false) depending on whether or not a FAB has been created successfully.
![is create](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/IsCreated.png)

**Margins**
You can specify the distance from the bottom and right edges of the screen using these blocks.
![margins](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Margins.png)

**Mini Size**
This is another boolean (true/false) value that specifies where or not you want to use a standard size or mini size FAB.
![mini size](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/MiniSize.png)

**Visible**
Toggle the visibility of a FAB with these components
![visibility](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Visible.png)

**FAB1**
This components is especially useful for when you are working with multiple FABs
![FAB1](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/Fab1.png)

## Troubleshooting

Unlink a normal button, the FAB need to have an Icon specified. If you try to create a FAB and the icon property is still set to none you will see the following error.

![Error](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/error.png)

## Example

This is the code for the starter project. If you like you can open this starter template directly in Thunkable by clicking <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/fab/fab_starter_template.asc" target="_blank">here. </a>

![Sample App](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_extension/sample_code.png)


## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/domhnall">Domhnall</a>
<br>
