import { run } from "./part3/firstThreeJSProject";

console.log("hello wrold");

const canvas = document.querySelector<HTMLCanvasElement>('canvas.webgl')!;

run(canvas);