// var audio = new Audio("Venom.wav");

// // Set attributes for the audio element
// audio.autoplay = true;

// // Append the audio element to the body
// document.body.appendChild(audio);

// // Add an event listener for the 'ended' event
// audio.addEventListener("ended", function () {
//   // Audio has ended, now trigger the text-to-speech
//   readOutLoud();
// });

// function readOutLoud() {
//   // Get the text you want to read
//   var textToRead =
//     " Hi, Hello I am Venom, Amit's personal AI assistant,  to enhance his daily experiences. My purpose revolves around understanding and fulfilling Amit's distinct requirements, I am here to assist him in various tasks, making each interaction tailored and efficient. Venom version 1.O is at your service.";

//   // Create a new SpeechSynthesisUtterance object
//   var speech = new SpeechSynthesisUtterance();

//   // Set the text to be spoken
//   speech.text = textToRead;

//   // Use the default voice
//   speech.volume = 1;
//   speech.rate = 1.5;
//   speech.pitch = 0.5;

//   // Speak the text
//   window.speechSynthesis.speak(speech);
// }

function startAudio() {
  var audio = new Audio("Venom.wav");

  // Set attributes for the audio element
  audio.autoplay = true;

  // Append the audio element to the body
  document.body.appendChild(audio);

  audio.addEventListener("ended", function () {
    //   // Audio has ended, now trigger the text-to-speech
    readOutLoud();
  });
}

function readOutLoud() {
  // Get the text you want to read
  var textToRead =
    "Hi, Hello I am Venom, Amit's personal AI assistant, accurately designed to enhance his daily experiences. My purpose revolves around understanding and fulfilling Amit's distinct requirements, I am here to assist him in various tasks, making each interaction tailored and efficient. Venom version 1.O is at your service.";

  // Create a new SpeechSynthesisUtterance object
  var speech = new SpeechSynthesisUtterance();

  // Set the text to be spoken
  speech.text = textToRead;

  // Use the default voice
  speech.volume = 1;
  speech.rate = 1.5;
  speech.pitch = 0.5;

  // Speak the text
  window.speechSynthesis.speak(speech);
}
