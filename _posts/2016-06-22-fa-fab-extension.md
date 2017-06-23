---
layout: post
title: Font Awesome FAB Extension
date: 2017-06-22
categories: Tools
author: Domhnall
tags: AndresCotes FAB FontAwesome
developer: AndresCotes
---

Easily add 100s of Font Awesome icons to your Floating Action Buttons (FAB) with this extension


<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/andres_cotes/summary" target="_blank">Andres Cotes</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank" hidden> Open in Thunkable</a> Coming Soon|
| Get the .aix | <a href="http://community.thunkable.com/uploads/default/original/2X/2/28c94d66b9050183630e58f757002d05d3284ef1.aix" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">co.com.dendritas.AwFontFAB.aix</a>
| Donate to Developer | <a href="https://www.paypal.me/moliata" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px" hidden></a> Not Available|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" hidden> CC-BY 4.0</a> N/A|


<!-- [![Donate](https://img.shields.io/badge/Donate-PayPal-ee6e73.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N) -->


<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/2/28c94d66b9050183630e58f757002d05d3284ef1.aix</p>

## Thunkable Community

>If you have any questions about the Font Awesome FAB extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/preview-fab-with-material-icon-ttf/4712?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks

### Events

![ClickButtonFAB](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/ClickButtonFAB.png)

This extension contains just one event. The `ClickButtonFAB` block handles what happens when the FAB is clicked.

### Procedures 

![ChangeIconFont](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/ChangeIconFont.png)

The `ChangeIconFade` procedure is used to toggle between icons. You can find all the codes for `newIconCode` in the <a href="http://fontawesome.io/cheatsheet/" target="_blank">Font Awesome Cheatsheet</a> and the duration is just a number, specifying the number of miliseconds for the transistion.
<hr>
![CreateFab](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/CreateFab.png)

The `CreateFAB` procedure must be called in order to create a FAB on the screen. You can use the *visible* and *invisible* procedures to change the visibility, but you must actually create the FAB before you can do anything else with it.
<hr>

![InvisibleFab](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/InvisibleFab.png)

Calling the `InvisibleFAB` procedure will cause the FAB to disappear. Both `duration` and `startDelay` expect numeric inputs, specifying the number miliseconds.
<hr>
![VisibleFab](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/VisibleFab.png)

Calling the `VisibleFAB` procedure will cause the FAB to appear on the screen. Don't forget that the `CreateFAB` proceudre must be called before you can make a FAB visible. Both `duration` and `startDelay` expect numeric inputs, specifying the number miliseconds.


### Getters & Setters

![ColourBackground](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/ColourBackground.png)

These blocks allow you to get or set the colour of the background of the FAB. When setting a new colour, it should be specified as a HEX colour.
<hr>
![ColourFont](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/ColourFont.png)

These blocks allow you to get or set the colour of the icon that is displayed. When setting a new colour, it should be specified as a HEX colour.
<hr>
![Elevation](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/Elevation.png)

This property is used to specify the elevation of the FAB.
<hr>
![FABSize](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/FABSize.png)

The `FABSize` setter is used to specify the diameter of the FAB in density independent pixels
<hr>
![IconCode](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/IconCode.png)

You can use the `IconCode` setter to change the icon without a transition effect or delay.
<hr>
![MarginBottom](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/MarginBottom.png)
![MarginRight](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/fab_font_extension/MarginRight.png)
These properties specify the margin along the bottom edge and right edge of the FAB.

### Troubleshooting

Changing from dev mode to production morde.

## Example App

Coming soon! 

<!-- ![Sample Code](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/simple_tools_extension/sample_code.png) -->

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/domhnall">Domhnall</a>
<br>
