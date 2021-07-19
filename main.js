noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
   
}

function draw() {
 background('#FFD711')
 document.getElementById("square_side").innerHTML = difference; 
       fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(560, 100); 
    webcam = createCapture(VIDEO);
    webcam.size(550, 500);   
    
    poseNet = ml5.poseNet(webcam, ModelLoaded);
    poseNet.on('pose', gotposes);
}

  function ModelLoaded() {
    console.log("Model is loaded successfully ☺");
  }

  function gotposes(results) {
    if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX+" noseY = " + noseY);
  
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX +" difference = " + difference);
  }
}




