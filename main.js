document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const photos = document.querySelectorAll(".photo");
  
    startBtn.addEventListener("click", startVoiceCommand);
  
    function startVoiceCommand() {
      for (let i = 0; i < photos.length; i++) {
        photos[i].style.backgroundImage = `url('path_to_selfie_${i + 1}.jpg')`;
      }
    }
  });

 