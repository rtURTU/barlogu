var textMove = (function() {
	var id = "textMove";

	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");

	var x = 10;
	var y = 50;

	var textPull = [
		{
			size : 20,
			txt : "PbInfo",
			x : 30,
			y : 50,
			dx : 1 
		},
		{
			size : 20,
			txt : "Codeforces",
			x : 100,
			y : 100,
			dx : 2
		},
		{
			size : 10,
			txt : "Programare dinamica",
			x : 10,
			y : 120,
			dx : 2
		},
		{
			size : 10,
			txt : "Teoria grafurilor",
			x : 24,
			y : 160,
			dx : 2.2
		},
		{
			size : 20,
			txt : "Infoarena",
			x : 40,
			y : 180,
			dx : 1.5
		}
	];

	function drawText(textField) {
		context.font = "" + textField.size + "px Arial";
		context.fillText(
			textField.txt, 
			textField.x, 
			textField.y
		);
		textField.x += textField.dx;
		if (textField.x > canvas.width) {
			textField.x = -10 * textField.txt.length;
		}
	};

	function draw() {
		for (var i = 0; i < textPull.length; ++i) {
			var textField = textPull[i];
			drawText(textField);
		}
	}

	function clear() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	};


	var intervalSetter = function() { 
		clear();
		draw();
	};
	intervalSetter();

	return intervalSetter;
})();

$(function () {
	var timerId = 0;

  	$('#textMove').mouseenter(function () {
		timerId = setInterval(textMove, 10);
  	});

  	$('#textMove').mouseleave(function () {
   		clearInterval(timerId);
  	});
});

$(function(){
	$('#about').mouseenter(function() {
		$(this).attr('src', 'media/bear.gif');
	});
	$('#about').mouseleave(function() {
		$(this).attr('src', 'media/bear.png');
	});
});

$(function(){
	$('#standings').mouseenter(function() {
		$(this).attr('src', 'media/home.gif');
	});
	$('#standings').mouseleave(function() {
		$(this).attr('src', 'media/home.png');
	});
});
