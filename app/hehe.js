import * as THREE from 'three'


console.log('hehe');

// console.log(THREE)

// const rotationSpeedXControler = document.querySelector('#speedX');

// let rotationSpeedX = rotationSpeedXControler.value / 1000;

// rotationSpeedXControler.addEventListener('input', () => {
//     rotationSpeedX = rotationSpeedXControler.value / 1000;
//     console.log(rotationSpeedX);
// });


let cameraX = 1;
let cameraY = 1;
let cameraZ = 2;

let camera, scene, renderer;
let geometry, material, mesh,
    sphere, materialSphere, meshSphere;



const init = () => {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
    camera.position.x = cameraX;
    camera.position.y = cameraY;
    camera.position.z = cameraZ;

    scene = new THREE.Scene();

    sphere = new THREE.SphereGeometry(0.7, 40, 40);
    materialSphere = new THREE.MeshNormalMaterial();
    meshSphere = new THREE.Mesh(sphere, materialSphere);

    const sphereWireframe = new THREE.WireframeGeometry(sphere);
    const line = new THREE.LineSegments(sphereWireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.2;
    line.material.transparent = true;


    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh, line);

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight );

    document.body.appendChild(renderer.domElement);
    renderer.render(scene, camera);


};

const animate = () => {

    // mesh.rotation.x += rotationSpeedX;

    camera.position.x = cameraX;
    camera.position.y = cameraY;
    camera.position.z = cameraZ;

    mesh.rotation.y += 0.01;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

};



init();
animate();


const canvas = document.getElementsByTagName('canvas')[0];


const zoomCamera = () => {
    canvas.addEventListener('wheel', (e) => {
        cameraZ += e.deltaY / 100;
    });
};

zoomCamera();


let lastDownTarget;
let keyPressed;

let lastClickPos;
let prevCoords;


const panCamera = (tPosX, tPosY) => {

    cameraX += tPosX / -1000 * cameraZ;
    cameraY += tPosY / 1000 * cameraZ;
    // console.log(tPosX, tPosY);
    console.log(cameraZ);
    

};

const mouseMoveEvent = (event) => {
    if (keyPressed === 32) {
        let coords = [event.clientX - lastClickPos[0], event.clientY - lastClickPos[1]];
        lastClickPos = [event.clientX, event.clientY];
        panCamera(coords[0], coords[1]);
    }
};

document.addEventListener('mousedown', (e) => {
    lastClickPos = [e.clientX, e.clientY];
    lastDownTarget = e.target;
    document.addEventListener('mousemove', mouseMoveEvent, false);

});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', mouseMoveEvent, false);
    lastClickPos = undefined;

});



const keboardListener = () => {
    document.addEventListener('keydown', (e) => {
        if (lastDownTarget === canvas && e.keyCode === 32) {
            keyPressed = 32;
        } else {
            keyPressed = undefined;
        }
    }, false);
    document.addEventListener('keyup', () => {
        keyPressed = undefined;
    }, false);
};

keboardListener();


// panCamera();
