// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// CANVAS ----------------------------------------------------------------------
var canvas = document.querySelector("canvas"); // Attach Canvas
var ctx = canvas.getContext("2d"); // Make it a 2D drawing on the canvas
// -----------------------------------------------------------------------------

// POSITION CLASSIFIER ---------------------------------------------------------
var classifier_state = []; // Array that keeps track of which object is where
var preDetState = []; // Pre Detected/Determined State
// -----------------------------------------------------------------------------

// STYLE CANVAS ----------------------------------------------------------------

// DOCUMENT AREA
ctx.rect(0, 0, 500, 800);

// RED LINES
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.moveTo(78, 199);
ctx.lineTo(78, 277);
ctx.moveTo(73, 199);
ctx.lineTo(153, 199);
ctx.moveTo(422, 602);
ctx.lineTo(422, 532);
ctx.moveTo(427, 602);
ctx.lineTo(352, 602);
ctx.stroke();
ctx.closePath();

// BLANK AREA
ctx.fillStyle = "black"
ctx.fillRect(500, 0, 780, 800);

// TEXT
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.fillText("Place your document in the", 605, 400);
ctx.fillStyle = "red";
ctx.fillText("viewing area", 975, 400);


// -----------------------------------------------------------------------------

// CLASSIFIERS -----------------------------------------------------------------
window.lampix.registerPositionClassifier([{
    posX: 78, posY: 199, width: 344, height: 403, classifier: "document" // First Rect Position
}], function (rectIndex, outlines) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}); // End Funcrion


// -----------------------------------------------------------------------------

// FUNCTIONS -------------------------------------------------------------------
// -----------------------------------------------------------------------------
