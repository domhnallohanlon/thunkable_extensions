
$(document).ready(function () {
  //scrollToTop
  $("#toTop").scrollToTop();
  $("#bodyToTop").scrollBodyToTop();
  // gallery
  $('.gallery-expand').galleryExpand({
    fillScreen: true,
    onShow: function (el) {
      // 沉浸状态栏
      $("#toTop").css({
        "display": 'none'
      })
      var defaultColor = $("nav.nav-extended").css("background-color");
      var a = $("#placeholder-navbar").css("background-color");
      $("meta[name='theme-color']").attr('content', a);
      $("button.back-btn").click(function () {
        $("meta[name='theme-color']").attr('content', defaultColor);
      });
      $("div#placeholder-overlay").click(function () {
        $("meta[name='theme-color']").attr('content', defaultColor);
      })
      $("#bodyToTop").css({
        "background-color": a
      })
      // code 高亮边框色
      $("pre.highlight").css({
        "border-left": "3px solid " + a,
        "box-shadow": "-1px 0px 0px 0px " + a + ", 0px 0px 0px 1px " + a
      });
      //设置a标签的颜色
      $("#postsContent a").css({
        "color": a
      })
      //设置小代码块的颜色
      $(".highlighter-rouge").css({
        "color": a,
        "border-radius": "0px"
      })
      // Carousel
      var carousel = el.find('.carousel.initialized');
      carousel.carousel({
        dist: 0,
        padding: 10
      });
      // Tabs
      $('ul.tabs').tabs();
    }
  });
  // 默认code边框颜色、返回顶部按钮，themecolor为第一个nav,
  //获取颜色
  var defaultColor = $("nav.nav-extended").css("background-color");
  //设置代码框的颜色
  $("pre.highlight").css({
    "border-left": "3px solid " + defaultColor,
    "box-shadow": "-1px 0px 0px 0px " + defaultColor + ", 0px 0px 0px 1px " + defaultColor
  });
  //设置blockquote的颜色
  $("blockquote").css({
    "border-left": "5px solid " + defaultColor,
  });
  //设置返回顶部的颜色
  $("#toTop").css({
    "background-color": defaultColor
  })
  //设置主题色
  $("meta[name='theme-color']").attr('content', defaultColor);
  //设置a标签的颜色
  $("#postsContent a").css({
    "color": defaultColor
  })
  //设置小代码块的颜色
  $(".highlighter-rouge").css({
    "color": defaultColor,
    "border-radius": "0px"
  })
  //图片弹出
  if($(".gallery-expand").css("background-color") == undefined){
    $('#postsContent img').materialbox();
  }
  $("img.lazy").load(function(){
    $(this).next().css({
      "display":"none"
    })
  })
  //lazyload images
  $("img.lazy").lazyload({
    effect : "fadeIn",
    threshold : 100
  });
  //toc
   $('#toc').toc();
   $('.toc-wrapper').pushpin({
        top: 320,
        bottom: 999999,
        offset: 0
    });
  if($('#toc').css("display") == "none"){
    $("div.toc").removeClass( "m9 l10" );
  }
    if (window.innerWidth <= 600 && $(".card-panel")){
    $("#main").removeClass("db");
  }
  $(window).resize(function(){
  if (window.innerWidth <= 600){
    $("#main").removeClass("db");
  }else {
    $("#main").addClass("db");
  }
  });
});
// 评论
var disqus = {
  load : function disqus(){
      var disqus_shortname = $("#load-disqus").attr("data");
      if(typeof DISQUS !== 'object') {
        (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
        }());
        $('#load-disqus').remove(); ///加载后移除按钮
      }
  }
}