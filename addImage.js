const images = [
    'assets/g1.avif',
    'assets/g2.avif', 
    'assets/g3.jpg', 
    'assets/g4.jpg', 
    'assets/g5.avif', 
    'assets/g6.jpg', 
];

images.forEach((imgSrc, index) => {
    const box = document.getElementById(`box${index + 1}`);
    const img = document.createElement('img');
    img.src = imgSrc;
    box.appendChild(img);
});