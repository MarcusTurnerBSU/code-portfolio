let musicPlayer = document.getElementById("music-player")
let startButton = document.getElementById("start-button")
let frame = document.getElementById("website-frame")

// start button
function start() {
    musicPlayer.play()
    startButton.classList.add("hidden")
    frame.classList.remove("hidden")
}

startButton.addEventListener("click",start)

// sans music message
function gotMessage(event) {
    if (event.data == "sans-music") {
        musicPlayer.src = "media/megalovania.mp3"
        musicPlayer.play()
    }
}

window.addEventListener("message", gotMessage)