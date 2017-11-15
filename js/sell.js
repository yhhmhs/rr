$(function () {
	// 下标
	var iNow = 1;
	// 数量
	var count = 1;
	// 定时器
	var tid = null;

	// 时间变量
	var oDate = new Date();
	var month = oDate.getMonth() + 1;
	var date = oDate.getDate() + 1;

	var h2H = $('.head-bottom .nav h2').height();
	var ulH = $('.head-bottom .nav .ul1').height();
	// 遮罩的宽高
	var maskW = $('#to_big .toBig .small .smallPh .mask').width();
	var maskH = $('#to_big .toBig .small .smallPh .mask').height();

	// 时间
	var time = month + '-' + date;
	$('#to_big .details .send2 .time').html(time);
	// function addZero (obj) {
	// 	obj < 10 ? return '0'+ obj : return obj;
	// }

	$('.head-bottom .nav').css('bottom',-h2H);
	$('.head-bottom .nav').hover(function () {
		$('.head-bottom .nav .ul1').show();
		$('.head-bottom .nav').css('bottom',-(h2H + ulH + 16));
	},function () {
		$('.head-bottom .nav').css('bottom',-h2H);
		$('.head-bottom .nav .ul1').hide();
	});
	$('.head-bottom .nav .ul1 .hui').click(function () {
		$('.head-bottom .nav .ul1').hide();
		$('.head-bottom .nav').css('bottom',-h2H);
	});

	changeColor('#mid .nav2 li a','#fd4700','#000');
	changeColor('#mid p span','green','#333');

	// 放大镜
	$('#to_big .toBig .small .smallPh').hover(function () {
		$('#to_big .details').hide();
		$('#to_big .toBig .small .smallPh .mask').show();
		$('#to_big .toBig .big').show();
		$(this).mousemove(function (evt) {
			var disY = evt.pageY - $(this).offset().top - maskH / 2;
			var disX = evt.pageX - $(this).offset().left - maskW / 2;
			var x1 = $(this).width() - maskW;
			var y1 = $(this).height() - maskH;
			var x2 = $('#to_big .toBig .big').width() - $('#to_big .toBig .big img').width();
			var y2 = $('#to_big .toBig .big').height() - $('#to_big .toBig .big img').height();
			if (disX <= 0) {
				disX = 0;
			}
			if (disY <= 0) {
				disY = 0;
			}
			if (disX >= x1) {
				disX = x1;
			}
			if (disY >= y1) {
				disY = y1;
			}
			$('#to_big .toBig .small .smallPh .mask').css('left',disX);
			$('#to_big .toBig .small .smallPh .mask').css('top',disY);

			// 对应成比例
			var top = y2 * (disY / y1);
			var left = x2 * (disX / x1);
			$('#to_big .toBig .big img').css('top',top);
			$('#to_big .toBig .big img').css('left',left);

		});
	},function () {
		$('#to_big .toBig .small .smallPh .mask').hide();
		$('#to_big .toBig .big').hide();
		$('#to_big .details').show();
	});

	$('#to_big .toBig .small .select li').hover(function () {
		$('#to_big .toBig .small .select li').removeClass('active');
		$(this).addClass('active');
		var _src = $(this).children().attr('src');
		$('#to_big .toBig .small .smallPh a img').attr('src',_src);
		$('#to_big .toBig .big img').attr('src',_src);
	},function () {
		$('#to_big .toBig .small .select li').removeClass('active');

	});


	$('#to_big .details .bottom .div1 div').click(function () {
		$('#to_big .details .bottom .div1 div').removeClass('bg');
		$(this).addClass('bg');
	});
	// 分享
	var shareH = $('#to_big .details .bottom .buy .icon1 .share').height();
	var icon1H = $('#to_big .details .bottom .buy .icon1').height();
	$('#to_big .details .bottom .buy .icon1').hover(function () {
		// 判断向上滚动的距离 决定可视区的显示
		if ($(document).scrollTop() <= 210) {
			$('#to_big .details .bottom .buy .icon1 .share').css('top',-shareH);
			$('#to_big .details .bottom .buy .icon1 .share').show();
		} else {
			$('#to_big .details .bottom .buy .icon1 .share').css('top',icon1H);
			$('#to_big .details .bottom .buy .icon1 .share').show();
		}
	},function () {
		$('#to_big .details .bottom .buy .icon1 .share').hide();
	});

	$('#to_big .details .bottom .buy .icon1 .share .ul1 li').mouseenter(function () {
		$('#to_big .details .bottom .buy .icon1 .share .ul1 li').removeClass('bg2');
		$(this).addClass('bg2');
	});

	// 数量的增加
	$('#to_big .details .bottom .buy .count2 .btnA').click(function () {
		count++;
		if (count >= 15) {
			alert('最多选15个');
			count = 15;
		}
		$('#to_big .details .bottom .buy .count2 input').val(count);
	});
	$('#to_big .details .bottom .buy .count2 .btnS').click(function () {
		count--;
		if (count <= 0) {
			alert('不能少于1个');
			count = 1;
		}
		$('#to_big .details .bottom .buy .count2 input').val(count);
	});

	$('#to_big .details .bottom .buy-btn .btn1').click(function () {
		$(this).css('background','#f60');
		$(this).css('color','#fff');
		$('#to_big .details .bottom .buy-btn .btn2').css('backgroundColor','#fff');
		$('#to_big .details .bottom .buy-btn .btn2').css('color','#f60');
		$('#to_big .details .bottom .buy-btn .btn2 i').css('backgroundPositionY',-37);
	});
	$('#to_big .details .bottom .buy-btn .btn2').click(function () {
		$('#to_big .details .bottom .buy-btn .btn1').css('background','#fff');
		$('#to_big .details .bottom .buy-btn .btn1').css('color','#f60');
		$(this).css('backgroundColor','#f60');
		$(this).css('color','#fff');
		$('#to_big .details .bottom .buy-btn .btn2 i').css('backgroundPositionY',-7);
	});

	// 点击滚动
	var liH = $('#hot-sell .topGun ul li').height();
	var ulH = $('#hot-sell .topGun ul').height(liH * $('#hot-sell .topGun ul li').length);
	// 定时器
	next();
	clearInterval(tid);
	tid = setInterval(next,2000);
	$('#hot-sell .topGun ul').css('top',-liH * 3);
	$('#hot-sell .up-down .up').click(function () {
		iNow--;
		if (iNow == 0) {
			$('#hot-sell .topGun ul').stop().animate({'top': -liH * 3 * iNow},500,function () {
				$('#hot-sell .topGun ul').css('top',-liH * 3 * 2);
			})
			iNow = 2;
		} else {
			$('#hot-sell .topGun ul').stop().animate({'top': -liH * 3 * iNow},500);
		}
	});
	// 鼠标移入
	$('#hot-sell').hover(function () {
		clearInterval(tid);
	},function () {
		tid = setInterval(next,2000);
	});
	$('#hot-sell .up-down .down').click(next);

	function next () {
		iNow++;
		if (iNow == 3) {
			$('#hot-sell .topGun ul').stop().animate({'top': -liH * 3 * iNow},500,function () {
				$('#hot-sell .topGun ul').css('top',-liH * 3);
			})
			iNow = 1;
		} else {
			$('#hot-sell .topGun ul').stop().animate({'top': -liH * 3 * iNow},500);
		}
		
	}

	$('#hot-sell .topGun ul li').hover(function () {
		$('#hot-sell .topGun ul li').removeClass('border4');
		$(this).addClass('border4');
	},function () {
		$('#hot-sell .topGun ul li').removeClass('border4');
	});

	function changeColor (obj,color1,color2) {
		$(obj).hover(function () {
			$(this).css('color',color1);
		},function () {
			$(this).css('color',color2);
		});
	}
});