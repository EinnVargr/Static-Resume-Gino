import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// Get the container element
const mainContent = document.getElementById('page-content');

// Ensure the container has a defined size
const { width, height } = mainContent.getBoundingClientRect();

// 1. Scene setup
const scene = new THREE.Scene();

// 2. Camera setup
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

// 3. Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
mainContent.appendChild(renderer.domElement);

// 4. Create an object (a red cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// 6. Handle window resizing
window.addEventListener('resize', () => {
    const { width, height } = mainContent.getBoundingClientRect();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});
