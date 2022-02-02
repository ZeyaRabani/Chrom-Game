import { updateGround } from "./ground.js"

const WORLD_WIDTH = 200
const WORLD_HEIGHT = 60

const worldElem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)

let lastTime
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    console.log(delta)

    updateGround(delta)

    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)


// function setPixelToWorldScale() {
//     let worldToPixelScale
//     if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
//         worldToPixelScale = WORLD_WIDTH / WORLD_HEIGHT
//     } else {
//         worldToWorldScale = window.innerHeight / WORLD_HEIGHT
//     }
//     worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
//     worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
//     //scaling of the window
// }
function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}