import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

// getting things from html 
const name = document.getElementById('name');

const gltfLoader = new GLTFLoader()
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')
const canvas2 = document.querySelector('canvas.ballgl')

// loader
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load("/textures/nine.png")
// Scene
const scene = new THREE.Scene()

// gsap start
let tl = gsap.timeline();

// document.addEventListener('mousemove', onDocumentMouseMove)
// let mouseX = 0;
// let mouseY = 0;

// let targetX = 0;
// let targetY = 0;

// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;

// function onDocumentMouseMove(event) {
//     mouseX = (event.clientX - windowHalfX)
//     mouseY = (event.clientY - windowHalfY)
// }

// the model that I desperately hope works or else everything is pointless
gltfLoader.load('untitled.glb', (gltf) => {

    scene.add(gltf.scene)
    gltf.scene.rotation.set(0, 4.7, 0)

    // gui.add(gltf.scene.rotation, 'x').min(0).max(9) // organization 
    // gui.add(gltf.scene.rotation, 'y').min(0).max(9) // organization 
    // gui.add(gltf.scene.rotation, 'z').min(0).max(9) // organization 
    // start loading animation
    tl.to(gltf.scene.rotation, { y: 4.7, duration: 1 });
    tl.to(gltf.scene.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.5 }, "-=1");
    tl.to(gltf.scene.position, { y: 0.3, duration: 0.2 }, "-=1");
    tl.to(gltf.scene.position, { x: 1, duration: 0.5 })
    tl.to(gltf.scene.rotation, { y: 5.5, duration: 0.2 });
    tl.to(name, { opacity: 1, x: 100, duration: 1})
        tl.to(gltf.scene.position, { y: 0.2,  duration: 2.5, repeat: -1, yoyo: true });
})



// Lights
const ambientLight = new THREE.AmbientLight(0xfcd2bb, 0.1) //skin color light
ambientLight.position.x = 2
ambientLight.position.y = 3
ambientLight.position.z = 4
scene.add(ambientLight)
// light 1
const pointLight = new THREE.PointLight(0xb8d7ff, 0.5) //light red light
pointLight.position.set(1.6, 0.7, -1);
scene.add(pointLight)

const pointLight4 = new THREE.PointLight(0xb8d7ff, 0.5) //light blue light
pointLight4.position.set(-3, 1.1, 4.6);
scene.add(pointLight4)
const pointLight5 = new THREE.PointLight(0xb8d7ff, 0.5) //light blue light
pointLight5.position.set(-1.3, 1.3, 2);
scene.add(pointLight5)
// light 2
const pointLight2 = new THREE.PointLight(0x731cff, 1); //purple light
pointLight2.position.set(-2.1, -2.2, -2.2);
scene.add(pointLight2);

//light 3
const pointLight3 = new THREE.PointLight(0x264aff, 4.7); //blue light
pointLight3.position.set(3.7, 5.5, 3.8);
pointLight3.intensity = 3.6;
scene.add(pointLight3);



// // folder to organize the orbit controls
// const ambient1 = gui.addFolder("ambient light 1")
// const light1 = gui.addFolder("Light 1")
// const light2 = gui.addFolder("Light 2");
// const light3 = gui.addFolder("point light")

// // ambient light to controls
// ambient1.add(ambientLight.position, 'y').min(-10).max(10).step(0.1);
// ambient1.add(ambientLight.position, 'x').min(-6).max(6).step(0.1);
// ambient1.add(ambientLight.position, 'z').min(-10).max(10).step(0.1);
// ambient1.add(ambientLight, 'intensity').min(0).max(10).step(0.1);

// // point lights controls
// light1.add(pointLight2.position, 'y').min(-10).max(10).step(0.1);
// light1.add(pointLight2.position, 'x').min(-6).max(6).step(0.1);
// light1.add(pointLight2.position, 'z').min(-10).max(10).step(0.1);
// light1.add(pointLight2, 'intensity').min(0).max(10).step(0.1);

// const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1); // first helper
// scene.add(pointLightHelper);
// light2.add(pointLight3.position, 'y').min(-10).max(10).step(0.1);
// light2.add(pointLight3.position, 'x').min(-6).max(6).step(0.1);
// light2.add(pointLight3.position, 'z').min(-10).max(10).step(0.1);
// light2.add(pointLight3, 'intensity').min(0).max(10).step(0.1);
// const pointHelper2 = new THREE.PointLightHelper(pointLight3, 1); // second helper
// scene.add(pointHelper2);

// light3.add(pointLight.position, 'y').min(-10).max(10).step(0.1);
// light3.add(pointLight.position, 'x').min(-6).max(6).step(0.1);
// light3.add(pointLight.position, 'z').min(-10).max(10).step(0.1);
// light3.add(pointLight, 'intensity').min(0).max(10).step(0.1);
// const pointHelper3 = new THREE.PointLightHelper(pointLight, 1);
// scene.add(pointHelper3);


// SECOND OBJECT

// const geometry = new THREE.SphereBufferGeometry(.5, 64, 64)

// // Materials

// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0.7;
// material.roughness = 0.2;
// material.normalMap = normalTexture;
// material.color = new THREE.Color(0xffffff)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Lights

// // light 1
// const point2Light = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(point2Light)


// // light 2
// const point2Light2 = new THREE.PointLight(0xff0000, 2);
// pointLight2.position.set(-1, 0.7, -0.3);
// pointLight2.intensity = 1.8;
// scene.add(point2Light2);
// // folder to organize the orbit controls
// const light1 = gui.addFolder("Light 1")
// const light2 = gui.addFolder("Light 2");
// const object = gui.addFolder("object");

// object.add(sphere.position, 'y').min(-3).max(3).step(0.1);
// object.add(sphere.position, 'x').min(-6).max(6).step(0.1);
// object.add(sphere.position, 'z').min(-3).max(3).step(0.1);

// light1.add(pointLight2.position, 'y').min(-3).max(3).step(0.1);
// light1.add(pointLight2.position, 'x').min(-6).max(6).step(0.1);
// light1.add(pointLight2.position, 'z').min(-3).max(3).step(0.1);
// light1.add(pointLight2, 'intensity').min(0).max(10).step(0.1);

// const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1);
// scene.add(pointLightHelper);

// // light 3
// const point2Light3 = new THREE.PointLight(0xe1ff, 2);
// pointLight3.position.set(1.5, -1.5, -0.9);
// pointLight3.intensity = 1.8;
// scene.add(point2Light3);

// light2.add(point2Light3.position, 'y').min(-3).max(3).step(0.1);
// light2.add(point2Light3.position, 'x').min(-6).max(6).step(0.1);
// light2.add(point2Light3.position, 'z').min(-3).max(3).step(0.1);
// light2.add(point2Light3, 'intensity').min(0).max(10).step(0.1);

// const light2Color = {
//     color: 0xff0000
// }
// light2.addColor(light2Color, 'color')
//     .onChange(()=>{
//         point2Light3.color.set(light2Color.color)
//     })

// const pointLightHelper2 = new THREE.PointLightHelper(point2Light3, 1);
// scene.add(pointLightHelper2);
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()