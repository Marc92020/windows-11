var pattern = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'b', 'b', 'b', 'a', 'a', 'b', 'ArrowUp'];
var current = 0;

var keyHandler = function (event) {

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		document.getElementById("mydiv3").style.opacity = 1;
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
