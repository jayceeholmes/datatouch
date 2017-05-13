// GET LAMPIX INFO
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);

// CANVAS
var canvas = document.querySelector("canvas"); // Attach Canvas
var ctx = canvas.getContext("2d"); // Make it a 2D drawing on the canvas

// STYLE CANVAS
ctx.strokeStyle = "white"; // Style Stroke
ctx.rect(100, 100, 300, 300); // Draw Rect 1
ctx.rect(450, 100, 300, 300); // Draw Rect 2
ctx.stroke(); // Draw Paths

window.lampix.registerSimpleClassifier(
    [{

        // CLASS RECT ARRAY (1)
        posX: 100,   // The X coordinate of the left side of the rectangle
        posY: 100,   // The Y coordinate of the left side of the rectangle
        width: 200,  // The width of the rectangle
        height: 200, // The height of the rectangle
        classifier: "cls_conv_fin" // The classifier to run inside the rectangle
    }
        , {
            // CLASS RECT ARRAY (2)
            posX: 450,
            posY: 100,
            width: 200,
            height: 200,
            classifier: "cls_conv_fin"
        }
    ],

    // Function that is called when a simpleClassifier is detected?
    function (rectIndex, classTag) { // rectIndex: Which rect is it? || Why is classTag = 0
        console.log("simpleClassifier", arguments);  // [RectIndex, classTag]

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

        // I was able to redefine the class tag and hit the other cases, but I have yet to see that happen in the simulator

        switch(classTag){ // When do I get other cases?
            case "finger": ctx.fillStyle = "red"; break;
            case "no_finger": ctx.fillStyle = "grey";break;
            case "1": ctx.fillStyle = "red"; break;
            case "0": ctx.fillStyle = "blue"; break; // This is the case it is listening to
            default: ctx.fillStyle = "white"; break; // WHEN DOES THIS HAPPEN?
        }

        if (rectIndex === 0) {

            // THIS IS WHERE I CAN ADD TRANSITIONS ETC.

            // STUFF THAT IS DIFFERENT
            ctx.beginPath(); // Start Drawing this shape
            ctx.rect(100, 100, 300, 300); // Redraw Rectangle (Canvas was cleared)
            ctx.fill(); // Changes to color defined above

            // STUFF THAT IS STILL THE SAME
            ctx.beginPath(); // Start Drawing this shape
            ctx.rect(450, 100, 300, 300); // Redraw Rectangle
            ctx.stroke(); // Changes to color defined above
        }

        if (rectIndex === 1) {

            // STUFF THAT IS DIFFERENT
            ctx.beginPath();
            ctx.rect(450, 100, 300, 300);
            ctx.fill();

            // STUFF THAT IS THE SAME
            ctx.beginPath();
            ctx.rect(100, 100, 300, 300);
            ctx.stroke();
        }
    }
); // End registerSimpleClassifier
