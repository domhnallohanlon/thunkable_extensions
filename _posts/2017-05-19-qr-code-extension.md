---
layout: post
title: QR Code Extension
date: 2017-05-19
categories: Tools
tags: NMDApps QRcode
author: Sivagiri
developer: Mika
contributors:
- Conor

---


The QR Code extension enables us to create QR codes from texts.
<!-- more -->

## Overview

| Extension Developer | <a href="https://nmd-apps.jimdo.com/extensions/nmd-extensions/#3" target="_blank">NMD Apps</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/QR_code_extension_starter_template/QR_code_extension_starter_template.asc" class="flat_btn" target="_blank" > Open in Thunkable</a> |
| Get the .aix | <a href="https://sourceforge.net/projects/released/files/com.NMD.QrCode.aix/download" >Source Forge Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton" hidden>com.NMD.QrCode.aix</a> Not supported at this time
| Donate to Developer | <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px"></a>|
| License | <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC 4.0 BY-SA</a>|


## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

<p style="background-color:#F05F5F;font-size:125%; padding: 10px">
These blocks are for the latest version (Version 3) of the extension.
</p>

## Blocks
### Background Color
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/BackgroundColorBlock.png" alt="BackgroundColorBlock">

### Front Color
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/FrontColorBlock.png" alt="FrontColorBlock">

### Size
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/SizeBlock.png" alt="SizeBlock">

### Text
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/TextBlock.png" alt="TextBlock">

### Margin
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/MarginBlock.png" alt="MarginBlock">

### Format
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/FormatBlock.png" alt="FormatBlock">

### Charset
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/CharsetBlock.png" alt="CharsetBlock">

### Create
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/CreateBlock.png" alt="CreateBlock">

### Got Response
<img src="http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/qr_code_extension/v3/GotResponseBlock.png" alt="GotResponseBlock">

<hr/>

<p style="background-color:#F05F5F;font-size:125%; padding: 10px">
The blocks below are for Version 1 and 2 of the extension.
</p>

## Blocks

**Create** (QR code)

![CreateQRCode](https://github.com/domhnallohanlon/thunkable_extensions/blob/gh-pages/assets/post_assets/v1/qr_code_extension/CreateQR.png?raw=true)

This block is used to create a QR code from a text that is given in the _Text_ parameter.

This block gives an URL of the QR code generated and can be used with _WebViewer.GoToUrl_ block of the Webviewer component or can be used in the _set Image.Picture_ block of the Image component.
Both the methods are demonstrated in the [example app](#Example).

The QR code produced is of size given in the size parameter.
<br>
For example,if the size is specified as 250 , then the generated QR code will have the dimensions of 250x250.


**DefaultText**

![DefaultText](https://github.com/domhnallohanlon/thunkable_extensions/blob/gh-pages/assets/post_assets/v1/qr_code_extension/Default%20Text.png?raw=true)

This block contains the text "Hello World !"

## Example {#Example}

The following blocks are of an app that generates QR code of the text given in a textbox and display them in both a _WebViewer_ and a _Image_ component.

![Example Blocks](https://github.com/domhnallohanlon/thunkable_extensions/blob/gh-pages/assets/post_assets/qr_code_extension/v1/blocks_example.png?raw=true)


## Troubleshooting

The **Create** block needs to have an non-empty text in the _text_ parameter.
If an empty text is used, following error is shown in the Webviewer :

![Empty Text Error](https://github.com/domhnallohanlon/thunkable_extensions/blob/gh-pages/assets/post_assets/qr_code_extension/v1/error1.jpg?raw=true)

If an _Image_ component is used to display the generated QR code with an empty text, the image will not be shown anything and will be blank.


Post written by:
<a href="http://community.thunkable.com/u/sivagiri_visakan/">Sivagiri Visakan</a>
<br>
