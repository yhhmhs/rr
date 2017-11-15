$(function () {
	// 轮播图中的下标
	var iNow = -1;
	var iNow2 = 0;
	// 定时器
	var tid = null;
	var tid2 = null;
	// 横幅的高度 
	var bannerW = $('#banner').height();
	// 横幅图片个数
	var ph_length = $('#banner .ul2 li').length;
	// 吸顶条
	var dis2 = $('#head .head-bottom').offset().top;
	
	// 定位边框
	$('#on-web').css('height',$(document).height() + 200);
	
	// 移入变色
	changeColor('.head-top .mid .fl .li-2 a','#369000','#000');
	changeColor('.head-top .mid .fr li a','#369000','#000');
	
	// 移入显示二维码
	show_hide('.head-top .mid .fr .last a','.head-top .mid .fr li .ph');
	
	// 购物车
	show_hide('.head-bottom .car','.head-bottom .buy');
	show_hide('.head-bottom2 .car','.head-bottom2 .buy');
	changeBg('.head-bottom .car','.head-bottom .shop_car span a b',0,-20,0,-1);
	changeBg('.head-bottom2 .car','.head-bottom2 .shop_car span a b',0,-20,0,-1);
	
	// 导航选项卡
	$('.head-bottom .nav .ul1 li').mouseenter(function () {
		$('.head-bottom .nav .ul1 li').removeClass('tbBorder');
		$(this).addClass('tbBorder');
		$('.head-bottom .nav .ul1 li .list').hide();
		$(this).children().eq(2).show();
	});
	$('.head-bottom .nav .ul1').mouseleave(function () {
		$('.head-bottom .nav .ul1 li').removeClass('tbBorder');
		$('.head-bottom .nav .ul1 li .list').hide();
	});
	changeColor('.head-bottom .nav .ul1 li div dt a','#000','#fd7400');
	changeColor('.head-bottom .nav .ul1 li div dd a','#333','#666');
	$('.head-bottom .nav .ul1 li div dd a').hover(function () {
		$(this).css('text-decoration','underline');
	},function () {
		$(this).css('text-decoration','none');
	});

	// 横幅轮播图
	nextPage();
	clearInterval(tid);
	tid = setInterval(nextPage,4000);
	// 设置ul2的高
	$('#banner .ul2').height(bannerW * (ph_length + 2));
	// 首插入尾图 尾插入首图
	var firstImg = $('<li><a href="javascript:;"><img src="images/1503745176639.png"></a></li>');
	var lastImg = $('<li><a href="javascript:;"><img src="images/1503911117607.jpg"></a></li>');
	$('#banner .ul2').prepend(firstImg)
	$('#banner .ul2').append(lastImg)
	
	// 下一页
	function nextPage () {
		// 无缝效果
		iNow++;
		if (iNow == ph_length) {
			$('#banner .ul2').stop().animate({top: -(iNow + 1) * bannerW},1000,function () {
				$('#banner .ul2').css('top',-bannerW);
			});
			iNow = 0;
		} else {
			$('#banner .ul2').stop().animate({top: -(iNow + 1) * bannerW},1000);
		}
		$('#banner .ul1 li').removeClass('active');
		$('#banner .ul1 li').eq(iNow).addClass('active');
	}
	// 选项卡效果
	$('#banner .ul1 li').each(function (index,ele) {
		$(ele).click(function () {
			clearInterval(tid);
			iNow = index;
			$('#banner .ul1 li').removeClass('active');
			$(this).addClass('active');
			$('#banner .ul2').stop().animate({top: -(iNow + 1) * bannerW},1000);
		});
	});
	// 鼠标移入移出时
	$('#banner').hover(function () {
		clearInterval(tid);
	},function () {
		clearInterval(tid);
		tid = setInterval(nextPage,4000);
	});

	// 商品展第一层
	$('.show1 li').hover(function () {
		$(this).children().children().eq(0).stop().animate({'marginLeft': 6});
		$(this).children().children().eq(1).stop().animate({'marginLeft': 16});
	},function () {
		$(this).children().children().eq(0).stop().animate({'marginLeft': 0});
		$(this).children().children().eq(1).stop().animate({'marginLeft': 10});
	});
	// 商品展第二层
	phMove('.show2 .show2-l img');
	$('.show2 .show2-r .bottom .small li').each(function (index,ele) {
		$(ele).mouseenter(function () {
			iNow2 = index;
			$('.show2 .show2-r .bottom .small li').removeClass('bgActive');
			$(this).addClass('bgActive');
			$('.show2-r .bottom .big li').hide();
			$('.show2-r .bottom .big li').eq(index).show();
			$('.show2 .show2-r .bottom .big .word h3').hide();
			$('.show2 .show2-r .bottom .big .word h3').eq(index).show();
		});
	});
	
	// 定时器
	clearInterval(tid2);
	tid2 = setInterval(show2R,3000);
	function show2R () {
		iNow2++;
		if (iNow2 == $('.show2 .show2-r .bottom .small li').length) {
			iNow2 = 0;
		}
		$('.show2 .show2-r .bottom .small li').removeClass('bgActive');
		$('.show2 .show2-r .bottom .small li').eq(iNow2).addClass('bgActive');
		$('.show2-r .bottom .big li').hide();
		$('.show2-r .bottom .big li').eq(iNow2).show();
		$('.show2 .show2-r .bottom .big .word h3').hide();
		$('.show2 .show2-r .bottom .big .word h3').eq(iNow2).show();
	}
	// 鼠标移入
	$('.show2 .show2-r .bottom').hover(function () {
		clearInterval(tid2)
	},function () {
		tid2 = setInterval(show2R,3000);
	});

	// 商品展第三层
	$('.show3 .top a').hover(function () {
		$(this).css('backgroundPositionX',-385);
	},function () {
		$(this).css('backgroundPositionX',0);
	});
	phMove('.show3 .fruit-r img');
	phMove('.show3 .meet-r img');
	phMove('.show3 .drink-r img');
	phMove('.show3 .drink .ul1 img');
	phMove('.show3 .drink .div2 img');
	phMove('.show3 .word a');
	phMove('.show3 .fruit-r .buy a');
	changeColor('.show3 .word a','#369000','#000');
	$('.show3 li').hover(function () {
		$(this).children().eq($(this).children().length - 1).slideDown();
	},function () {
		$(this).children().eq($(this).children().length - 1).slideUp();
	});

	// 悬浮定位
	$('#fixed li').hover(function () {
		$(this).css('background','#fd7400');
	},function () {
		$(this).css('background','');
	});
	$('#fixed .li-hide').hover(function () {
		$(this).children().eq(1).show();
		$(this).children().eq(1).stop().animate({left: -$(this).children().eq(1).width()},500);
	},function () {
		$(this).children().eq(1).hide();
		$(this).children().eq(1).stop().animate({left: -150},500);
	});
	$('#fixed .ul2 .li3').hover(function () {
		$('#fixed .ul2 li .erweima').fadeIn();
	},function () {
		$('#fixed .ul2 li .erweima').fadeOut();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() != 0) {
			$('#fixed .ul2 .li4').show();
		} else {
			$('#fixed .ul2 .li4').hide();
		}
		// 吸顶条
		if ($(window).scrollTop() >= dis2) {
			$('#head .head-bottom2').show();
			$('#head .head-bottom2').addClass('bgColor');
			$('#head .head-bottom2').css('left',0);
			$('#head .head-bottom2').css('top',0);
		} else {
			$('#head .head-bottom2').hide();
			$('#head .head-bottom2').removeClass('bgColor');
			$('#head .head-bottom2').css('left',null);
			$('#head .head-bottom2').css('top',null);
		}
	});

	// 懒加载
	lazyLoad();
	$(window).on('scroll resize',lazyLoad);

	function lazyLoad () {
		var disY = $(window).height() + $(document).scrollTop();
		$('img').each(function (index,ele) {
			var top = $(ele).offset().top;
			if (top <= disY) {
				$(ele).attr('src',$(ele).attr('_src'));
			}
		});
	}

	// 取数据
	$('.head-bottom .search input').on('input propertychange',function () {
		$.ajax({
			url: 'http://www.egu365.com/autocomplete.action',
			data: {query: $(this).val()},
			dataType: 'jsonp',
			success: function (str) {
				console.log(str.value)
			}
		});
	});


	// 图片的移动
	function phMove (obj) {
		$(obj).hover(function () {
			$(this).stop().animate({'marginLeft': 6},300);
		},function () {
			$(this).stop().animate({'marginLeft': 0},300);
		});
	}
	// 移入变色
	function changeColor (obj,color1,color2) {
		$(obj).hover(function () {
			$(this).css('color',color1);
		},function () {
			$(this).css('color',color2);
		});
	}
	// 显示与隐藏
	function show_hide (obj1,obj2) {
		$(obj1).hover(function () {
		$(obj2).show();
		},function () {
			$(obj2).hide();
		});
	}
	function changeBg (obj1,obj2,x1,y1,x2,y2) {
		$(obj1).hover(function () {
			$(obj2).css('backgroundPositionX',x1);
			$(obj2).css('backgroundPositionY',y1);
		},function () {
			$(obj2).css('backgroundPositionX',x2);
			$(obj2).css('backgroundPositionY',y2);
		});
	}
});