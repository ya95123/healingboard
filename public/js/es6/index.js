// *背景 & 動圖連結
import imgSrc from "./imgSrc.js"

// *變數
const bgArr = imgSrc.bg
const aniImgArr = imgSrc.animateImg
const app = document.getElementById("app")
const bg = document.getElementById("bg")

// *區間隨機數
const rand = (min, max) => {
  let randArr = (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1));
  let randNum = randArr[0] / (0xffffffff + 1)
  return Math.floor((randNum * (max - min + 1) + min))
}

// *隨機背景 & 動圖
bg.setAttribute("src", bgArr[rand(0, bgArr.length - 1)].url)
app.insertAdjacentHTML("afterbegin", `
<lottie-player id="aniImg"src="${aniImgArr[rand(0, aniImgArr.length - 1)].url}" background="transparent" speed="1" loop autoplay></lottie-player>
`)