window.onload = async function()
{
  const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });

    console.log(stream);
  
  const webcam = document.getElementById("webcam");
  console.log(webcam);
  webcam.srcObject = stream;
}