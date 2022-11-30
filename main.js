left_wristX = 0;
right_wristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("Left Wrist X = " + left_wristX + "Right Wrist X = " + right_wristX + "Difference = " + difference);
    }
}

function draw(){
    background('#FFFF00');
    textSize(difference);
    fill('#FF0000');
    text('Hello!', 50, 400);
}