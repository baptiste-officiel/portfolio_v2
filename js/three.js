import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.querySelector('#canvas');
const scene = new THREE.Scene()
// scene.background = new THREE.Color(0x000)

const loader = new GLTFLoader();
loader.load('/assets/img/pc_3d.glb', function(glb){
    console.log(glb);
    const root = glb.scene;
    // root.scale.set(0.03, 0.03, 0.03)
    scene.add(root)
}, function(xhr){
    console.log(xhr.loaded/xhr.total * 100);
}, function(error){
    console.log(error);
})

const light = new THREE.AmbientLight(0xffffff, 1)
// light.position.set(0,0,5)
scene.add(light)
const dirLight = new THREE.DirectionalLight(0xffffff, 2)
// light.position.set(0,0,5)
scene.add(dirLight)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight/2
}
const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 1, 2000)
// camera.position.x = 100

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({
//   color: '#f95738',
// })
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

camera.position.set(0, 0.6, 4)

const renderer = new THREE.WebGLRenderer({canvas, alpha: true})


// Controls 
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 6;




// Resize 
window.addEventListener('resize', () => {
  // Update size 
  console.log(window.innerWidth);

  if (window.innerWidth <= 1028) {
      sizes.width = window.innerWidth,
      sizes.height = window.innerHeight/2
    } else {
      sizes.width = window.innerWidth,
      sizes.height = window.innerHeight/1.5
  }

  // Update camera 
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height)
})

const loop = () =>{
    controls.update();
    window.requestAnimationFrame(loop)
    renderer.render(scene, camera)
    // scene.rotation.x = 0.2
    scene.position.y = -0.2
    scene.rotation.y += 0.005
}
loop()

renderer.setSize(sizes.width, sizes.height)
// renderer.setClearColor(0x000000, 0)