function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('pink');
}

function loaded() {
    console.log('PoseNet is clear!!');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}