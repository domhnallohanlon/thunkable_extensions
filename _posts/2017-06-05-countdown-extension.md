---
layout: post
title: Countdown Extension
date: 2017-06-05
categories: Tools
author: Luke
contributors:
- Domhnall
tags: Luke Countdown
developer: Luke
---

Quickly and easily calculate the duration between two dates using a variety of methods and easily generate a countdown in your app.


<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/LukeGackle/summary" target="_blank">Luke Gackle</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank" hidden> Open in Thunkable</a> LINK|
| Get the .aix | <a href="https://drive.google.com/file/d/0B7rz7ghBVCxuNkNjcTFDTk1Sems/view" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton" hidden>com.vishwas.ExtraComponents.aix</a> N/A
| Donate to Developer | <a href="https://www.paypal.me/Vaporeon" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px"></a>|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" hidden>CC 4.0 BY ND</a> N/A|


<!-- [![Donate](https://img.shields.io/badge/Donate-PayPal-ee6e73.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N) -->


<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/f/fd022c6df60ed822430d1b3b104eba47b5929e13.aix</p>

## Thunkable Community

>If you have any questions about the Countdown extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/countdown-extension/3730?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks


### Procedures 

![GetCountdownFromInstants](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetCountdownFromInstants.jpg)

Returns a list with the days, hours, minutes, and seconds between two dates. Arguments must be instants. This function ties in well if you have a Clock component in your project.

Returns YailList [days, hours, minutes, seconds]

![GetCountdownFromStrings](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetCountdownFromStrings.jpg)

Returns a list with the days, hours, minutes, and seconds between two dates. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm.

![GetDurationInYears](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInYears.jpg)

Returns the number of years between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm. Return value is processed through Math.floor to retrieve the nearest whole number to return.

Returns long (duration)

![GetDurationInMonths](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/.jpg)

Returns the number of months between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm. Return value is processed through Math.floor to retrieve the nearest whole number to return.

Returns long (duration)

![GetDurationInWeeks](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInWeeks.jpg)

Returns the number of weeks between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm.

Returns long (duration)

![GetDurationInDays](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInDays.jpg)

Returns the number of days between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm

Returns long (duration)

![GetDurationInHours](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInHours.jpg)

Returns the number of hours between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm.

Returns long (duration)

![GetDurationInMinutes](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInMinutes.jpg)

Returns the number of minutes between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm.

Returns long (duration)

![GetDurationInSeconds](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetDurationInSeconds.jpg)

Returns the number of seconds between given start date and end date. Arguments must be formatted correctly like MM/DD/YYYY hh:mm:ss, or MM/DD/YYYY or hh:mm.

Returns long (duration)

![GetCurrentTimeAsString](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/GetCurrentTimeAsString.jpg)

Returns a String representing the current date and time in the format MM/DD/YYYY hh:mm:ss.

Returns String (Date/time)

### Troubleshooting


## Example App

This sample code creates an app the counts down to Google I/O 2020

![Sample Code](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/Usecase.jpg)


The output of the above code will look like this:

![Demo](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/extensiontest.jpg)

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/LukeGackle/summary">Luke</a>
<br>
