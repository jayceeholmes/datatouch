// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// CANVAS ----------------------------------------------------------------------
var canvas = document.querySelector("canvas"); // Attach Canvas
var ctx = canvas.getContext("2d"); // Make it a 2D drawing on the canvas
// -----------------------------------------------------------------------------

// COLORS ----------------------------------------------------------------------
var c1 = "white";
var c2 = "white";
var c3 = "white";
// -----------------------------------------------------------------------------

// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// STYLE CANVAS ----------------------------------------------------------------

// DOCUMENT AREA ---------------

// BACKGROUND
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

// BLANK AREA ---------------

// BACKGROUND
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

// REGISTER MOVEMENT ---------------------------
window.lampix.registerMovement([{
    posX: 98, posY: 219, width: 304, height: 127 // BOX 1
  }, {
    posX: 98, posY: 346, width: 304, height: 127 // BOX 2
  }, {
    posX: 98, posY: 473, width: 304, height: 127 // BOX 3
  }], function (rectIndex, outlines) {

    console.log("movement", rectIndex, outlines);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // CLEAR CANVAS

    if (rectIndex == 0) { // CALLBACK FOR BOX 1
      data1(); // Visualize Data
      drawIA(); // Draw
    } // END 0

    if (rectIndex == 1) { // CALLBACK FOR BOX 2
      data2(); // Visualize Data
      drawIA(); // Draw
    } // END 1

    if (rectIndex == 2) { // CALLBACK FOR BOX 3
      data3(); // Visualize Data
      drawIA(); // Draw
    } // END 2

    setTimeout(function() {
      lampix.registerMovement([], null)
    }, 6000);

}); // END Function, registerMovement
// -----------------------------------------------------------------------------

// DRAW FUNCTIONS --------------------------------------------------------------

function drawIA() {

    // DOCUMENT AREA

    // BACKGROUND
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 800);

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

    // INTERACTIVE AREA

    // OPTIONS: BOX
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.rect(600, 100, 580, 150); // Options Box
    ctx.stroke();
    ctx.closePath(); // Close Shape

    // STYLE
    ctx.font = "20px Arial";

    // OPTIONS: PLOT
    ctx.beginPath();
    ctx.fillStyle = c1;
    ctx.arc(675, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("PLOT", 715, 185);

    // OPTIONS: TREND
    ctx.beginPath();
    ctx.fillStyle = c2;
    ctx.arc(825, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("TRNDLNS", 865, 185);

    // OPTIONS: UPDATE
    ctx.beginPath();
    ctx.fillStyle = c3;
    ctx.arc(1010, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("UPDATE", 1050, 185);

} // END drawIA

// -----------------------------------------------------------------------------

// DATA FUNCTION ---------------------------------------------------------------

// DATA1 ------------------
function data1(){

} // END data1

// DATA2 ------------------
function data2(){

} // END data2

// DATA3 ------------------
function data3(){

} // END data3

// -----------------------------------------------------------------------------
