---
layout: post
title: Arduino USB Serial Extension
date: 2017-05-02
categories: Tools
tags: Pavitra Arduino USB Serial
developer: Pavitra
---

Using this extension you can create a serial connection via USB between your phone and an Arduino

<!-- more -->
## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/pavi2410/" target="_blank">Pavitra</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/Thunkduino/thunkduino.asc" class="flat_btn" target="_blank"> Open in Thunkable</a> |
| Get the .aix | <a href="http://community.thunkable.com/uploads/default/original/2X/e/ec50d99fe3027ed3895489f4da51d49140a297a6.aix">Manual Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">com.pavitra.Arduino</a>
| Donate to Developer | N/A |
| License | <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a>|

<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/e/ec50d99fe3027ed3895489f4da51d49140a297a6.aix</p>


## Thunkable Community

>If you have any questions about the Arduino USB Serial extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/arduino-usb-serial-extension/2624?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Blocks

### Starting a Connection

![Initialize](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/initialize.png)

![Is Open](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/isOpen.png)


### Transmit and Receive Data

Once the connection has been established you can read data from the Arduino and write data to it via the read and write blocks.

![Read](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/read.png)
![Write](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/write.png)

Note that the default baud rate is 9600 bps.

### Managing the Connection

You can open and close the connection with the open and close blocks.

![Open](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/open.png)
![Close](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/close.png)


### Misc
![Arduino Object](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/arduino1.png)

## Troubleshooting

Here are a few screenshots to help you out with some common errors that can occur when using this extension. If you encounter any more please get in touch.

### Configuration {#config}

Make sure that you are using the USB Media Transfer Protocol when that Arduino is connected to your phone. The exact location will vary from phone to phone, but if you search in Settings for "USB" you should find it. On many phones, when you connect a USB device it asks you what sort of connection you would like and you can change to MTP at this stage.
![Configuration](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/configuration.png)


### Permissions {#permission}

When you launch the app for the first time you should be asked for permission to access the USB device like so: 
![Permission](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/permission.png)
If you click "Cancel" the app will not be able to communicate with the Arduino

### Runtime Error {#rte}
This error occurs when the app is unable to communicate with the Arduino.
![Run Time Error](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/arduino_extension/runtime_error.png)
It can be useful to have some sort of "refresh" button in your app to close and the open the connection to minimise these errors. 
