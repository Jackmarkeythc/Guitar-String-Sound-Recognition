const stringSounds = {
    'E': new Audio('sounds/E6.mp3'),
    'A': new Audio('sounds/A5.mp3'),
    'D': new Audio('sounds/D4.mp3'),
    'G': new Audio('sounds/G3.mp3'),
    'B': new Audio('sounds/B2.mp3'),
    'e': new Audio('sounds/E1.mp3')
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('guitar-container').appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('path/to/3d-guitar-model.glb', function(gltf) {
    const guitar = gltf.scene;
    scene.add(guitar);

    guitar.traverse(function(child) {
        if (child.isMesh) {
            child.userData = { string: child.name }; // Assuming each string has a unique name
        }
    });

    animate();
}, undefined, function(error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.domElement.addEventListener('click', function(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        const string = intersected.userData.string;
        if (string && stringSounds[string]) {
            const sound = stringSounds[string];
            sound.currentTime = 0; // Reset sound to start on every click
            sound.play();
        }
    }
});

camera.position.z = 5;
