// Import the face-api.js library
import * as faceapi from 'face-api.js';

// Load the face detection model
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startFaceDetection);

// Function to start face detection
function startFaceDetection() {
  // Get the image element
  const image = document.getElementById('photo');

  // Detect faces in the image
  faceapi.detectAllFaces(image).then((faces) => {
    // Log the detected faces
    console.log(faces);
  });
}
