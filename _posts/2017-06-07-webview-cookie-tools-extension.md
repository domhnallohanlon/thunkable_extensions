---
layout: post
title: Webview Cookie Tools Extension
date: 2017-06-07
categories: Tools
author: Luke
contributors:
- Domhnall
tags: Luke Webview Clear Get Set Cookies
developer: Luke
---

This extension allows you to get, set and clear all cookies in a Web Viewer within your app. 


<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/LukeGackle/summary" target="_blank">Luke Gackle</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank" hidden> Open in Thunkable</a> LINK|
| Get the .aix | <a href="https://drive.google.com/file/d/0B7rz7ghBVCxuekRXN3BkUkxIbDQ/view" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton" hidden>com.vishwas.ExtraComponents.aix</a> N/A
| Donate to Developer | <a href="https://www.paypal.me/Vaporeon" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px"></a>|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" hidden>CC 4.0 BY ND</a> N/A|


<!-- [![Donate](https://img.shields.io/badge/Donate-PayPal-ee6e73.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N) -->


<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/f/fd022c6df60ed822430d1b3b104eba47b5929e13.aix</p>

## Thunkable Community

>If you have any questions about the Webview Cookie Tools extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/webviewcookietools-extension/4305?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks


### Procedures 

![ClearCookies](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/ClearCookies.jpg)

Clears all cookies from the current app context. This method is backwards compatible with Android versions prior to API level 21(Android Lollypop) however the callback "CookiesRemoved" will not fire on earlier versions.

Returns Nothing

![HasCookies](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/HasCookies.jpg)

Returns true if there are cookies in the current context, returns false if there are no cookies set.

Returns Boolean(True or False)

![GetCookies](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/GetCookies.jpg)

Returns a String with the cookies from the specified URL, if there are no cookies this method returns an empty string.

Returns String

![SetCookie](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/SetCookie.jpg)

Sets a cookie for the specified URL in the current context.

Returns Nothing

### Events

![CookiesRemoved](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/.jpg)


This event fires when cookies have been removed from the current context. Note this event will not fire for versions of Android prior to API level 21(Android Lollipop). The boolean value `isCookiesRemoved` relates to whether cookies were removed, if there are no cookies set this returns false.


![CookieSet](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/.jpg)

This event fires when a cookie has been set, the boolean value isCookieSet relates to whether the cookie was set successfully.


### Troubleshooting


## Example App

This sample code shows how easy it is to get, set and clear cookies in your app.

![Sample Code](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/webview_cookie_tools_extension/use_case.jpg)


The output of the above code will look like this:

![Demo](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/countdown_extension/extensiontest.jpg)

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/LukeGackle/summary">Luke</a>
<br>
