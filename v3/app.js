// LAMPIX ----------------------------------------------------------------------
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);
// -----------------------------------------------------------------------------

// CANVAS ----------------------------------------------------------------------
var canvas = document.querySelector("canvas"); // Attach Canvas
var ctx = canvas.getContext("2d"); // Make it a 2D drawing on the canvas
// -----------------------------------------------------------------------------

// CLASSIFIER ------------------------------------------------------------------
var changedScreen = false;
// -----------------------------------------------------------------------------

// IMG
var img = new Image();
img.src = "graph.png";

// STYLE CANVAS ----------------------------------------------------------------

// DOCUMENT AREA
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, 500, 800);

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
ctx.fillStyle = "white"
ctx.fillRect(500, 0, 780, 800);

// TEXT
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Place your document in the", 605, 400);
ctx.fillStyle = "red";
ctx.fillText("viewing area", 975, 400);


// -----------------------------------------------------------------------------

// CLASSIFIERS -----------------------------------------------------------------

window.lampix.registerSimpleClassifier(
    [{
        // DOCUMENT
        posX: 85, // The X coordinate of the left side of the rectangle
        posY: 205, // The Y coordinate of the left side of the rectangle
        width: 335, // The width of the rectangle
        height: 395, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    },{
      // PLOT
      posX: 675, // The X coordinate of the left side of the rectangle
      posY: 175, // The Y coordinate of the left side of the rectangle
      width: 60, // The width of the rectangle
      height: 60, // The height of the rectangle
      classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    },{
      // TRNDLNS
      posX: 825, // The X coordinate of the left side of the rectangle
      posY: 175, // The Y coordinate of the left side of the rectangle
      width: 60, // The width of the rectangle
      height: 60, // The height of the rectangle
      classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    },{
      // UPDATE
      posX: 1010, // The X coordinate of the left side of the rectangle
      posY: 175, // The Y coordinate of the left side of the rectangle
      width: 60, // The width of the rectangle
      height: 60, // The height of the rectangle
      classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }],

    // Function that is called when a simpleClassifier is detected?
    function(rectIndex, classTag) { // rectIndex: Which rect is it? || Why is classTag = 0
        console.log("simpleClassifier", arguments); // [RectIndex, classTag]

        // I was able to redefine the class tag and hit the other cases, but I have yet to see that happen in the simulator
        switch (classTag) { // When do I get other cases?
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
                break; // This is the case it is listening to
            default:
                ctx.fillStyle = "white";
                break; // WHEN DOES THIS HAPPEN?
        }

        if (rectIndex === 0 && changedScreen === false) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
            drawIA();
            changedScreen = true;
        } // END 0

        if (rectIndex === 1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
            drawIA();

            // OPTIONS: PLOT
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(675, 175, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("PLOT", 715, 185);

            ctx.drawImage(img, 575, 300,580,500);

        } // END 1

        if (rectIndex === 2) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
            drawIA();

            // OPTIONS: TREND
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(825, 175, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("TRNDLNS", 865, 185);

            ctx.drawImage(img, 575, 300,580,500);

        } // END 2

        if (rectIndex === 3) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
            drawIA();

                // OPTIONS: UPDATE
                ctx.beginPath();
                ctx.fillStyle = "green";
                ctx.arc(1010, 175, 30, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath(); // Close Shape
                ctx.fillText("UPDATE", 1050, 185);

                ctx.drawImage(img, 575, 300,580,500);


        } // END 3

    } // END Function
); // End registerSimpleClassifier

// -----------------------------------------------------------------------------

// FUNCTIONS -------------------------------------------------------------------

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
    ctx.fillStyle = "white";
    ctx.arc(675, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("PLOT", 715, 185);

    // OPTIONS: TREND
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(825, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("TRNDLNS", 865, 185);

    // OPTIONS: UPDATE
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(1010, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); // Close Shape
    ctx.fillText("UPDATE", 1050, 185);

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

} // END drawIA
// -----------------------------------------------------------------------------
