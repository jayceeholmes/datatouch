// GET INFO
var info = window.lampix.getLampixInfo();
console.log("lampixInfo", info);

// STYLE CANVAS
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";
ctx.fillStyle = "white";

// WHAT DO THESE MEAN
var classifier_state = []; // Array that keeps track of which object is where
var preDetState = []; // What is a Pre Determined State?

function draw() {
    var firstRectObjs = classifier_state[0] || []; // First Rectangle Object will be stored in Zero if existing
    var secondRectObjs = classifier_state[1] || []; //  \\

    ctx.strokeRect(100, 100, 300, 300); // First Rectangle
    ctx.strokeRect(450, 100, 300, 300); // Second Rectangle

    ctx.font = "30px Arial"; // Font Style
    ctx.fillText(firstRectObjs.length + " object(s)", 120, 150); // First Object Text; How many objects
    ctx.fillText(secondRectObjs.length + " object(s)", 470, 150); // Second Object Text; How many objects

    // classifier_state[0][0].outline
    // [].concat([])

    ctx.fillStyle = "white"; //
    var objects = firstRectObjs.concat(secondRectObjs); // Merges the two objects into one happy array

    for (var idx1 in objects) { // For loop to find the Array of Points for Each Object
        ctx.beginPath(); // Start to Draw
        var points = objects[idx1].outline.points; // Identify Points for Each Object
        //draw path
        for (var idx2 in points) { // For Loop to find the specific points in the Array of Points
            var point = points[idx2]; // Identify specific point
            if (idx2 === 0)
                ctx.moveTo(point.posX, point.posY); // Start Drawing
            else
                ctx.lineTo(point.posX, point.posY); // Continue Drawing
        }
        ctx.closePath(); // Stop Drawing
        ctx.stroke(); // STYLE
        ctx.fillStyle="white"; // STYLE
        ctx.fill(); // STYLE
    }
    //ctx.closePath();

// WHEN DOES THIS HAPPEN???
    ctx.fillStyle = "red";
    for (var idx1 in preDetState) {
        var points = preDetState[idx1].outline.points; // Get Points of Pre Determined State
        ctx.beginPath();
        //draw path
        for (var idx2 in points) {
            var point = points[idx2]; // Get Specific Point
            if (idx2 === 0)
                ctx.moveTo(point.posX, point.posY); // Start Drawing
            else
                ctx.lineTo(point.posX, point.posY); // Continue Drawing
        }
        ctx.closePath(); // Stop Drawing
        ctx.stroke(); // Style
    }
    //ctx.stroke();

    for (var idx3 in objects) {
        var tag = objects[idx3].classTag;
        var pos = objects[idx3].outline.points[0];
        ctx.fillText("class:" + tag, pos.posX, pos.posY);  // I have never seen this called
    }
    console.log('draw', classifier_state)
}

window.lampix.registerPositionClassifier([{
    posX: 100, posY: 100, width: 300, height: 300, classifier: "segm_cls_nes" // First Rect Position
},{
    posX: 450, posY: 100, width: 300, height: 300, classifier: "segm_cls_nes" // Second Rect Position
}], function (rectIndex, outlines) {
    // Here we need to change the outline of the object
    // outlines[0].outline.points[0].posX = 100;

    console.log("position classifier", rectIndex, outlines);

    //document.getElementById('debug').innerHTML = JSON.stringify(outlines)

    classifier_state[rectIndex] = outlines; // Classifier State just holds the object

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
    draw(); // Draw

}, function (rectIndex, outlines) {

    console.log("pre position classifier", rectIndex, outlines);

    //document.getElementById('debug').innerHTML = JSON.stringify(outlines)

    preDetState = outlines; // This is what this is looking for?
    console.log("preDetState", preDetState);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
    draw();
});

draw();
