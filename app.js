const image1 = document.querySelector('.img1')
const image2 = document.querySelector('.img2')
const refresh = document.querySelector('.refresh')
let random1 = Math.floor(Math.random(image1) * 6 + 1)
let random2 = Math.floor(Math.random(image2) * 6 + 1)

image1.src = `images/dice${random1}.png`
image2.src = `images/dice${random2}.png`


if (random1 > random2) {
    refresh.textContent = `Player 1 win`
} else if (random1 < random2) {
    refresh.textContent = `Player 2 win`
} else if (random1 == random2) {
    refresh.textContent = `Draw`
}