---
layout: post
title: Vibrate Extension
date: 2017-05-29
categories: Tools
author: Conor
tags: Vibrate Sander Tools
developer: Sander
---

The Vibrate Extension adds some more functionality to the current vibrate method built-in to Thunkable's sound component.



<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/Sander0542/" target="_blank">Sander</a>|
| Clone Starter .aia | <a href="" class="flat_btn" target="_blank" hidden> Open in Thunkable</a>LINK|
| Get the .aix | <a href="http://www.sanderjochems.nl/appinventor/extension/3/vibrate" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">com.sanderjochems.Vibrate.aix</a>|
| Donate to Developer | <a href="https://play.google.com/store/apps/details?id=com.thunkable.android.sander542jochems.Donate" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_gp.png" width="94px" height="20px"></a>|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC 4.0 BY</a>|

<p hidden id="copyTarget">http://www.sanderjochems.nl/download/extensions/com.sanderjochems.Vibrate.aix</p>

## Thunkable Community

>If you have any questions about the Simple Tools extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/vibrate-extension/3272) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks

### HasVibrator
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/HasVibratorBlock.png" alt="HasVibratorBlock">
<br>
This block is used to detect whether the device has a vibrator. This block returns "true" if the device has a vibrator and is capable of vibrating. Otherwise, it returns "false".

### Vibrate
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/VibrateBlock.png" alt="VibrateBlock">
<br>
This block is used to activate the vibration. It is measured in miliseconds, this means that putting the number "1000" will make the device vibrate for 1 second.

### CancelVibrate
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/CancelVibrateBlock.png" alt="CancelVibrateBlock">
<br>
If, for whatever reason, you need to stop the device from vibrating, use this method. An example for using this block would be: you click a button and the device vibrates for 10 seconds, after 5 seconds you decide you want to stop the vibration, to stop it, you simply call this block.

### VibratePattern
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/VibratePatternBlock.png" alt="VibratePatternBlock">
<br>
This block allows you to create vibrations in a pattern.
* The 'vibrate' property is how long you want it to vibrate for (in miliseconds).
* The 'delay' is works in conjunction with the 'repeat' property, it specifies the time delay before repeating the vibration.
* The 'repeat' property can be set to "true" or "false".

### VibrateCancelled
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/VibrateCancelledBlock.png" alt="VibrateCancelledBlock">
<br>
Used to detect when the 'CancelVibrate' block is used.

### ErrorOccurred
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/vibrate_extension/ErrorOccurredBlock.png" alt="ErrorOccurredBlock">
<br>
If an error occurs when using the extension in an app, the blocks inside this event will be called.

<hr/>

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="http://community.thunkable.com/users/conor/">Conor</a>
<br>Thunkable Community Moderator
