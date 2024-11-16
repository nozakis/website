function setupCountdown() {
  const countdownElementId = 'countdown';
  const weddingDate = new Date('2025-08-30T17:00:00-04:00');
  let intervalId = undefined;

  function getCountdownString() {
    const now = new Date().getTime();

    const distance = Math.max(weddingDate - now, 0);

    if (distance < 0) {
      if (intervalId) {
        clearInterval(intervalId);
      }

      return 'Wedding!';
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  document.getElementById(countdownElementId).innerHTML = getCountdownString();

  intervalId = setInterval(
    () => document.getElementById(countdownElementId).innerHTML = getCountdownString(),
    1000
  );
}

const galleryDir = './resources/gallery/';
const photoNames = [
  // 'engaged.jpg',
  // 'bunnydog.jpg',
  // 'muir.jpg',
  // 'marvinparty.jpg',
  // 'marathon.jpg',
];

function loadPhotos() {
  for (const photoName of photoNames) {
    const location = galleryDir + photoName;

    const imageElement = document.createElement('img');
    imageElement.setAttribute('class', 'center');
    imageElement.setAttribute('src', location);

    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('href', location);
    anchorElement.appendChild(imageElement);

    const galleryDiv = document.getElementById('gallery');
    galleryDiv.appendChild(anchorElement);
  }
}

setupCountdown();
loadPhotos();
