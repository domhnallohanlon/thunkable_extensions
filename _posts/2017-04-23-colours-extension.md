---
layout: post
title: Colours Extension
categories: Design
tags: Helios Colours HEX RGB
---

Developed by Helios, this extension allows you to convert #HEX colours to (R G B) and vice versa. It also allows you to lighten, darken and mix colours. 

<!-- more -->

## Overview

| Extension Author | <a href="http://community.thunkable.com/users/helios/">Helios</a> |
| Quick Start Link| <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank"> Open app in Thunkable</a>|
| Get the .aix | <a href="http://community.thunkable.com/t/colours-extension/2513?u=helios">Manual Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">com.vishwas.Colours.aix</a>
| Donate to Developer | LINK |
| License | LINK|

<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/e/e754019115c3749479777af7a952fbf347e06927.aix</p>
 
## Installation

You can either follow all the steps as shown in the animation below or you can add the starter project directly to your thunkable by clicking <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank"> here.</a>

![installation](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/install_ce.gif)


### HexToRGB {#h2r}

The <span class="block procedure">Colours1.HexToRGB</span> block takes a #HEX colour and converts it into a lisp list in the format (R G B). 

![h2r](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/colours_h2r.png)

Note that you must include the # symbol otherwise the missing character will generate a runtime error such as <code>length=6; regionStart=5; regionLength=2</code>

![err_L6](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/err_l6.png)

### RGBToHEX {#r2h}

The <span class="block procedure">Colours1.RGBToHex</span> block takes a lisp list and converts it to a #HEX format number.

![r2h](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/colours_r2h.png)

### Lighten & Darken {#landd}

Both the lighten and darken blocks require two input aruments. 
The **colour** input expects a list in the form (R G B), rather than an integer as an input.
The **amount** input expects an input anywhere between 0 and 1.

The lighten and darken blocks return a (R G B) list, so if you want to apply this as a text or background colour somewhere in your app make sure you pass it through a <span class="block split">make color</span> block, which you can find in the colours category of blocks, but you have to remove the <span class="block list">make a list</span> block first. 

Here are two basic examples of using the lighten and darken procedures.
![darken](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/colours_darken.png)
![lighten](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/colours_lighten.png)

### Mix Colours {#mix}

In keeping with the previous blocks, the inputs for this block, <code>ColourA</code> and <code>ColourB</code> are (R G B) lists, and the <code>amount</code> argument accepts a number anywhere between 0 and 1.

The example below shows how use either a default colour or a custom colour as an input and mix them together. 

Again, the return type from this block is a (R G B) list so don't forget to pass it through a <span class="block split">make color</span> block if you want to use it to assign a colour to a component in your design.

![mix](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/colours_extension/colours_mix.png)

## Download

The full extension can be dowloaded from the [Thunkable community](http://community.thunkable.com/t/colours-extension/2513?u=helios), along with Helios' documentation and sample app.


