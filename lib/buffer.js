"use strict";
/** @module buffer */

/**
 * Make an invisible {@link canvas}.
 * @param {number} width The width of the canvas
 * @param {number} height The height of the canvas
 * @returns {canvas} A canvas DOM element
 * @private
 */
function makeCanvas(width, height) {
	var c = document.createElement("canvas");
	c.width = width;
	c.height = height;
	return c;
}

/**
 * Make an invisible canvas buffer, and draw on it.
 * @param {number} width The width of the buffer
 * @param {number} height The height of the buffer
 * @param {drawCallback} drawFun The callback that draws on the buffer
 * @returns {external:canvas} The drawn buffer
 */
function makeBuffer(width, height, drawFun) {
	var canvas = makeCanvas(width, height);
	var ctx = canvas.getContext("2d");
	drawFun(ctx);
	return canvas;
}

/**
 * Make a horizonally-flipped copy of a buffer or image.
 * @param {external:canvas|external:image} buffer The original image
 * @return {external:canvas} The flipped buffer
 */
function flipBufferHorizontally(buffer) {
	return makeBuffer(buffer.width, buffer.height, function(context) {
		context.scale(-1, 1);
		context.drawImage(buffer, -buffer.width, 0);
	});
}

/**
 * Make a vertically-flipped copy of a buffer or image.
 * @param {external:canvas|external:image} buffer The original image
 * @return {external:canvas} The flipped buffer
 */
function flipBufferVertically(buffer) {
	return makeBuffer(buffer.width, buffer.height, function(context) {
		context.scale(1, -1);
		context.drawImage(buffer, 0, -buffer.height);
	});
}

module.exports = {
	makeBuffer: makeBuffer,
	flipBufferHorizontally: flipBufferHorizontally,
	flipBufferVertically: flipBufferVertically
};
