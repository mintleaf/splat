"use strict";

function Keyboard(keyMap) {
	this.keys = {};

	var that = this;
	for (var kc in keyMap) {
		if (keyMap.hasOwnProperty(kc)) {
			this.keys[keyMap[kc]] = 0;
		}
	}
	window.addEventListener("keydown", function(event) {
		if (keyMap.hasOwnProperty(event.keyCode)) {
			if (that.keys[keyMap[event.keyCode]] === 0) {
				that.keys[keyMap[event.keyCode]] = 2;
			}
			return false;
		}
	});
	window.addEventListener("keyup", function(event) {
		if (keyMap.hasOwnProperty(event.keyCode)) {
			that.keys[keyMap[event.keyCode]] = 0;
			return false;
		}
	});
}
Keyboard.prototype.isPressed = function(name) {
	return this.keys[name] >= 1;
};
Keyboard.prototype.consumePressed = function(name) {
	var p = this.keys[name] === 2;
	if (p) {
		this.keys[name] = 1;
	}
	return p;
};

module.exports = Keyboard;
