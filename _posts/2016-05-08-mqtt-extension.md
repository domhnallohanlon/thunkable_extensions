---
layout: post
title: MQTT Extension
date: 2017-05-08
categories: Tools
author: Domhnall
tags: AndresCotes MQTT IOT BLE
developer: AndresCotes
---

Add MQTT capabilities to your project with this extension


<!-- more -->

## Overview

| Extension Developer | <a href="https://community.thunkable.com/u/andres_cotes/summary" target="_blank">Andres Cotes</a> |
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/colours_extension_starter_template.asc" class="flat_btn" target="_blank" hidden> Open in Thunkable</a> Coming Soon|
| Get the .aix | <a href="http://community.thunkable.com/uploads/default/original/2X/8/8cc3e71ec9ffb609ec43e4657d7805d6f38169a6.aix" >Download</a>|
| Click-to-Copy Link | <a href="#" id="copyButton">co.com.dendritas.DendritasMqtt.aix</a>
| Donate to Developer | <a href="https://www.paypal.me/moliata" target="_blank"><input type="image" src="http://domhnallohanlon.com/thunkable_extensions/assets/images/donate_pp.png" width="94px" height="20px" hidden></a> Not Available|
| License | <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" hidden> CC-BY 4.0</a> N/A|


<!-- [![Donate](https://img.shields.io/badge/Donate-PayPal-ee6e73.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4KKW3W2H3WU9N) -->


<p hidden id="copyTarget">http://community.thunkable.com/uploads/default/original/2X/8/8cc3e71ec9ffb609ec43e4657d7805d6f38169a6.aix</p>

## Thunkable Community

>If you have any questions about the MQTT extension then head on over to the [Thunkable Community](https://community.thunkable.com/t/extension-mqtt-for-websocket-arduino-y-esp8266/3279?u=domhnall) where you'll find lots of amazing people who are happy to help you out.

## Installation

If you need any help installing an extension then take a look at our <a href="http://domhnallohanlon.com/thunkable_extensions/about.html#how_to">"How to Install an Extension"</a> guide.

## Blocks

### Events

![GotLastMessage](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/GotLastMessage.png)

When the target device returns a message the `GotLastMessage` event occurs. This event creates four local variables, Topic, Payload, Time and QoS.

### Procedures 

![Connect](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/Connect.png)

This procedure specifies which webViewer to use to connect with.
<hr>

![Disconnect](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/Disconnect.png)

Similar to the above, but for disconnecting.
<hr>

![GetLastMessage](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/GetLastMessage.png)

Requests a message from the target device.
<hr>

![Publish](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/Publish.png)
This procedure is used to publish a message. The four input parameters are Topic, Payload, Qos and webViewer.
<hr>

![StartMqtt](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/StartMqtt.png)
<hr>

![Subscribe](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/Subscribe.png)
<hr>

![Unsubscribe](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/Unsubscribe.png)


### Getters & Setters

![MQTT](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/mqtt_extension/MQTT.png)


### Troubleshooting

Documentation on the MQTT Protocol

## Example App

Coming soon! 

<!-- ![Sample Code](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/simple_tools_extension/sample_code.png) -->

## Want to Help?
There are lots of great extensions being created and updateed everyday. Keeping this site up to date is a huge task. If you want to help out find out more in the <a href="http://community.thunkable.com/t/contributing-to-thunkable-extensions-directory/3125?u=domhnall">Thunkable Community</a>

<hr />

Post written by:
<a href="https://community.thunkable.com/u/domhnall">Domhnall</a>
<br>
