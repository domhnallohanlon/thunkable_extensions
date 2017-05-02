- jekyll-theme-materialize
	- [预览](#user-content-预览)
	- [安装](#user-content-安装)
		- [使用gem](#user-content-使用gem)
		- [使用git](#user-content-使用git)
	- [更新](#user-content-更新)
	- [用法](#user-content-用法)
		- [config](#user-content-config)
		- [post](#user-content-post)
		- [otherPage](#user-content-otherPage)
		- [addPage](#user-content-addPage)
		- [友情链接](#user-content-友情链接)
		- [myherfs](#user-content-myherfs)
		- [manyAuthors](#user-content-manyAuthors)
	- [注意1](#user-content-注意1)
	- [注意2](#user-content-注意2)
	- [TODO](#user-content-todo)
	- [License](#user-content-license)

# jekyll-theme-materialize

![](https://ooo.0o0.ooo/2017/03/15/58c9345cdcfdf.png)

[![Build Status](https://travis-ci.org/KeJunMao/jekyll-theme-materialize.svg?branch=master?style=flat-square)](https://travis-ci.org/KeJunMao/jekyll-theme-materialize)

[![jekyll-theme-materialize Version](https://badge.fury.io/rb/jekyll-theme-materialize.svg)](https://badge.fury.io/rb/jekyll-theme-materialize)

[![discord](https://img.shields.io/badge/discord-jekyll--theme--materialize-blue.svg)](https://discord.gg/JnaQkfz)

[![qq](https://img.shields.io/badge/QQ%20Group-Jekyll%20Materialize-blue.svg)](https://jq.qq.com/?_wv=1027&k=46Ds7oY)

## 预览

[coding page（中国）](http://kejun.coding.me/jekyll-theme-materialize/)
[github page](https://kejunmao.github.io/jekyll-theme-materialize/)

## 安装

有两种安装方法，一种是gem安装，另一种是`git clone`。

> 主题正在开发阶段建议您使用git clone的方法安装，这样您可以获取最新开发版本，而gem版本是略微稳定或新功能推出、已知bug修复的版本。

### 使用gem

若使用gem，您需要手动新建一些文件，和文件夹，如`links.md`、`_data`等

添加下行到你 Jekyll 的 `Gemfile`文件中:

```ruby
#安装主题
gem "jekyll-theme-materialize"
```

添加下行到你 Jekyll 的`_config.yml`文件中 :

```yaml
#启用主题
theme: jekyll-theme-materialize
```
然后执行:

    $ bundle

或手动执行:

    $ gem install jekyll-theme-materialize

### 使用git

```bash
$ git clone https://github.com/KeJunMao/jekyll-theme-materialize.git
$ cd jekyll-theme-materialize
$ bundle install
$ bundle exec jekyll s -w
```
## 更新

    $ bundle

## 用法

下面的内容能极大的帮助你使用本主题，请务必仔细阅读。

### config

将如下内容添加到你Jekyll 的`_config.yml`文件中，请注意替换为你自己的信息：

```yaml
title: KeJun | BLOG
email: kejun1997@gmail.com
description: 二次元智障
url: "https://blog.kejun.tk/" 

# icon
icon-16x16: images/icon/favicon-16x16.ico
icon-32x32: images/icon/favicon-32x32.ico

# theme color ,具体的值请参考http://materializecss.com/color.html
theme-color: { 
  default-color: green, 
  home-color: green,
  about-color: red,
  archive-color: pink,
  links-color: purple,
  tags-color: blue
} 

# mobile nav
mobile-hp: /images/tx.jpg       # 头像
mobile-bg: /images/userbg.png   # 背景,若填写theme则使用主题色。

# header 背景图片
header-bg: /assets/images/bg.png

# disqus
disqus-shortname: blog-kejun-tk #disqus shortname

# cdn
cdnurl: https://cdnurl.com/ #cdn

#google_analytics
google_analytics:

#多个作者
defaultAuthor: KeJun #默认作者
defaultAuthorImage: assets/images/tx.jpg #默认作者头像
manyAuthors: false

# 是否使用gallery
gallery: false
```

### post

每一个新的文章均需要添加如下yaml:

```yaml
---
layout: post        # 指定模板
title:  "toc test"
date:   2017-03-04 10:42:06 +0800
categories: NoImage # 分类，首页显示,该项经常用于检测是否为post。请注意，每个文章仅支持一个分类。
image:              # 图像，用于首页，若留空将以NoImage的形式显示, 暂不支持跨域图像。
tags: jekyll ubuntu # 标签，用于tags页面，允许多个
toc: *              # 确定是否显示toc目录，默认为不显示。
comments: true      # 是否显示评论
author:             # 若指定作者名，请开启多作者功能，否则将以默认作者显示。
---
```
### otherPage

请注意jekyll根目录下的`.md`文件的`layout`与`_layout`文件下的文件对应.如：

* `index.md`

```yaml
---
layout: home
---
```

* `links.md`

```yaml
---
layout: links
---
```

* `tags.md`

```yaml
---
layout: tags
---
```

* `about.md`

```yaml
---
layout: about
---
```

* `archive.md`

```yaml
---
layout: archive
---
```

### addPage

如需新增page，建议按：

* 根目录新建 `pageName.md`,并在头信息中键入如下：

```yaml
---
title: pageName         # 标题
layout: pageName        # 模板,建议为标题或文件名，若以文章形式输出，layout 填写 about 并编辑该.md文件即可，无需下一步 。
describe: pageName      # 描述
toc: *                  # 确定是否显示toc目录。
comments: true          # 是否显示评论
---
```

* 在`_layout`目录下新建`pageName.html`，并键入如下：

```yaml
--- 
layout: default 
---
```

这样你就成功引入了`head`，`header`，`main`，`script`，`footer`。然后编辑刚刚新建的`pageName.html`即可添加自定义`html`。

> 你新增的页面将以`_config.yml`文件中的 `default-color` 作为主题色。如果你知道你在干什么，你也可以编辑`header`和`footer`。

### 友情链接

友情链接在`_data/links.yml`中，要删除或新增，请遵循如下格式：

```yaml
- name: Halyul
  image: images/links/halyul.png
  url: https://halyul.com/
  describe: Material Design爱好者
```

### myherfs

footer的各种站点URL,请按如下格式填写至`_data/myherfs.yml`的url即可，！请勿更改name！：

```yaml
# 请不要填写太多否则会很丑。
- name: twitter
  url: https://twitter.com/yrmkejun

- name: facebook
  url: 

- name: weibo
  url: 

- name: instagram
  url: 

- name: tumblr
  url: 

- name: github
  url: https://github.com/KeJunMao

- name: linkedin
  url: 

- name: zhihu
  url: 

- name: bilibili
  url: 

- name: telegram
  url: 

- name: gplus
  url:
```

若想要自定义顺序，你可以调整他们的整体顺序。

### manyAuthors

当启用多作者 `manyAuthors: true` 后，您可以在文章yaml处指定作者，为了避免重复指定头像url，您必须在`_data/authors.yml`按如下格式设置：

```yaml

- name: Jekyll
  image: assets/images/links/jianyuyouhun.jpg

- name: Other
  image: assets/images/links/halyul.png

```

## 注意1

该主题引用的`gallery.min.opt.js`及`gallery-materialize.min.opt.css`文件并没有经过原开发者同意。若侵权，请告知并删除。

你可以在`main.js`中自定义首页文章的GalleryExpand效果：

| Option  | Description |
| ------------- | ------------- |
|inDuration	| Transition duration for opening the gallery in ms. Default: 300|
|outDuration |	Transition duration for closing the gallery in ms. Default: 200|
|responsiveThreshold |	Breakpoint for full width style in pixels. Default: 992|
|contentPadding |	Padding for content in the gallery in pixels. Default: 40|
|onShow |	Callback function that is fired when the gallery is opened.|
|defaultColor |	Fallback color for when color thief fails. Default: '#444'|
|fillScreen |	Enable the full width image transition style. Default: false|

## 注意2

目前，绝大多数本地url添加了前置`baseurl`，如果造成了无法引入的问题，请提出：<a class="github-button" href="https://github.com/KeJunMao/jekyll-theme-materialize/issues">Issue</a>

## TODO

* disqus     # 完成
* toc        # 完成
* 图像加载动画 # 完成
* 搜索        # 完成
* 二次元化选项 
* cdn 支持    # 完成
* google analytics        # 完成
* 分享
* 显示作者     #完成
* post layout images点击放大出现的位置错误
* home 和 archive 文章图片使用图床时的跨域问题（因为使用javascript优化了加载）
* 不依赖ruby gems的i18n
* homepage,请看[demo](https://kejun.space/)，[仓库地址](https://coding.net/u/KeJun/p/homepage/git)。
* 配合homepage ，传入友链和links,当博客更新时，homepage也可以更新。请看[demo](https://kejun.space/#other),[json](https://coding.net/u/KeJun/p/myblog/git/blob/master/assets/postsAndLinks.json)。
* gallery 开启与关闭。# 完成

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).