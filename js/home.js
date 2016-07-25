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

var drops = (function() {
	function seed(start) {
		return {
			"x" : start,
			"y" : Math.random() * 1200
		};
	}

	function move_x(ctx, pos, start) {
		ctx.moveTo(pos.x, pos.y);
		pos = {
			"x" : pos.x + Math.random() * 100 * (start > 0 ? -1 : 1),
			"y" : pos.y 
		}
		ctx.lineTo(pos.x, pos.y);
		return pos;
	}

	function move_y(ctx, pos) { 
		ctx.moveTo(pos.x, pos.y);
		var dir = Math.random()
		pos = {
			"x" : pos.x,
			"y" : pos.y + Math.random() * 100 * (dir > 0.5 ? 1 : -1)
		};
		ctx.lineTo(pos.x, pos.y);
		return pos;
	}

	function make_lines(where, start) {
		var c = document.getElementById(where);
		var ctx = c.getContext("2d");

		ctx.beginPath();
		var pos = seed(start);
		var steps = 3;
		while (steps > 0) {
			pos = move_x(ctx, pos, start);
			pos = move_y(ctx, pos);
			steps--;
		}
		ctx.lineWidth = 0.2;
      	ctx.strokeStyle = '#ffffff';
		ctx.stroke();
	}
	var x = 100;
	while (x > 0) {
		make_lines("background1", 0);
		make_lines("background2", 400);
		make_lines("background3", 0);
		make_lines("background4", 400);
		x--;
	}
})(); 
