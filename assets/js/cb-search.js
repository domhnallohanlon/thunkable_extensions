 $(document).ready(function () {
        var time1 = 0;
        var show = false;
        var names = new Array(); //文章名字等
        var urls = new Array(); //文章地址
        $.getJSON("assets/cb-search.json").done(function (data) {
            if (data.code == 0) {
                for (var index in data.data) {
                    var item = data.data[index];
                    names.push(item.title);
                    urls.push(item.url);
                }

                $(".cb-search-content").typeahead({
                    source: names,

                    afterSelect: function (item) {
						$(".cb-search-tool").css("display", "none");
                        show = false;
                        window.location.href = (urls[names.indexOf(item)]);
                        return item;
                    }
                });
            }
        }).error(function(data, b) { console.log("json解析错误，搜索功能暂不可用，请检查文章title，确保不含有换行等特殊符号"); });
    });
