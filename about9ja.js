document.addEventListener("DOMContentLoaded", function () {
    let countdownContainer = document.getElementById("countdown-container");
    let videoContainer = document.querySelector(".video-container");
    let videoPlayer = document.getElementById("video-player");
    let videoSource = document.getElementById("video-source");

    let countdown = 5;

    function startCountdown() {
        let countdownInterval = setInterval(() => {
            countdown--;
            if (countdown >= 0) {
                countdownContainer.textContent = countdown;
            }
            if (countdown < 0) {
                clearInterval(countdownInterval);
                countdownContainer.style.display = "none";
                showVideo();
            }
        }, 1000);
    }

    function showVideo() {
        let isPortrait = window.innerWidth <= 768;
        videoSource.src = isPortrait ? "portrait.mp4" : "landscape.mp4";
        videoPlayer.load();
        videoContainer.classList.add("show");
        videoPlayer.play();

        videoPlayer.onended = function () {
            window.location.href = "about.html"; // Redirect to the About Page
        };
    }

    startCountdown();
});