window.onload = function(){
	// 天下 图片的鼠标移入事件
	$('.tian').mouseover(function(){
		$('.tian1').hide();
		$('.tianBox').show();
	}).mouseout(function(){
		$('.tian1').show();
		$('.tianBox').hide();
	})
	// 顶部右侧ul下的li的鼠标移入事件
	$('.top ul li').each(function(index){
		// console.log($('.top ul li'));
		$('.top ul li').eq(index).mouseover(function(){
			$(this).css({'background':'#F4F4F4','border-bottom':'4px solid #BA0E00'});
		}).mouseout(function(){
			$(this).css({'background':'','border-bottom':''});
		})
	})
	
	// 网易游戏全目录 鼠标移入事件
	$('.wang').mouseenter(function(){
		$('.wang_box').slideDown('slow');
	}).mouseleave(function(){
		$('.wang_box').slideUp('slow');
	})
	
	// 官网首页 头部导航条的鼠标移入事件
	$('.navMiddle ul li').each(function(index){
		$('.navMiddle ul li').eq(index).mouseover(function(){
			$(this).css({'background':'url(./imgs/navmove.jpg)'});
		}).mouseout(function(){
			$(this).css({'background':''});
		})
	})
	
	// 微信公众号的鼠标移入改变图片
	$('.weixin').mouseover(function(){
		// console.log(111);
		$('.weixin_pic').css({'background-position':'-670px -433px'});
		$('.weixin_box').show();
	}).mouseout(function(){
		$('.weixin_pic').css({'background-position':'-409px -220px'});
		$('.weixin_box').hide();
	});
	// 进入口袋版的鼠标移入改变图片
	$('.enter').mouseover(function(){
		//console.log(111);
		$('.enter_pic').css({'background-position':'-376px -219px'});
	}).mouseout(function(){
		$('.enter_pic').css({'background-position':'-585px -476px'});
	});
	
	// 顶部导航条右侧 游戏充值9.8折  无缝轮播
	var ul = $('.youBox ul').clone().prependTo($('.youBox'));
	var len = $('.youBox li').length;
	var liHeight = $('.youBox li').eq(0).height();
	var ulHeight = liHeight *len/2;
	
	var step = 1;
	var run;
	function autoRun(){
		clearInterval(run);
		run = setInterval(function(){
			if($('.you').scrollTop()>ulHeight){
				$('.you').scrollTop(0);
			}
			
			var newScrollTop = $('.you').scrollTop()+step;
			$('.you').scrollTop(newScrollTop);
			// console.log(newScrollTop);
			if($('.you').scrollTop()%liHeight==0 && $('.you').scrollTop()>0){
				clearInterval(run);
				setTimeout(function(){
					autoRun();
				},2000)
			}
		},10)
	}
	setTimeout(function(){
		autoRun();
	},2000)
	
	//----------------页面主要部分  分为左、中、右三部分 到视频专区和图库精选上方截止-----------------------------------------
	// 左侧
	// 下载游戏鼠标移入事件
	$('.xia').mouseover(function(){
		$(this).css({'background-position':'0px 0px'});
	}).mouseout(function(){
		$(this).css({'background-position':'-230px 0px'});
	})
	// 账号注册
	$('.zhang').mouseover(function(){
		$(this).css({'background-position':'-230px -258px'});
	}).mouseout(function(){
		$(this).css({'background-position':'0px -346px'});
	})
	// 账号充值
	$('.chong').mouseover(function(){
		$(this).css({'background-position':'-230px -132px'});
	}).mouseout(function(){
		$(this).css({'background-position':'0px -258px'});
	})
	
	// 藏宝阁
	$('.bao ul li').mouseover(function(){
		$(this).css({'background':'#251E18'});
		$(this).children('span').css({'color':'#FFC766'});
	}).mouseout(function(){
		$(this).css({'background':''});
		$(this).children('span').css({'color':''})
	});
	// 福利中心
	$('.fu').mouseover(function(){
		$('.fuli').css({'background-position':'-440px -574px'});
	}).mouseout(function(){
		$('.fuli').css({'background-position':'-409px -574px'});
	});
	// 资料查询
	$('.zi').mouseover(function(){
		$('.message').css({'background-position':'-677px -179px'});
	}).mouseout(function(){
		$('.message').css({'background-position':'-677px -151px'});
	});
	// 新手指南
	$('.fresh').mouseover(function(){
		$('.freshman').css({'background-position':'-619px -475px'});
	}).mouseout(function(){
		$('.freshman').css({'background-position':'-198px -575px'});
	});
	// 品牌站
	$('.brandStation').mouseover(function(){
		$('.brand').css({'background-position':'-610px -575px'});
	}).mouseout(function(){
		$('.brand').css({'background-position':'-641px -575px'});
	});
	
	//-----------全新主角导航--------- 
	$('.newBox').mouseover(function(){
		$(this).css({'border-color':'#D2C1A1'});
	}).mouseout(function(){
		$(this).css({'border-color':'#FAF9F6'});
	})
	
	
	// ----------------------轮播图-----------------------------------
	var lis = $('#lun>ul>li');
	// console.log(lis);
	var lis_num = $('.list_num>ul>li');
	// console.log(lis_num);
	
	var i=0;
	var len = lis.length;
	var run1;
	// 函数 定时器
	function autoRun1(){
//		if(run1){
//			return;	
//		}
		run1 = setInterval(function(){
			lis.eq(i).fadeOut(500);
			lis_num.eq(i).removeAttr('class');
			
			i++;
			
			if(i==len){
				i=0;
			}
			
			lis.eq(i).delay(100);
			lis.eq(i).fadeIn(900);
			lis_num.eq(i).attr('class','active_num');
			
		},1500);
	};
	
	autoRun1();
	
	$('#lun').mouseover(function(){
		clearInterval(run1);
	}).mouseout(function(){
		autoRun1();
	})
	
	var j=0;
	lis_num.each(function(index,item){
		lis_num.eq(index).mouseover(function(){
			clearInterval(run1);
			lis.eq(i).fadeOut(500);
			lis_num.eq(i).removeAttr('class');
			
			i = lis_num.eq(index).attr('data-num');
			
			lis.eq(i).delay(100);
			lis.eq(i).fadeIn(900);
			lis_num.eq(i).attr('class','active_num');
		})
	})
	
	//	---------------轮播图下面的 最新 新闻 维护div ------------------------------
	//	导航条的鼠标移入和移出事件
	$('.newsNav ul li').each(function(index){
		$('.newsNav ul li').eq(index).mouseover(function(){
			$(this).attr('class','active');
			// 其他兄弟元素移除类名
			$(this).siblings().removeAttr('class');
			// 显示每个li对应的内容
			$('.newsDiv').eq(index).show();
			// console.log($('.newsDiv').eq(1));
			$('.newsDiv').eq(index).siblings().hide();
			
		}).mouseout(function(){
			$(this).siblings().removeAttr('class');
		});
	})
	
	// ----------------------右侧 -----------------------------------
	// 暖男大爆料 导航li的鼠标移入和移出事件
	$('.nuanNav ul li').each(function(index){
		$('.nuanNav ul li').eq(index).mouseover(function(){
			$(this).css({'border-bottom':'3px solid #C41E20'});
			$('.nuanOne').eq(index).show();
			$('.nuanOne').eq(index).siblings().hide();
		}).mouseout(function(){
			$(this).css({'border-bottom':'none'});
		});
	})
	
	// 推荐 通玄妙镜 回顾 鼠标移入移出事件
	$('.introR_nav ul li').each(function(index){
		$('.introR_nav ul li').eq(index).mouseover(function(){
			$(this).attr('class','active');
			$(this).siblings().removeAttr('class','active');
			if(index==1){
				$(this).css({'width':'118px'});
			}
			if(index==0){
				$(this).next().css({'width':'118px'});
			}
			// 对应li下的内容显示
			$('.introOne').eq(index).show();
			$('.introOne').eq(index).siblings().hide();
		}).mouseout(function(){
			
		});
	})
	
	/* 日历 客服 每个li的hover事件 */
	
//	$('.date .day ul li').each(function(index){
//		$('.date .day ul li').eq(index).mouseover(function(){
//			console.log(111);
//			$(this).attr('class','active_day');
//		})
//	})
	
	/* 客服 */
	$('.kefu').mouseover(function(){
		$(this).css('background-image','url(./imgs/entry_h_f98001b.jpg)');
		$('.tool2').css({'background-position':'-628px -377px','width':'40px'});
		$('.kefuText2').css({'color':'#fff'});
	}).mouseout(function(){
		$(this).css('background-image','');
		$('.tool2').css({'background-position':'-586px -377px','width':'45px'});
		$('.kefuText2').css({'color':''});
	});
	// 工具
	$('.tools').mouseover(function(){
		$(this).css('background-image','url(./imgs/entry_h_f98001b.jpg)');
		$('.tool3').css({'background-position':'-460px -377px','width':'42px','margin-top':'8px'});
		$('.kefuText3').css({'color':'#fff'});
	}).mouseout(function(){
		$(this).css('background-image','');
		$('.tool3').css({'background-position':'-586px -430px','width':'45px','margin-top':''});
		$('.kefuText3').css({'color':''});
	});
	// 排行
	$('.pai').mouseover(function(){
		$(this).css('background-image','url(./imgs/entry_h_f98001b.jpg)');
		$('.tool4').css({'background-position':'-544px -377px','width':'40px'});
		$('.kefuText4').css({'color':'#fff'});
	}).mouseout(function(){
		$(this).css('background-image','');
		$('.tool4').css({'background-position':'-502px -377px','width':'45px'});
		$('.kefuText4').css({'color':''});
	});
	// 套装
	$('.tao').mouseover(function(){
		$(this).css('background-image','url(./imgs/entry_h_f98001b.jpg)');
		$('.tool5').css({'background-position':'-604px -508px','width':'40px'});
		$('.kefuText5').css({'color':'#fff'});
	}).mouseout(function(){
		$(this).css('background-image','');
		$('.tool5').css({'background-position':'-562px -508px','width':'45px'});
		$('.kefuText5').css({'color':''});
	});
	// 养育
	$('.yang').mouseover(function(){
		$(this).css('background-image','url(./imgs/entry_h_f98001b.jpg)');
		$('.tool6').css({'background-position':'0px -575px','width':'42px','height':'42'});
		$('.kefuText6').css({'color':'#fff'});
	}).mouseout(function(){
		$(this).css('background-image','');
		$('.tool6').css({'background-position':'-646px -508px','width':'45px'});
		$('.kefuText6').css({'color':''});
	});
	
	// 日历 工具 下面的活动时间 轮播图
	// 左右箭头的单击事件
	var len2=$('.lun2 ul li').length;
	// console.log(len);
	var index = 0;
	// 左箭头
	$('.lun2 .leftJian').click(function(){
		// console.log(111);
		$('.lun2 ul li').eq(index).removeAttr('class');
			index--;
			if(index<0){
				index=len2-1;
			}
		$('.lun2 ul li').eq(index).attr('class','lun2_active');
	});
	// 右箭头
	$('.lun2 .rightJian').click(function(){
		// console.log(111);
		$('.lun2 ul li').eq(index).removeAttr('class');
			index++;
			if(index==len2){
				index=0;
			}
		$('.lun2 ul li').eq(index).attr('class','lun2_active');
	});
	
	//	图库精选的li的鼠标移入和移出事件
	// 热门牛图
	$('.niu').mouseover(function(){
		$(this).css({'background':'url(./imgs/niu1.jpg)'});
		$('.niu2').css({'background':'url(./imgs/daniu2.jpg)'});
		$('.box1').fadeIn('slow');
		$('.box2').hide();
	})
	// 大话最牛
	$('.niu2').mouseover(function(){
		$(this).css({'background':'url(./imgs/daniu.jpg)'});
		$('.niu').css({'background':'url(./imgs/niu2.jpg)'});
		$('.box2').fadeIn('slow');
		$('.box1').hide();
	})
	
	// ------------------- 最新攻略  手风琴----------------------------
//	$('.lueTitle').each(function(index){
//		$('.lueTitle').eq(1).click(function(){
//			$('.xin2').css({'left':'107px'});
//			$(this).css({'background':'url(./imgs/wan1.png)'});
//			
//		});
//	})

	$('#gong ul li').click(function(){
		$(this).stop(true).animate({width:'558px'},500).siblings().stop(true).animate({width:'107px'},500);
	})
	
	
	
	
	// ----------------------同人专区---------------------------------
	$('.zhen').mouseover(function(){
		$(this).css({'background':'url(./imgs/zhen1.jpg)'});
		$('.hua').css({'background':'url(./imgs/hua2.jpg)'});
		
	})
	// 大话画廊
	$('.hua').mouseover(function(){
		$(this).css({'background':'url(./imgs/hua1.jpg)'});
		$('.zhen').css({'background':'url(./imgs/zhen2.jpg)'});
		
	})
	
	
	// ---------------------同人专区下的轮播图 ---------------------------   
	
	var he = $('.lun3Box>ul');
	// console.log(he);
	var dian = $('.dian_num>ul>li');
	// console.log(dian);
	
	var a=0;
	var len3 = he.length;
	var run3;
	// 函数 定时器
	function autoRun3(){
		run3 = setInterval(function(){
			he.eq(a).fadeOut(500);
			dian.eq(a).removeAttr('class');
			a++;
			if(a==len3){
				a=0;
			}
			he.eq(a).delay(100);
			he.eq(a).fadeIn(500);
			dian.eq(a).attr('class','slide_num');
		},2000);
	};
	
	autoRun3();
	
	var k=0;
	dian.each(function(index,item){
		dian.eq(index).mouseover(function(){
			clearInterval(run3);
			he.eq(a).fadeOut(500);
			dian.eq(a).removeAttr('class');
			
			a = dian.eq(index).attr('data-num');
			
			he.eq(a).delay(100);
			he.eq(a).fadeIn(500);
			dian.eq(a).attr('class','slide_num');
		})
	})
	
	var a = 0;
	// 左箭头的单击事件
	$('.jianZ').click(function(){
		he.eq(a).fadeOut(500);
		dian.eq(a).removeAttr('class');
		a--;
		if(a<0){
			a=len3-1;
		}
		he.eq(a).delay(100);
		he.eq(a).fadeIn(500);
		dian.eq(a).attr('class','slide_num');
	});
	// 右箭头的单击事件
	$('.jianY').click(function(){
		console.log(111);
		he.eq(a).fadeOut(500);
		dian.eq(a).removeAttr('class');
		a++;
		if(a==len3){
			a=0;
		}
		he.eq(a).delay(100);
		he.eq(a).fadeIn(500);
		dian.eq(a).attr('class','slide_num');
	});
	
	//-----------------------产品推荐 轮播图-------------------------
	
	// 克隆一份ul 追加到showList中
	var ul = $('.showList>ul').clone().prependTo($('.showList'));
	// console.log(ul);
	// 所有li的数量
	var len4 = $('.showList>ul>li').length;
	// console.log(len4);  // 10
	// 第一个li的宽度
	var liWidth = $('.showList>ul>li').eq(0).width();
	// console.log(liWidth);
	// ul的宽度
	var ulWidth = liWidth * len4/2;
	// console.log(ulWidth);
	
	var step = 1;
	var run4;
	
	function autoRun4(){
		clearInterval(run4);
		run4 = setInterval(function(){
			if($('.showBox').scrollLeft() >= ulWidth){
				$('.showBox').scrollLeft(0);
			}
			// 移动之后的值
			var newScrollLeft = $('.showBox').scrollLeft()+step;
			// 设置滚动条的值
			$('.showBox').scrollLeft(newScrollLeft);
			if($('.showBox').scrollLeft()%liWidth==0 && $('.showBox').scrollLeft()>0){
				clearInterval(run4);
				setTimeout(function(){
					autoRun4();
				},2000);
			}
			
		},10);
	}
	
	//setTimeout(function(){
		autoRun4();
		autoRun5();
	//},2000);
	
	
	// ------------数字-----------
	var number = $('.number>ul>li');
	// console.log(number);
	var b = 0;
	var run5;
	function autoRun5(){
		run5 = setInterval(function(){
			number.eq(b).removeAttr('class','hui');
			number.eq(b).attr('class','number_active');
			b++;
			if(b<len4/2){
				b=0;
			}
			number.eq(b).removeAttr('class','hui');
			number.eq(b).attr('class','number_active');
		},3000)
	}
	
	//-----------------------------常用资料-------------------------
	$('.often_news a').each(function(index){
		// console.log($('.often_news a').eq(index));
		$('.often_news a').eq(index).mouseover(function(){
			$(this).attr({'class':'often_news_active'});
			$(this).siblings().removeAttr('class');
			$('.often_big_div>div').eq(index).show();
			$('.often_big_div>div').eq(index).siblings().hide();
	
		})
	})
	
	
	//---------------------------------奖品多滑动-------------------------
	var isBg = true;
	$('#jprq_box .jt').click(function(){
		if(isBg){
			$('#jprq_box .jt').css('background-position','-159px -575px');
			$('#jprq_box .jt').animate({'right':'60px'},500);
			$('.jprq_box_left').animate({'width':'0px'},100);
			$('.tuandui').delay(100).animate({'width':'1180px'},900);
			isBg = false;
		}else{
			$('#jprq_box .jt').animate({'right':'25px'},500);
			$('#jprq_box .jt').css('background-position','-81px -575px');
			$('.tuandui').animate({'width':'250px'},900);
			$('.jprq_box_left').delay(100).animate({'width':'914px'},300);
			isBg = true;
		}
		
	});
	
	
	// -----------固定底框-------------
	
	$('#an').click(function(){
		if($('#an img').attr("src")=='./imgs/68.jpg'){
			$('#an img').attr("src","./imgs/69.jpg");
			$('.floatNav').css('height','84px');
			$(this).css('bottom','84px');
		}else{
			$('#an img').attr("src","./imgs/68.jpg");
			$('.floatNav').css('height','0px');
			$(this).css('bottom','0px');
		}
		
	})		
	
	
	
	
	
	
	
	
	
}