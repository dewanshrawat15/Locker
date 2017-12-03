$(function(){
	var sum=0;
	$(window).keydown(function(e){
		var x=e.keyCode;
		sum=sum+x;
		console.log(sum);
		if(sum==889){
			window.location.replace('http://dewanshrawat15.github.io')
		}
	})
	var i=0;
	setInterval(function(){
		++i;
		if(i==9){
			i=0;
		}
		var lft;
		lft=(-1)*(i*100);
		$('.viewer').animate({'left': ''+lft+'%'}, 300)
	}, 4500)
})
