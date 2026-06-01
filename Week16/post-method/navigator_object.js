// WEB SPEECH API ====>
// Canvas

let camerafeed = document.querySelector("#camerafeed");
let canvas = document.querySelector("#image");

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    console.log(stream);
    camerafeed.srcObject = stream;
  });

let capture = document.querySelector("#capture");

capture.addEventListener("click", () => {
  let ctx = canvas.getContext("2d");

  canvas.width = camerafeed.videoWidth;
  canvas.height = camerafeed.videoHeight;

  ctx.drawImage(camerafeed, 0, 0);
});

let isOnline = document.querySelector("#isOnLine");

setInterval(() => {
  if (navigator.onLine) {
    isOnline.innerText = "User is connected";
  } else {
    isOnline.innerText = "User is disconnected";
  }
}, 1000);
