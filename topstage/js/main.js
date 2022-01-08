////////////////////////////////////////////////////////////////////////////////////////////
// 전체 페렐렉스 스크롤
////////////////////////////////////////////////////////////////////////////////////////////
$.fn.extend({ // step 2) 제이쿼리에 메소드를 추가 (복수의 메소드를 추가할 때 사용)
	myScroll : function(option){ // myScroll 이라는 제이쿼리 메소드를 추가
		var O = $(this); // section 하나
		var page; // 현재 보고있는 페이지를 나타내는 변수
		var scroll = { // myScroll에 관련된 메소드들이 모여있는 객체 (꼭 작성해야 하는 메소드: init, action)

			init : function(){ // 기본 셋팅 메소드
				// step 3) 섹션의 높이 셋팅
				$(window).on('resize',function(){ // window가 resize 될 때마다
					var winHeight = $(window).height(); // window의 높이를 리턴

					O.each(function(i){ // section의 갯수만큼 반복
						var H;

						if (option.height&&option.height!='auto') { // option.height가 존재한다면...
							if ($.isArray(option.height)) {
								if (option.height[i]=='auto') { // 배열인자의 값이 'auto'라면 
									H = $(window).height(); // 브라우저 높이로 지정
								} else { // 숫자라면
									H = option.height[i]; // 숫자로 높이 지정
								}
								
							} else {
								H = option.height;
							}
						} else { // option.height가 없거나 false라면...
							H = $(window).height(); // window의 높이를 리턴
						}

						if(option.minHeight&&H<option.minHeight) H=option.minHeight; // section 최소 높이를 지정

						// $(this).height(winHeight); // 각 section의 높이를 지정
						// $(window).width()>option.minWidth?$(this).height(H):$(this).css('height','auto');
						if ($(window).width()>option.minWidth) {
							$(this).height(H);
						} else {
							if($(this).attr('style')) {

								$(this).attr('style', $(this).attr('style').replace(/height: .+px;/, ''));
							} else {

								O.first().height(H);
							}
						}
					});
				}).resize();

				// step 4) 스크롤이 되면 현재 페이지가 나오게
				$(document).on('scroll',function(){

					$('#works .pop .close').click();

					var baseline = $(window).scrollTop()+$(window).height()/2; // 베이스 라인 설정

					O.each(function(i){ // 각 section 만큼 반복
						var H = $(this).offset().top;
						if (baseline>H) page = i; // section이 baseline보다 위로 올라가는 순간 그 순간이 몇번째 section인지 리턴
					});

					O.removeClass('active').eq(page).addClass('active'); // 현재 보이는 페이지에 active를 준다

					scroll.nav(page); // nav메소드 실행 - page : 현재 보이는 페이지
				}).scroll();

				// step 5) 마우스 휠 이벤트
				$('html, body').on('mousewheel',function(){ // 문서 내에서 휠이 동작했을 때

					if(option.minWidth<$(window).width()){

						if($(this).is(":animated")) return false; // 화면이 움직이는 도중에는 중지
						var winHeight = $(window).height();
						var delta; // 휠의 방향을 담을 변수
						event.wheelDelta<0?delta=1:delta=-1; // 휠방향에 따라 1/-1을 리턴

						if (winHeight>option.minHeight) { // window가 최소사이즈보다 크다면...

							if ((page==0&&delta==-1)||(page==O.length-1&&delta==1)) return false; // 1페이지보다 위로 혹은 끝페이지보다 밑으로 가고자 할때 중지시켜준다.

							scroll.action(page+=delta); // 스크롤액션을 실행
							return false; // wheel의 기본기능을 막아준다.
						}
					}
				});

				$('.pop').on('mousewheel', function(){

					var delta = event.wheelDelta*-1;

					

					var O = $(this).find('.popInner');

					var t = $(this).scrollTop();

					var Y;

					delta>0 ? Y=100 : Y=-100;

					$(this).stop().animate({
						scrollTop : t+=Y
					}, 100);

					return false;
				})

				$(window).on('keyup', function(){
					if (event.key='Escape') {
						$('#works .pop .close').click();
					}
				})

				// step 6) 네비 생성
				var nav = $('<nav class="cntNav"></nav>');
				O.last().after(nav); // 마지막 section의 뒤에 nav를 삽입
				O.each(function(i){ // 섹션의 갯수만큼 반복
					var v;
					option.nav ? v = option.nav[i] : v = ''; // 네비배열이 있으면 텍스트, 없으면 빈값
					nav.append('<i>'+v+'</i>'); // nav안에 i태그 삽입
				});
				nav.find('i').on('click', function(){ // i를 클릭하면...

					if($('html, body').is(":animated")) return false; // 화면이 움직이는 도중에는 중지
					var idx = $(this).index();
					scroll.action(idx); // 클릭한 페이지로 action메소드 실행
				});				
				scroll.nav(page); //현재페이지를 표시한다.
			},
			action : function(to){ // 동작 메소드
				var T = O.eq(to).offset().top;
				$('html, body').animate({scrollTop : T}, option.speed, option.ease);
			},
			nav : function(page){
				$('nav.cntNav i').removeClass('active').eq(page).addClass('active');
			}
		};
		scroll.init(); // 한번 실행이 된다.
	}
});

$('section').myScroll({ // step 1) section에 새로만든 메소드 myscroll을 적용
	height : [1000, 1000, 1000, 1000, 1000], // 각 section의 높이값을 배열, 숫자 또는 'auto'로 전달
	minWidth : 768, // section의 최소 높이
	minHeight : 700, // section의 최소 높이
	ease : 'easeInQuad',
	speed : 500,
	nav : ['main','aboutme','skills','works','contact']
});