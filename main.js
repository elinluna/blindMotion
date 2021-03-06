var NodeWebcam = require( "node-webcam" );



var opts = {
 
    //Picture related
    //test for git add
 
    width: 1280,
 
    height: 720,
 
    quality: 100,
 
 
    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows
 
    delay: 0,
 
 
    //Save shots in memory
 
    saveShots: true,
 
 
    // [jpeg, png] support varies
    // Webcam.OutputTypes
 
    output: "jpeg",
 
 
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
 
    // device: false,
    device : "IPC-HD1 WEBCAM",
 
 
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
 
    callbackReturn: "location",
 
 
    //Logging
    verbose: false
 
};
 
 
//Creates webcam instance
 
var Webcam = NodeWebcam.create( opts );
 
 
//Will automatically append location output type
 
Webcam.capture( "test_picture1", function( err, data ) {} );
 
 
//Also available for quick use
 
NodeWebcam.capture( "test_picture2", opts, function( err, data ) {
 
});
 
 
//Get list of cameras
 
// Webcam.list( function( list ) {
//     //Use another device
//     console.log(list)
//     var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
 
// });
 
//Return type with base 64 image
var opts = {
    callbackReturn: "base64"
};
 
NodeWebcam.capture( "test_picture3", opts, function( err, data ) {
    var image = "<img src='" + data + "'>";
    // console.log(data)
});
