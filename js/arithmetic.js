const animations = document.querySelectorAll("video")

animations.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })

  video.addEventListener("mouseout", function () {
    this.pause()
  })

  video.addEventListener("touchstart", function () {
    this.play()
  })

  video.addEventListener("touchend", function () {
    this.pause()
  })

})

const p1 = document.querySelector("#p1");
var p1_audio = new Audio("/resources/arithmetic/p1.mp3");
p1.addEventListener("click", function () {
  if (p1_audio.paused) {
    p1_audio.play();
  }
  else {
    p1_audio.pause();
  }
})
p1.addEventListener("dblclick", function () {
  p1_audio.currentTime = 0;
  p1_audio.play();
})

const p2 = document.querySelector("#p2");
var p2_audio = new Audio("/resources/arithmetic/p2.mp3");
p2.addEventListener("click", function () {
  if (p2_audio.paused) {
    p2_audio.play();
  }
  else {
    p2_audio.pause();
  }
})
p2.addEventListener("dblclick", function () {
  p2_audio.currentTime = 0;
  p2_audio.play();
})

const p3 = document.querySelector("#p3");
var p3_audio = new Audio("/resources/arithmetic/p3.mp3");
p3.addEventListener("click", function () {
  if (p3_audio.paused) {
    p3_audio.play();
  }
  else {
    p3_audio.pause();
  }
})
p3.addEventListener("dblclick", function () {
  p3_audio.currentTime = 0;
  p3_audio.play();
})

const p4 = document.querySelector("#p4");
var p4_audio = new Audio("/resources/arithmetic/p4.mp3");
p4.addEventListener("click", function () {
  if (p4_audio.paused) {
    p4_audio.play();
  }
  else {
    p4_audio.pause();
  }
})
p4.addEventListener("dblclick", function () {
  p4_audio.currentTime = 0;
  p4_audio.play();
})

const p5 = document.querySelector("#p5");
var p5_audio = new Audio("/resources/arithmetic/p5.mp3");
p5.addEventListener("click", function () {
  if (p5_audio.paused) {
    p5_audio.play();
  }
  else {
    p5_audio.pause();
  }
})
p5.addEventListener("dblclick", function () {
  p5_audio.currentTime = 0;
  p5_audio.play();
})