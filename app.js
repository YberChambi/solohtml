setInterval(function(){ 
	var display = document.querySelector(".date");
	var date = new Date();
	var h =  date.getHours();
	var m =  date.getMinutes();
	var s =  date.getSeconds();
	var texto = display.innerHTML = "<h1>" + h + ":" + m + ":" + s + "<h1>";

	//mover segundos
	var hours = document.querySelector(".hours").style.transform = 'rotate('+ 30 * h+'deg)';;
	var minutes = document.querySelector(".minutes").style.transform = 'rotate('+ 6 * m+'deg)';;
	var seconds = document.querySelector(".seconds").style.transform = 'rotate('+ 6 * s+'deg)';;
	console.log(seconds);
}, 1000);