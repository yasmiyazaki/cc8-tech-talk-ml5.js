let mobilenet;
let video;
let label;

function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.predict(gotResults);
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    label = results[0].label;
    mobilenet.predict(gotResults);
  }
}

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  background(0);
  video.hide();
  mobilenet = ml5.imageClassifier("Mobilenet", video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 30);
}
