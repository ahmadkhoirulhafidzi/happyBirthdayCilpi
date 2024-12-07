function releaseBalloons() {
    const container = document.getElementById('balloon-container');
    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = Math.random() * 100 + '%';
      balloon.style.animationDelay = Math.random() * 5 + 's';  // Delay untuk membuat balon muncul pada waktu yang berbeda
      balloon.style.animationDuration = 5 + Math.random() * 3 + 's'; // Kecepatan naik balon
      container.appendChild(balloon);
    }
  }
  
  // Create lightning effect
  function createLightningEffect() {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    document.body.appendChild(lightning);
  
    setTimeout(() => {
      lightning.remove();
    }, 1000); // Petir hilang setelah 1 detik
  }
  
  // Trigger lightning every 2 seconds
  setInterval(createLightningEffect, 2000);
  