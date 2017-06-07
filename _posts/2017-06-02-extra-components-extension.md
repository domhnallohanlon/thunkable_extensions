---
layout: post
title: Extra Components Extension
date: 2017-06-02
categories: Tools
author: Helios
contributors:
- Domhnall
tags: Helios Extra Components Toggle Switch
developer: Helios
---

This extension adds the functionality of components that are missing in the designer palette. It currently supports only the Toggle button, but more it is under active development.


<!-- more -->

## Overview

| Extension Developer | <a href="http://community.thunkable.com/users/helios/" target="_blank">Helios</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank" hidden> Open in Thunkable</a> LINK|
| Get the .aix | <a href="http://community.thunkable.com/uploads/default/original/2X/f/fd022c6df60ed822430d1b3b104eba47b5929e13.aix" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">com.vishwas.ExtraComponents.aix</a>
| Donate to Developer | <a href="https://www.paypal.me/moliata" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px" hidden></a> Not Available|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC 4.0 BY ND</a>|


<!-- [![Donate](https://img.shields.io/badge/Donate-PayPal-ee6e73.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N) -->


<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/f/fd022c6df60ed822430d1b3b104eba47b5929e13.aix</p>

## Thunkable Community

>If you have any questions about the Extra Components extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/the-extracomponents-extension/4125?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks


### Procedures 

![CreateToggle](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/CreateToggle.png)
This method is used to create the toggle button on the screen.

Add a Horizontal arrangement to the screen where you want the toggle button to appear.
Define this arrangement in the horizontalArrangement parameter.
The horizontal arrangement, in effect, is the toggle itself. If the arrangement is not visible, the toggle is hidden too. The toggle button is added to the top-left of the arrangement. 
Using this approach eliminates irritating calculations and conversions with px and dp, and also helps the toggle scale uniformly.

The x and y coordinates are specified in pixels.
The thumbColour is the colour of the draggable circle specified in hex format.
The trackColour is the colour of the rounded rectangle which carries the thumb, also specified as hex.
The id is a unique integer to identify a specific toggle button. Never create two toggle buttons with the same id. By using an id for a toggle button, you can create multiple buttons without having to drag the extension onto the screen multiple times.


This method allows you to change the colours of the toggle button during runtime.

![ToggleId](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/ToggleId.png)
With this method, you can programmatically toggle a specific button.



![EnableToggle](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/EnableToggle.png)
Programmatically enable/disable toggle buttons using this method. It is advised to use this in conjunction with the ChangeColour method as the disabled buttons do not automatically gray out.

![ChangeColor](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/ChangeColor.png)
This method allows you to change the colours of the toggle button during runtime. Colours are specified in Hex.

![CreateIndeterminateProgress](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/CreateIndeterminateProgress.png)

This method has similar parameters to the CreateToggle block. The spinning progress will be shown on the top left of the horizontal arrangement that has been selected.

### Events

![ToggleClicked](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/extra_components_extension/ToggleClicked.png)

This event is invoked whenever a toggle button is pressed. It returns if the toggle is switched on (boolean) and the id of the toggle button (int).


### Troubleshooting

Never use the same id for two components, even if one is a toggle and the other is a progress. It will overwrite the previous id.

## Example App

![Sample Code](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/simple_tools_extension/sample_code.png)

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/domhnall">Domhnall</a>
<br>
