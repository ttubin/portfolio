$(document).ready(function(){
	////////////////////////////////////////////////////////////////////////////////////////////
	// 메인화면 텍스트
	////////////////////////////////////////////////////////////////////////////////////////////
	consoleText(['웹퍼블리셔', '프론트앤드'], 'text');

	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#5c2525'];

		var visible = true;
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id);

		window.setInterval(function() {
			if (letterCount === 0 && waiting === false) {
				waiting = true;

				target.innerHTML = words[0].substring(0, letterCount)

				window.setTimeout(function() {
					var usedColor = colors.shift();
					colors.push(usedColor);

					var usedWord = words.shift();
					words.push(usedWord);

					x = 1;

					target.setAttribute('style', 'color:' + colors[0])
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;

				window.setTimeout(function() {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000)

			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount)
				letterCount += x;
			}
		}, 150)
	}
/**/
	////////////////////////////////////////////////////////////////////////////////////////////
	// 햄버거 메뉴
	////////////////////////////////////////////////////////////////////////////////////////////
	$('.hdHam').click(function(){
		$(this).toggleClass('open');
		$('.hdNav').toggleClass('active');
		$('.hdNav').find('a').click(function(){
			$('.hdNav').removeClass('active');
			$('.hdHam').removeClass('open');
		})

	});
/**/
	////////////////////////////////////////////////////////////////////////////////////////////
	// skills 프로그레스 바
	////////////////////////////////////////////////////////////////////////////////////////////
	$.fn.lineBar = function(option){

		var O = $(this);
		var state;

		var bar = {
			init : function(){				

				O.find('.prgbar').each(function(i){
					$(this).append('<em style="float: left; height: 100%; background-color: '+option.barColor[i]+'"></em>');
				})

				$(document).scroll(function(){

					var baseline = $(window).scrollTop()+$(window).height();

					if(O.offset().top<baseline){
						bar.action();
					}
				}).scroll();

			},
			action : function(){

				if (state) return false;

				var I = 0;			

				function increase (){

					if (I>=100) return false;
					state = true;
					O.find('.prgList').each(function(i){
						if ($(this).find('.prgtext').text()*1<option.percent[i]) {
							$(this).find('.prgtext').text(I);
							$(this).find('.prgbar em').css('width', I+'%');
						}						
					});
					I++;
					setTimeout(increase, 10/option.speed);
				}
				increase();
			}
		}
		bar.init();
	}

	$('#prgLine').lineBar({
		speed : 0.7,
		barColor : ['#ea7361', '#b74242', '#ea7361', '#b74242', '#ea7361', '#b74242'],
		percent : [90, 80, 30, 40, 80, 60]
	});
/**/
	$(function(){
		var canvas = document.querySelectorAll('.barGraph canvas');

		var ctxArray = [];
		for(i=0;i<canvas.length;i++){
			ctxArray.push(canvas[i].getContext('2d'))
		}

		var state;
		var W,H;
		$(window).resize(function(){

			W = $('.barGraph').innerWidth();
			H = $('.barGraph').innerHeight();

			ctxArray.forEach(function(v,i){
				v.canvas.width = W;
				v.canvas.height = H;
			});
		}).resize();

		var barArray = [];
		var bar = {
			draw : function(animate){

				ctxArray.forEach(function(O,I){
					O.progress = 0;
					animate ? bar.update(O,I) : bar.set(O,I);
				});
			},
			update : function(O,I,interval){

				var percent = O.canvas.getAttribute('data-percent');
				var barColor = O.canvas.getAttribute('data-barColor');
				var barWidth = O.canvas.getAttribute('data-barWidth');
				var time = O.canvas.getAttribute('data-time');

				setTimeout(function(){

					if (O.progress<=percent*(time*2)) {

						var txt = Math.floor(O.progress/(time*2));
						$('.barText').eq(I).text(txt);

						O.clearRect(0, 0, W, H);

						O.beginPath();
						O.arc(W/2,H/2,W/2-barWidth/2,Math.PI*(-0.5),Math.PI*((O.progress*(0.01/time))-0.5));
						O.strokeStyle=barColor;
						O.lineWidth=barWidth;
						O.stroke();

						bar.update(O,I);
						O.progress++;
					}
				},interval);
			},
			set : function(O,I){
				var percent = O.canvas.getAttribute('data-percent');
				var barColor = O.canvas.getAttribute('data-barColor');
				var barWidth = O.canvas.getAttribute('data-barWidth');
				var time = O.canvas.getAttribute('data-time');

				var txt = O.canvas.getAttribute('data-percent');
				$('.barText').eq(I).text(txt);

				O.clearRect(0, 0, W, H);

				O.beginPath();
				O.arc(W/2,H/2,W/2-barWidth/2,Math.PI*(-0.5),Math.PI*((percent*(0.02))-0.5));
				O.strokeStyle=barColor;
				O.lineWidth=barWidth;
				O.stroke();
			}
		}
		
		$(window).scroll(function(){

			var baseLine = $(window).scrollTop()+$(window).height();
			var barOffset = $('#barWrap').offset().top;
			if (baseLine>barOffset&&!state) {
				bar.draw(true);
				state = true;
			}
		});

		$(window).on('resize',function(){		
			if (state) bar.draw(false);
		});
	});

	////////////////////////////////////////////////////////////////////////////////////////////
	// works 슬라이더 부분
	////////////////////////////////////////////////////////////////////////////////////////////
	$('.owl-carousel').owlCarousel({
	    items: 1,
	    loop: true,
	    nav: true,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 3000
	});
/**/

	////////////////////////////////////////////////////////////////////////////////////////////
	// works 팝업
	////////////////////////////////////////////////////////////////////////////////////////////
	$('.wmore').click(function(){
		var O = $(this).parents('.slide');
		
		var tit = O.find('.wtit').text();
		var desc = O.find('.wdesc').text();
		var font = O.find('.wfont').text();
		var tool = O.find('.wtools').text();
		var img = O.attr('data-img');
		var color1 = O.find('.wcolor1').css('background-color');
		var color2 = O.find('.wcolor2').css('background-color');
		var color3 = O.find('.wcolor3').css('background-color');
		var ctext1 = O.find('.wctext1').text();
		var ctext2 = O.find('.wctext2').text();
		var ctext3 = O.find('.wctext3').text();
		var site = O.attr('data-site');

		$('.pop .tit').text(tit);
		$('.pop .desc').text(desc);
		$('.pop .font').text(font);
		$('.pop .tools').text(tool);
		$('.pop .image').html('<img src="'+img+'">');
		$('.pop .color1').css('background-color',color1);
		$('.pop .color2').css('background-color',color2);
		$('.pop .color3').css('background-color',color3);
		$('.pop .colortxt1').text(ctext1);
		$('.pop .colortxt2').text(ctext2);
		$('.pop .colortxt3').text(ctext3);
		$('.pop .site').attr('href',site);

		$('#works .pop').add('#modal').show();
	});

	$('#works .pop .close').on('click', function(){
		$('#works .pop').add('#modal').hide();
	});
/**/
});