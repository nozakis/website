const countdownElementId = 'countdown';
const weddingDate = new Date('2025-08-30T17:00:00-04:00');

function getCountdownString() {
  const now = new Date().getTime();
    
  const distance = weddingDate - now;

  if (distance < 0) {
    return 'Wedding!';
  }
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

document.getElementById(countdownElementId).innerHTML = getCountdownString();

const interval = setInterval(function() {
  document.getElementById(countdownElementId).innerHTML = getCountdownString();
}, 1000);
