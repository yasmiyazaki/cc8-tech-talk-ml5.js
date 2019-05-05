let mobilenet;

function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.predict(imageClass, gotResults);
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
    let label = results[0].label;
    let prob = results[0].confidence;
    fill(0);
    textSize(50);
    text(label, 10, height - 100);
    createP(label);
    createP(prob);
  }
}

function imageReady() {
  image(imageClass, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  imageClass = createImg("images/images.jpeg", imageReady);
  imageClass.hide();
  background(0);

  mobilenet = ml5.imageClassifier("Mobilenet", modelReady);
}
