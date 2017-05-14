/** @module lampix */
(function () {
    var lampixInternal = window._lampix_internal;
    var callbacks = {};
    var cache = {};

    window.onMovement = function (areaIdx, contours) {
        if (callbacks.movementCallback)
            callbacks.movementCallback(areaIdx, contours)
    };

    window.onSimpleClassifier = function (rectIndex, classTag) {
        if (callbacks.simpleClassifierCallback)
            callbacks.simpleClassifierCallback(rectIndex, classTag)
    };

    window.onPositionClassifier = function (rectIndex, objects) {
        if (callbacks.positionClassifierCallback)
            callbacks.positionClassifierCallback(rectIndex, objects)
    };

    window.onPrePositionClassifier = function (rectIndex, objects) {
        if (callbacks.prePositionClassifierCallback)
            callbacks.prePositionClassifierCallback(rectIndex, objects)
    };

    window.onDrawingDetector = function (rectIndex, objects) {
        if (callbacks.drawingDetectorCallback)
            callbacks.drawingDetectorCallback(rectIndex, objects)
    };


    if (lampixInternal)
        window.lampix = {
            /**
             * Returns the lampix info.
             * @memberOf module:lampix
             * @returns {LampixInfo}
             */
            getLampixInfo: function () {
                if (cache.lampixInfo)
                    return cache.lampixInfo;
                //todo: deep copy when returning from cache
                return cache.lampixInfo = lampixInternal.getLampixInfo();
            },
            /**
             * Listen for movement events inside the specified rectangles.
             * @memberOf module:lampix
             * @param rectArray {Rect[]}
             * @param cb {MovementCallback|null}
             */
            registerMovement: function (rectArray, cb) {
                callbacks.movementCallback = cb;
                if (!cb)
                    rectArray = [];
                lampixInternal.registerMovement(JSON.stringify(rectArray));
            },
            /**
             * Listen for simple classifier events inside the specified rectangles.
             * A simple classifier event does not contain the position or outline of the detected object.
             * The events generated are useful for simple UI elements like buttons.
             * This method has better reliability and speed than {@link registerPositionClassifier}
             * @memberOf module:lampix
             * @param classRectArray {ClassifierRect[]}
             * @param cb {SimpleClassifierCallback|null}
             */
            registerSimpleClassifier: function (classRectArray, cb) {
                callbacks.simpleClassifierCallback = cb;
                if (!cb)
                    classRectArray = [];
                lampixInternal.registerSimpleClassifier(JSON.stringify(classRectArray));
            },
            /**
             * Listen for drawings being made inside the specified rectangles.
             * @memberOf module:lampix
             * @param classRectArray {ClassifierRect[]}
             * @param cb {DrawingDetectorCallback|null}
             */
            registerDrawingDetector: function (classRectArray, cb) {
                callbacks.drawingDetectorCallback = cb;
                if (!cb)
                    classRectArray = [];
                lampixInternal.registerDrawingDetector(JSON.stringify(classRectArray));
            },
            playFullScreenVideo: function (filename) {
                lampixInternal.playFullScreenVideo(filename);
            },
            /**
             * Listen for classifier events inside the specified rectangles.
             * The events contain the object ID and shape (outline).
             * For buttons see {@link registerSimpleClassifier}.
             * @memberOf module:lampix
             * @param classRectArray {ClassifierRect[]}
             * @param cb {PositionClassifierCallback|null}
             */
            registerPositionClassifier: function (classRectArray, cb, preCb) {
                for (var idx in classRectArray)
                    var classifier = classRectArray[idx].classifier
                if (classifier == 'finger')
                    throw 'registerPositionClassifier: finger classifier is not supported';
                callbacks.positionClassifierCallback = cb;
                callbacks.prePositionClassifierCallback = preCb;
                if (!cb)
                    classRectArray = [];
                lampixInternal.registerPositionClassifier(JSON.stringify(classRectArray));
            },
            /**
             * The rectangle areas are ignored by {@link registerMovement} and {@link registerPositionClassifier}
             * This does not apply to {@link registerSimpleClassifier}
             * @memberOf module:lampix
             * @param rectArray {Rect[]}
             */
            setIgnoredRects: function (rectArray) {
                lampixInternal.setIgnoredRects(JSON.stringify(rectArray));
            }
        };
    else
        console.error("This page needs to be loaded using Lampix or the Lampix Simulator");
    /**
     * @typedef {Object} LampixInfo
     * @property {string} id The Lampix unique hardware id
     * @property {string} version The Lampix OS version
     * @property {boolean} isSimulator Return true if the app is run inside a simulator
     */

    /**
     * @typedef {Object} Rect
     * @property {number} posX The X coordinate of the left side of the rectangle
     * @property {number} posY The Y coordinate of the left side of the rectangle
     * @property {number} width The width of the rectangle
     * @property {number} height The height of the rectangle
     */


    /**
     * @typedef {Object} ClassifierRect
     * @property {number} posX The X coordinate of the left side of the rectangle
     * @property {number} posY The Y coordinate of the left side of the rectangle
     * @property {number} width The width of the rectangle
     * @property {number} height The height of the rectangle
     * @property {string} classifier The classifier to run inside the rectangle
     */

    /**
     * @typedef {Object} Outline
     * @property {Point[]} points The array of points that compose this outline shape
     */

    /**
     * @typedef {Object} Point
     * @property {number} posX The X coordinate of the point
     * @property {number} posY The Y coordinate of the point
     */

    /**
     * Interface definition for a callback to be invoked when a movement is detected.
     *
     * @callback MovementCallback
     * @param {number} rectIndex - The index of the rectangle that receives the movement event
     * @param {Outline[]} outlines - Array of object outlines detected inside the rectangle
     */

    /**
     * Interface definition for a callback to be invoked when an object is detected and classified.
     *
     * @callback SimpleClassifierCallback
     * @param {number} rectIndex - The index of the rectangle that receives the movement event
     * @param {string} classTag - The resulting tag of the classifier function
     */

    /**
     * @typedef {Object} ClassifiedObject
     * @property {string} objectId Is used to track the same object over a span of multiple frames
     * @property {string} classTag Is the class returned by the classifier
     * @property {Outline} outline The outline of the detected object
     */

    /**
     * Interface definition for a callback to be invoked when an object is detected and classified.
     *
     * @callback PositionClassifierCallback
     * @param {number} rectIndex - The index of the rectangle that receives the classification event event
     * @param {ClassifiedObject[]} objects - The detected objects
     */

})();
