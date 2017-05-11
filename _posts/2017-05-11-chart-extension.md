---
layout: post
title: Chart Maker Extension
categories: Design
author: Sivagiri
tags: Google Chart Maker
---

The Chart Maker extension allows us to create charts using the [Google Charts](https://developers.google.com/chart). The charts generated can be displayed using a [_Web Viewer_.](http://thunkable.com/reference/components/user_interface.html)

<!-- more -->

### How Google Charts work
 
Google Charts require the data to be in the form of table with rows and columns.
This extension turns the input provided into a table to generate a chart


Each column should have a label and type of data which will be entered in it . Each chart requires different format of the table to be followed. The structure of tables of different charts are discussed in the next section.

# Blocks 


### DrawPieChart

The "DrawPieChart" block is used to create a Pie Chart. [Here](https://eagereyes.org/techniques/pie-charts) is a great article that might help in understanding pie charts. 

The following example demonstrates the usage of this block :

![DrawPieChart Example](https://drive.google.com/uc?id=0ByGbJq71sO3oSmdvaFM5UU5tUU0)

 As said earlier, all the  data entered is converted into a table to generate a chart. A pie chart needs two columns, with the first one being the label for the slice and the second one being the value of the slice.
Each row represents a new slice.

The table for this example will be :

| label: Activity (type:string) | label: Hours Spent (type:number)|
|:----------:|:----------:|
|      Thunkable      |        7    |
|    Netflix        |          3  |
|        Others    |        15    |




#### Explanation of parameters 
 
  * _title_ - The title for the chart. This will be displayed at the top of the chart.
  
  * _types_ - Defines the datatype of the columns. This should be a list with  `( string,number )`  as items for DrawPieChart block as shown in the example.
  
  * _labels_ - This is a list of the labels for the columns in the table. This should be a  list of two items with the first item being the label for the data represented and the second item being the label for the numerical values. These labels are  not shown to the user.
  
  * _items_ - A list with the name for the slices in the pie chart. This list can have as many items as you want. These will be visible to the user.
  
  * _values_ - A list with the values for the slices defined in  _items_ parameter in the same order in which they are defined .


>  **Note:** The number of _items_ and the number of _values_ should be equal.


  * _webViewer_ - The [_Web Viewer_](http://thunkable.com/reference/components/user_interface.html) component in which the generated chart should be displayed.


#### Output
The above block will generate this pie chart :


![Result](https://drive.google.com/uc?id=0ByGbJq71sO3oM1VBQk9sa01NX0E)


<hr />

Post written by:
<a href="http://community.thunkable.com/u/sivagiri_visakan/">Sivagiri</a>
<br>