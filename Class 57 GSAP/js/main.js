var tween=gsap.to(".box",{
    x:"90vw",
    rotation:360,
    duration:6,
    paused: true
})


document.querySelector(".play").onclick = () => tween.play();

document.querySelector(".pause").onclick = function(){
    tween.pause();
}

document.querySelector(".resume").onclick = () => tween.resume();

document.querySelector(".revers").onclick = () => tween.reverse();


document.querySelector(".restart").onclick = () => tween.restart();