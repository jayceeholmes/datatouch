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
            // DOCUMENT RECOGNITION
            posX: 0, // The X coordinate of the left side of the rectangle
            posY: 0, // The Y coordinate of the left side of the rectangle
            width: 500, // The width of the rectangle
            height: 800, // The height of the rectangle
            classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }], function(rectIndex, classTag) {
        console.log("simpleClassifier", arguments); // [RectIndex, classTag]

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

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
                ctx.fillStyle = "white";
                break; // This is the case it is listening to
            default:
                ctx.fillStyle = "white";
                break;
        }

        if (rectIndex === 0) {

            // STUFF THAT IS DIFFERENT

            // GREEN DOCUMENT
            ctx.beginPath(); // Start Drawing this shape
            ctx.rect(100, 100, 300, 600); // Paper Document
            ctx.fill(); // Changes to color defined above
            ctx.closePath(); // Close Shape

            // OPTIONS: BOX
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.rect(600, 100, 580, 150); // Options Box
            ctx.stroke();
            ctx.closePath(); // Close Shape

            // OPTIONS: PLOT
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(675, 175, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("PLOT",735,185);

            // OPTIONS: TREND
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(925, 175, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("TREND",990,185);


            // STUFF THAT IS STILL THE SAME


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

        } // END 0



// -----------------------------------------------------------------------------

// FUNCTIONS -------------------------------------------------------------------
function drawPDR(){
  ctx.fillStyle("green");
  ctx.fill();
} // END drawPDR
// -----------------------------------------------------------------------------
