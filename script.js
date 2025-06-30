var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
var videoPage = document.getElementById("videoPage");

window.onload = () => {
    myVideo.pause();
};

function stopVideo(){
    myVideo.pause();
    myVideo.currentTime = 0;
    videoPlayer.style.display = "none";
    videoPage.scrollIntoView({behavior: "smooth" });
};

function playVideo(){
    videoPlayer.style.display = "block";
    myVideo.play();
    setTimeout(() => {
        videoPlayer.scrollIntoView({behavior: "smooth"});
    }, 100);
};

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector(".wrapper");
    loaderWrapper.classList.add("fade");
}

window.addEventListener("load", fadeOut);

