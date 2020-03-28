const animations = document.querySelectorAll("video")

animations.forEach(video => {
  video.addEventListener("mouseover", function(){
    this.play()
  })

  video.addEventListener("mouseout", function(){
    this.pause()
  })
})