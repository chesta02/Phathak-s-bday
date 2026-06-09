const text = "Happy Birthday My Phathak 💜";

let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("title").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

window.onload = typeWriter;
const playBtn = document.getElementById("playBtn");
const video = document.getElementById("pathakVideo");
const afterVideo = document.getElementById("afterVideo");

playBtn.addEventListener("click", () => {

    document
    .getElementById("video-section")
    .scrollIntoView({
        behavior:"smooth"
    });

    setTimeout(() => {
        video.play();
    }, 1000);

});

video.addEventListener("ended", () => {

    afterVideo.style.display = "block";

});