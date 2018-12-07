const outputs = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);

  console.log(outputs);
}

function runAnalysis() {
  // Write code here to analyze stuff
}

function distance(point) {
	return Math.abs(point - predictionPoint);
}
