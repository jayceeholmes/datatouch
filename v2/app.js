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

window.lampix.registerSimpleClassifier(
    [{
        // CLASS RECT ARRAY (1)
        posX: 78,   // The X coordinate of the left side of the rectangle
        posY: 199,   // The Y coordinate of the left side of the rectangle
        width: 344,  // The width of the rectangle
        height: 403, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }],

    // Function that is called when a simpleClassifier is detected?
    function (rectIndex, classTag) { // rectIndex: Which rect is it? || Why is classTag = 0
        console.log("simpleClassifier", arguments);  // [RectIndex, classTag]

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

        // I was able to redefine the class tag and hit the other cases, but I have yet to see that happen in the simulator
        classTag = 1;
        switch(classTag){ // When do I get other cases?
            case "finger": ctx.fillStyle = "red"; break;
            case "no_finger": ctx.fillStyle = "grey";break;
            case "1": ctx.fillStyle = "red"; break;
            case "0": ctx.fillStyle = "blue"; break; // This is the case it is listening to
            default: ctx.fillStyle = "white"; break; // WHEN DOES THIS HAPPEN?
        }

        if (rectIndex === 0) {
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = "green";
        }
      }
); // End registerSimpleClassifier



// window.lampix.registerPositionClassifier([{
//     posX: 78, posY: 199, width: 344, height: 403, classifier: "document" // First Rect Position
// }], function (rectIndex, outlines) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
//     ctx.fillStyle = "green";
//     ctx.fillRect(0,0,canvas.width, canvas.height);
// }); // End Funcrion


// -----------------------------------------------------------------------------

// FUNCTIONS -------------------------------------------------------------------
// -----------------------------------------------------------------------------
