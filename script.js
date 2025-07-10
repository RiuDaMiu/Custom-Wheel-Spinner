  document.getElementById("waitImage").style.display = "inline-block";


function onTheWheel() {
  document.getElementById("waitImage").style.display = "none";
  document.getElementById("arrowImage").style.display = "inline-block";
  const canvas = document.getElementById("wheel");
  const ctx = canvas.getContext("2d");
  const spinBtn = document.getElementById("spin-btn");

  var segments = [document.getElementById('userInputOne').value, document.getElementById('userInputTwo').value, document.getElementById('userInputThree').value, document.getElementById('userInputFour').value, document.getElementById('userInputFive').value, document.getElementById('userInputSix').value];
  const colors = ["#233040", "#42526E", "#233040", "#42526E", "#233040", "#42526E"];

  function drawWheel() {
    const arcSize = (2 * Math.PI) / segments.length;
    for (let i = 0; i < segments.length; i++) {
      const angle = i * arcSize;
      ctx.beginPath();
      ctx.fillStyle = colors[i];
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, angle, angle + arcSize);
      ctx.fill();

      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate(angle + arcSize / 2);
      ctx.fillStyle = "#fff";
      ctx.font = " 14px Ranade";
      ctx.fillText(segments[i], 60, 10);
      ctx.restore();
    }
  }

  let rotation = 0;
  spinBtn.addEventListener("click", () => {
    const spinAngle = Math.random() * 360 + 720;
    rotation += spinAngle;
      canvas.style.transition = "transform 2s";
      canvas.style.transform = `rotate(${rotation}deg)`;

  });

  drawWheel();
}


