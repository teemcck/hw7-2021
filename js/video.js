// Reference nevessary HTML elements.
let video = document.querySelector('video');
let playButton = document.querySelector("#play");
let pauseButton = document.querySelector("#pause");
let speedUpButton = document.querySelector("#faster");
let slowDownButton = document.querySelector("#slower");
let skipAheadButton = document.querySelector("#skip");
let muteButton = document.querySelector("#mute");
let volumeSlider = document.querySelector("#slider");
let oldSchoolButton = document.querySelector("#vintage");
let originalButton = document.querySelector("#orig");
let volumeText = document.querySelector("#volume");
// Store video volume.
let volume = 1; // 100% volume by default.
// Track if video is playing.
let isPlaying = false;

// Initializes video on page start.
window.addEventListener("load", function() { InitializeVideo(); });

// --
// Add event listeners to buttons.
// --

// Play the video.
playButton.addEventListener("click", PlayVideo);
// Pause the video.
pauseButton.addEventListener("click", PauseVideo);
// Slow down the video playback speed.
slowDownButton.addEventListener("click", SlowVideoPlayback);
// Speeds up the video playback speed.
speedUpButton.addEventListener("click", SpeedUpVideoPlayback);
// Skips ahead in the video.
skipAheadButton.addEventListener("click", SkipAhead);
// Mutes the video.
muteButton.addEventListener("click", MuteVideo);
// Updates the volume of the video.
volumeSlider.addEventListener("input", UpdateVolume);
// Updates the style to old school.
oldSchoolButton.addEventListener("click", SetOldSchoolStyle);
// Updates the style to original.
originalButton.addEventListener("click", SetOriginalStyle);

// --
// Define necessary functions.
// --

// Define helper functions.
function InitializeVideo() {
	// Prevent video from playing automatically.
	video.pause();
	// Prevent video from looping.
	video.removeAttribute('loop');
	// Set the initial volume text.
	volumeText.innerHTML = volume * 100 + "%"
	// Output to console.
	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
}

// Plays the video.
function PlayVideo() {
	// Play the video.
	video.play();
	// Set the volume of the video.
	video.volume = volume;
}

// Pauses the video.
function PauseVideo() {
	// Pause the video.
	video.pause();
}

// Slows the video speed by 10%.
function SlowVideoPlayback() {
	// Slow the video playback speed by 10%.
	video.playbackRate = video.playbackRate - 0.1;
	// Log the current playback speed of the video.
	console.log("Video playback speed updated: " + video.playbackRate);
}

// Speeds up the video speed by 10%.
function SpeedUpVideoPlayback() {
	// Slow the video playback speed by 10%.
	video.playbackRate = video.playbackRate + 0.1;
	// Log the current playback speed of the video.
	console.log("Video playback speed updated: " + video.playbackRate);
}

// Skips ahead in the video by 10 seconds.
function SkipAhead() {
	// Skip ahead in the video by 10 seconds.
	video.currentTime = video.currentTime + 10;
	// Loop back to start if the video ends.
	if (video.currentTime > video.duration) {
		video.currentTime = 0;
	}
	// Log the current time of the video.
	console.log("Video current time updated: " + video.currentTime);
}

function MuteVideo() {
	if (video.muted) {
		// Unmute the video.
		video.muted = false;
		// Update the text button
		muteButton.innerHTML = "Mute";
		// Log mute state.
		console.log("Unmute");
	} else {
		// Mute the video.
		video.muted = true;
		// Update the text button
		muteButton.innerHTML = "Unmute";
		// Log mute state.
		console.log("Mute");
	}
}

function UpdateVolume() {
    volume = volumeSlider.value / 100; // Convert to range 0-1
	// Set volume of the video.
    video.volume = volume;
    console.log("Video volume updated: " + video.volume);
	// Update the volume text.
	volumeText.innerHTML = volume * 100 + "%";
}

function SetOldSchoolStyle() {
	console.log("Old School Style");
	// Set the video style to old school.
	video.classList.add("oldSchool");
}

function SetOriginalStyle() {
	// Set the video style to original.
	video.classList.remove("oldSchool");
}
