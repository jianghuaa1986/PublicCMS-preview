var __={init:function(){$(function(){__.a.markOuterLink();__.screenBox.init()})},create:function(){return new Object},screenBox:{init:function(){function a(){$(".screenBox").parent().height($(window).height()-parseInt($("body").css("padding-bottom"))-parseInt($("body").css("padding-bottom")))}if($(".screenBox")){a();$(window).resize(function(){a()})}}},width:function(){$("body").css("overflow","hidden");var a=$(window).width();$("body").css("overflow","auto");return a},textarea:{autoHeight:function(c){var a=c.height();function b(){if(c[0].scrollHeight-10>a){c.height(c[0].scrollHeight+10)}else{c.height(a)}}b();c.keyup(function(){b()})},},a:{markOuterLink:function(){$("a[href^=http],a[href^=\\/\\/]").addClass("outer-link-a")},},};__.init();__.CreateCards=function(){var a=__.create();a.getTotal=function(){var b=__.width();if(b>=1850){return 4}else{if(b>=1530){return 3}else{if(b>=960){return 2}else{if(b>=640){return 1}else{return 0}}}}};a.total=a.getTotal();a.draw=function(c,d){var b=false;c.find("section").each(function(){var e=$(".cards>li:first");$(".cards>li:gt(0):lt("+a.total+")").each(function(){if(e.height()>$(this).height()){e=$(this)}});$(this).css("opacity","0").appendTo(e).animate({opacity:"1"});if("function"==typeof d){d($(this))}if(!b){b=true}});return b};a.resize=function(){var c=this.total;this.total=this.getTotal();if(c>this.total){$(".cards>li:eq("+c+")").find("section").each(function(){$(this).appendTo($("#data"))});this.draw($("#data"))}else{if(this.total>c){var b=Math.floor($(".cards>li>section").length/$(".cards>li:lt("+(this.total+1)+")").length)-1;$(".cards>li:lt("+this.total+")").each(function(){$(this).find("section:gt("+b+")").each(function(){$(this).appendTo($("#data"))})});this.draw($("#data"))}}};a.init=function(){$(function(){for(var b=$(".cards>li").length;b<5;b++){$("<li></li>").appendTo($(".cards"))}$('<div id="data"></div>').hide().appendTo($("body"));if(1<$(".cards>li:first").children().length&&1<=a.total){$(".cards>li:first").find("section").each(function(c){$(this).appendTo($("#data"))});a.draw($("#data"))}$(window).resize(function(){a.resize()})});return this};return a};__.CreateFooter=function(a){var b=__.create();if("number"!=typeof a){a=5}b.run=false;b.interval=a*1000;b.timer=setInterval("__.footer.scroller()",b.interval);b.current=0;b.scroller=function(c){var d=$(".footer-scroller>p").length;if(d<=1){$(".footer-scroller .controller").hide()}if("number"==typeof c){this.current=c}else{if(this.run){this.current=this.current+1}}if(this.current<0){this.current=d-1}if(this.current>=d){this.current=0}$(".footer-scroller").stop().animate({"margin-top":"-"+(this.current*46)+"px"})};b.changeText=function(c,d){c.find("span").text(d)};b.message=function(d,c){if("undefined"==typeof c){c=""}if("undefined"==typeof d||""==d){d="empty message"}this.scroller(0);return $('<p class="text-center '+c+'"><span>'+d+"</span></p>").hide().prepend($('<a href="javascript:void(0)" class="close">close</a>').click(function(){$(this).parent().remove()}).hide().delay(1000).fadeIn()).prependTo($(".footer-scroller")).slideDown("fast")};b.loading=function(){this.run=false;return this.message("loading...")};b.complete=function(c,d){this.resize();c.slideUp("slow",function(){$(this).remove();if("function"==typeof d){d()}})};b.resize=function(){var c=__.width();if(c>=1210){this.run=false;this.scroller(0)}else{this.run=true}};b.init=function(){$(function(){b.resize();$(".footer-scroller,.footer-scroller-controller").bind("click",function(){b.run=false;setTimeout("__.footer.resize()",5000)});$(".footer-scroller-controller .next").click(function(){b.scroller(b.current+1)});$(".footer-scroller-controller .previous").click(function(){b.scroller(b.current-1)});$(window).resize(function(){b.resize()})});return this};return b};__.CreateDataLoader=function(c,e,a,d){var b=__.create();b.url=c;b.startpage=e;b.pages=a;b.message;b.loading=false;b.getData=function(){this.message=__.footer.loading();this.loading=true;this.startpage+=this.pages;$.ajax({url:this.url+this.startpage,success:function(g,f){if("success"==f){if(__.cards.draw($(g,d))){__.footer.complete(b.message,function(){b.loading=false;if($(document).height()-$(window).height()<=$(window).scrollTop()){b.load()}})}else{b.loading=true;b.message.addClass("red");__.footer.changeText(b.message,"load data complete!")}}else{b.message.addClass("red");__.footer.changeText(b.message,"load data error")}},error:function(f,h,g){b.message.addClass("red");__.footer.changeText(b.message,"load data error")}})};b.load=function(){if(!this.loading&&($(document).height()-$(window).scrollTop())<=$(window).height()+5){this.getData()}};b.init=function(){$(function(){b.load();$(window).scroll(function(){b.load()});$(window).resize(function(){b.load()})});return this};return b};__.cards=__.CreateCards().init();__.footer=__.CreateFooter(5).init();var _hmt=_hmt||[];(function(){var b=document.createElement("script");b.src="//hm.baidu.com/hm.js?b3eecd444f274cd3b3bf74dc1e02e8c1";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})();