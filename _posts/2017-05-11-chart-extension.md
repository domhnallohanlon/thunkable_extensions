---
layout: post
title: Chart Maker Extension
categories: Design
author: Sivagiri
tags: Google Chart Maker
developer: Kate Manning and Emily Kager
---

The Chart Maker extension,developed by Kate Manning and Emily Kager allows us to create charts using the [Google Charts](https://developers.google.com/chart). The charts generated can be displayed using a [_Web Viewer_.](http://thunkable.com/reference/components/user_interface.html)

<!-- more -->

## Overview

| Extension Developer | [Kate Manning](https://github.com/laghee), [Emily Kager](https://github.com/ekager) and Ellen Spertus|
| Clone Starter .aia | <a href="http://app.thunkable.com/?repo=https://raw.githubusercontent.com/domhnallohanlon/thunkable_extensions/gh-pages/assets/aia_repo/ChartMakerExtension_starter_template/ChartMakerExtension_starter_template.asc" class="flat_btn" target="_blank"> Open in Thunkable</a> |
| Get the .aix | <a href="https://github.com/MillsCS215AppInventorProj/chartmaker/blob/master/edu.mills.appinventor.ChartMaker.aix">Manual Download</a> |
| Click-to-Copy Link | <a href="" id="copyButton" >edu.mills.appinventor.ChartMaker.aix</a>
|

<p hidden id="copyTarget">https://github.com/MillsCS215AppInventorProj/chartmaker/raw/master/edu.mills.appinventor.ChartMaker.aix</p>


### How Google Charts work

Google Charts require the data to be in the form of table with rows and columns.
This extension turns the input provided into a table to generate a chart


Each column should have a label and type of data which will be entered in it . Each chart requires different format of the table to be followed. The structure of tables of different charts are discussed in the next section.

# Blocks


### DrawPieChart

The "DrawPieChart" block is used to create a Pie Chart. [Here](https://eagereyes.org/techniques/pie-charts) is a great article that might help in understanding pie charts.

The following example demonstrates the usage of this block :

![DrawPieChart Example](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/DrawPieGraph.png)

 As said earlier, all the  data entered is converted into a table to generate a chart. A pie chart needs two columns, with the first one being the label for the slice and the second one being the value of the slice.
Each row represents a new slice.

The table for this example will be :

| label: Activity (type:string) | label: Hours Spent (type:number)|
|:-----------------------------:|:-------------------------------:|
|      Thunkable                |               7                 |
|      Netflix                  |               3                 |
|      Others                   |               15                |




#### Explanation of parameters

  * _title_ - The title for the chart. This will be displayed at the top of the chart.

>**Note :** All the single quotes `(')` used in any pararameter of this extension should be escaped (i.e written written with a slash like this `\'`


  * _types_ - Defines the datatype of the columns. This should be a list with  `( string,number )`  as items for DrawPieChart block as shown in the example.

  * _labels_ - This is a list of the labels for the columns in the table. This should be a  list of two items with the first item being the label for the data represented and the second item being the label for the numerical values. These labels are  not shown to the user.

> In a `list from csv row` , each value separated by a comma is a item in a list.

  * _items_ - A list with the name for the slices in the pie chart. This list can have as many items as you want. These will be visible to the user.

  * _values_ - A list with the values for the slices defined in  _items_ parameter in the same order in which they are defined .


>  **Note:** The number of _items_ and the number of _values_ should be equal.


  * _webViewer_ - The [_Web Viewer_](http://thunkable.com/reference/components/user_interface.html) component in which the generated chart should be displayed.


#### Output
The above block will generate this pie chart :


![Result](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/PieChart.jpg)


## DrawBarGraph
This block is used to create a simple bar graph.
The parameters are used in the same way in which they are used in `DrawPieChart` blocks.
The same explanations given above apply for this block too.
#### Example
![DrawBarGraph](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/DrawBarGraph.png)
<br>

#### Output
![BarGraph](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/BarGraph.jpg)

### DrawLineGraph
The DrawLineGraph block generates a line graphs from the given input.

#### Example

![DrawLineGraph](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/DrawLineGraph.png)


<br>
<br>

The data is given in the above block can be visualized in the form of the following table :

| X-Axis value   | Guardians of the galaxy (Y-Axis)    |The Avengers (Y-axis) | Transformers: Age of Extinction (Y-Axis) |
| :------------: | :---------------------------------: |:--------------------:|:----------------------------------------:|
| 1              |  37.0                               |  80.8                |  40.8                                    |
| 2              |  30.9                               |  69.5                |  32.4                                    |
| 3              |  25.4                               |  57                  |  25.7                                    |
| 4              |  11.7                               |  18.8                |  10.5                                    |
| 5              |  11.9                               |  17.6                |  10.4                                    |
| 6              |  8.8                                |  13.6                |  7.7                                     |
| 7              |  7.6                                |  12.3                |  9.6                                     |


#### Explanation of parameters

* _chartTitle_ - The title of the graph that will be displayed.

* _hAxisTitle_ - The title for the horizontal axis that will be displayed near the axis.

* _vAxisTitle_ - The title for the vertical axis that will be displayed near the axis.

* _labels_ - A list of label for the lines to be drawn. Should equal the number of lines.

* _values_ - A list of lists . Each item in the list inside the main list is a co-ordinate of point to be plotted . In the co-ordinates list (i.e each list inside the main list) ,the first item always represents the X-coordinate . The following items represents Y-coordinate of the lines in the same order in which they are defined in the _labels_ parameter.

* _webViewer_ - The [_Web Viewer_](http://thunkable.com/reference/components/user_interface.html) component in which the generated chart should be displayed.


The above example uses <span class="block list">list from csv table</span> block to define the points to be plotted . **C**omma **S**eperated **V**alue (csv) table is a simple table in which each line represents a row and each value seperated by comma represents data in a column. The value in the `data ` variable used in the above example is defined by a string that contains the following text:
```
1,  37.8, 80.8, 41.8\n2,  30.9, 69.5, 32.4\n3,  25.4,   57, 25.7\n4,  11.7, 18.8, 10.5\n5,  11.9, 17.6, 10.4\n6,   8.8, 13.6,  7.7\n7,   7.6, 12.3,  9.6
```
<br>

The same output can be achieved using this block in the _values_ :

![Another Method](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/alternative.png)
#### Output
The above example of DrawLineGraph block produces the following graph :
![LineGraph](http://domhnallohanlon.com/thunkable_extensions/assets/post_assets/ChartMaker_Extension/LineGraph.jpg)

<hr />

Post written by:
<a href="http://community.thunkable.com/u/sivagiri_visakan/">Sivagiri</a>
<br>
