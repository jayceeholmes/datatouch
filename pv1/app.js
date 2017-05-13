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
ctx.fillStyle = "white"
ctx.fillRect(500, 0, 780, 800);

// TEXT
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Place your document in the", 605, 400);
ctx.fillStyle = "red";
ctx.fillText("viewing area", 975, 400);

// -----------------------------------------------------------------------------

// STYLE CANVAS ----------------------------------------------------------------

// -----------------------------------------------------------------------------
// REGISTER RECTANGLES AS SIMPLE CLASSIFIERS -----------------------------------
window.lampix.registerSimpleClassifier(
    [{
            // DOCUMENT RECOGNITION
            posX: 0, // The X coordinate of the left side of the rectangle
            posY: 0, // The Y coordinate of the left side of the rectangle
            width: 500, // The width of the rectangle
            height: 800, // The height of the rectangle
            classifier: "cls_conv_fin" // The classifier to run inside the rectangle
        },
        {
            // OPTIONS RECOGNITION: PLOT
            posX: 600, // The X coordinate of the left side of the rectangle
            posY: 100, // The Y coordinate of the left side of the rectangle
            width: 290, // The width of the rectangle
            height: 150, // The height of the rectangle
            classifier: "cls_conv_fin" // The classifier to run inside the rectangle

        }, {

            // OPTIONS RECOGNITION: TREND
            posX: 890, // The X coordinate of the left side of the rectangle
            posY: 100, // The Y coordinate of the left side of the rectangle
            width: 290, // The width of the rectangle
            height: 150, // The height of the rectangle
            classifier: "cls_conv_fin" // The classifier to run inside the rectangle

        },

    ],

    // Function that is called when a simpleClassifier is detected
    function(rectIndex, classTag) {
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

        } // END 0

        if (rectIndex === 0) {

            // DIFFERENT

            // OPTIONS: PLOT
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(675, 175, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("PLOT",735,185);

            // PLOT


            // SAME

            // GREEN DOCUMENT
            ctx.beginPath(); // Start Drawing this shape
            ctx.fillStyle = "white";
            ctx.rect(100, 100, 300, 600); // Paper Document
            ctx.fill(); // Changes to color defined above
            ctx.closePath(); // Close Shape

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

            // OPTIONS: BOX
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.rect(600, 100, 580, 150); // Options Box
            ctx.stroke();
            ctx.closePath(); // Close Shape

            // OPTIONS: TREND
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(925, 175, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("TREND",990,185);


        } // END 1

        if (rectIndex === 1) {

            // DIFFERENT

            // OPTIONS: TREND
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(925, 175, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath(); // Close Shape
            ctx.fillText("TREND",990,185);


            // PLOT


            // SAME

            // GREEN DOCUMENT
            ctx.beginPath(); // Start Drawing this shape
            ctx.fillStyle = "white";
            ctx.rect(100, 100, 300, 600); // Paper Document
            ctx.fill(); // Changes to color defined above
            ctx.closePath(); // Close Shape

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


        } // END 2
    } // END Function
); // END registerSimpleClassifier
// -----------------------------------------------------------------------------
