img = "";
objects = [];
status = "";

function preload() {
    video = createVideo('video.mp4');
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects ";
}

function setup() {
    canvas = createCanvas (380, 380);
    canvas.center();
    video.hide();
    

}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
if (status != "") {
    r = random(255);
    b = random(255);
    g = random(255);
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status: Object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are " + objects.length;
fill (r,g,b);
percent = floor(objects[i].confidence * 100);
text (objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(r,g,b);
rect (objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    }
}

}