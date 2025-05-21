const generateBtn = document.getElementById('generate-btn');
const emailInput = document.getElementById('email-input');
const copyBtn = document.getElementById('copy-btn');

generateBtn.addEventListener('click', () => {
    const email = generateTempEmail();
    emailInput.value = email;
});

copyBtn.addEventListener('click', () => {
    const email = emailInput.value;
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    });
});

function generateTempEmail() {
    const domains = ['tempmail.com', 'tempemail.net', 'disposablemail.org'];
    const username = Math.random().toString(36).substr(2, 10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${domain}`;
}

// Three.js animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('hero-canvas'),
    antialias: true
});

renderer.setSize(window.innerWidth / 2, 300);

const geometry = new THREE.SphereGeometry(1, 60, 60);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();