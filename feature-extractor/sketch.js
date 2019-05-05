let mobilenet;
let classifier;
let video;
let label;
let firstButton;
let secondButton;
let trainButton;

function modelReady() {
  console.log("Model is ready!!!");
}
function videoReady() {
  console.log("Video is ready!!!");
}
function whileTraining(loss) {
  if (loss === null) {
    console.log("Training Complete");
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    label = results[0].label;
    classifier.classify(gotResults);
  }
}

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  background(0);
  video.hide();
  mobilenet = ml5.featureExtractor("Mobilenet", modelReady);
  classifier = mobilenet.classification(video, videoReady);

  firstButton = createButton("first");
  firstButton.mousePressed(function() {
    classifier.addImage("iPhone");
  });
  secondButton = createButton("second");
  secondButton.mousePressed(function() {
    classifier.addImage("headphone");
  });
  trainButton = createButton("train");
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 30);
}
