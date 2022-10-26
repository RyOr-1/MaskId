function preload() {}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ydThoMq64/model.json', modelLoaded)
}


function modelLoaded() {
    console.log("Modal Loaded Correctly");
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById('resultObj').innerHTML = results[0].label
        document.getElementById('resultObjAccuracy').innerHTML = (results[0].confidence * 100).toFixed(2) + "%"
    }
}