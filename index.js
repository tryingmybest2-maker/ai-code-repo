const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#FF6F91', '#845EC2'];

function createRandomCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  
  // Random color
  const color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = color;

  // Random position
  const size = 50;
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  document.body.appendChild(circle);
}

// Add on button click
document.getElementById('addCircleBtn').addEventListener('click', createRandomCircle);

// Auto-generate every 2 seconds
setInterval(createRandomCircle, 2000);
