import * as THREE from 'three';

// canvas
// doesn't use id for canvas element because of a conflict he found once
// also interesting that querySelector allows a generic arg where getElementById does not
// const canvas = document.querySelector<HTMLCanvasElement>('canvas.webgl')!;

export function run(canvas: HTMLCanvasElement) {
    console.log("running firstThreeJSProject");

    const scene = new THREE.Scene();

    // shape
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // material
    const material =
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            // wireframe: true // optional
        });

    // mesh = geometry + material
    const mesh = new THREE.Mesh(geometry, material);

    // add object to scene
    scene.add(mesh);

    // Sizes in px
    const sizes = {
        width: 800,
        height: 600
    };

    // camera
    const camera =
        new THREE.PerspectiveCamera(
            75, // is a pretty high field of view - using so easier for us to see when learning
            sizes.width / sizes.height) // aspect ratio

    // move the camera back a bit so we can see the cube (otherwise the camera is inside the cube)
    camera.position.z = 3;

    scene.add(camera);


    // render
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    // alt-renderer
    // const altRenderer = new THREE.WebGPURenderer({
    //     canvas: canvas
    // });

    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);
}