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
ctx.moveTo(30, 30);
ctx.lineTo(30, 100);
ctx.moveTo(25, 30);
ctx.lineTo(100, 30);
ctx.moveTo(470, 770);
ctx.lineTo(470, 700);
ctx.moveTo(475, 770);
ctx.lineTo(400, 770);
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
