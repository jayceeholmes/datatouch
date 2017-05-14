// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// CANVAS ----------------------------------------------------------------------
var canvas = document.querySelector("canvas"); // Attach Canvas
var ctx = canvas.getContext("2d"); // Make it a 2D drawing on the canvas
// -----------------------------------------------------------------------------

// COLORS ----------------------------------------------------------------------
var c1;
var c2;
var c3;
// -----------------------------------------------------------------------------

// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// STYLE CANVAS ----------------------------------------------------------------

// DOCUMENT AREA ---------------

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

// BLANK AREA ---------------

// BACKGROUND
ctx.fillStyle = "black"
ctx.fillRect(500, 0, 780, 800);

// TEXT
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.fillText("Place your document in the", 605, 400);
ctx.fillStyle = "red";
ctx.fillText("viewing area", 980, 400);

// -----------------------------------------------------------------------------

// CLASSIFIERS -----------------------------------------------------------------

// REGISTER MOVEMENT ---------------------------
window.lampix.registerMovement([{
    posX: 98,
    posY: 219,
    width: 304,
    height: 127 // BOX 1
}, {
    posX: 98,
    posY: 346,
    width: 304,
    height: 127 // BOX 2
}, {
    posX: 98,
    posY: 473,
    width: 304,
    height: 127 // BOX 3
}], function(rectIndex, outlines) {

    console.log("movement", rectIndex, outlines);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // CLEAR CANVAS

    c1 = "white";
    c2 = "white";
    c3 = "white";

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

// REGISTER SIMPLE CLASSIFIER  ---------------------------

window.lampix.registerSimpleClassifier([{
        // PLOT
        posX: 645, // The X coordinate of the left side of the rectangle
        posY: 145, // The Y coordinate of the left side of the rectangle
        width: 60, // The width of the rectangle
        height: 60, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }, {
        // TRENDLINE
        posX: 795, // The X coordinate of the left side of the rectangle
        posY: 145, // The Y coordinate of the left side of the rectangle
        width: 60, // The width of the rectangle
        height: 60, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }, {
        // UPDATE
        posX: 980, // The X coordinate of the left side of the rectangle
        posY: 145, // The Y coordinate of the left side of the rectangle
        width: 60, // The width of the rectangle
        height: 60, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }],

    // Function that is called when a simpleClassifier is detected
    function(rectIndex, classTag) {
        console.log("simpleClassifier", arguments); // [RectIndex, classTag]

        // SWITCH CASE
        switch (classTag) {
            case "finger":
                ctx.fillStyle = "red";
                break;
            case "no_finger":
                ctx.fillStyle = "grey";
                break;
            case "1":
                ctx.fillStyle = "red";
                break;
            case "0":
                ctx.fillStyle = "blue";
                break;
            default:
                ctx.fillStyle = "white";
                break;
        } // END Switch

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

        // OPTIONS: PLOT
        if (rectIndex === 0) {
            c1 = "green";
            c2 = "white";
            c3 = "white";
            drawIA();
        } // END 0

        // OPTIONS: TREND
        if (rectIndex === 1) {
            c1 = "white";
            c2 = "green";
            c3 = "white";
            drawIA();
        } // END 1

        // OPTIONS: UPDATE
        if (rectIndex === 2) {
            c1 = "white";
            c2 = "white";
            c3 = "green";
            drawIA();
        } // END 2


    } // END Function
); // End registerSimpleClassifier
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
    ctx.fillText("TRENDS", 865, 185);

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
function data1() {

} // END data1

// DATA2 ------------------
function data2() {

} // END data2

// DATA3 ------------------
function data3() {

} // END data3

// -----------------------------------------------------------------------------
