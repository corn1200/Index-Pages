const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
  const wrap = one('.slide-item') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  const height = target.clientHeight
  // .slide ul의 너비 조정
  target.style.cssText = `height:calc(100% * ${len});`
  // .slide li의 너비 조정
  Array.from(target.children)
  .forEach(ele => ele.style.cssText = `height:calc(100% / ${len});`)
  // 화면 전환 실행
  let pos = 0
  setInterval(() => {
    pos = (pos + 1) % len // 장면 선택
    target.style.marginTop = `${-pos * height}px`
  }, 1500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}

let popupBtn
let layerSect
let closeBtn
function openPopup() {
  layerSect.classList.remove("closed")
}
function closePopup() {
  layerSect.classList.add("closed")
}
window.onload = function () {
  slide()
  setTimeout(function() {
    const wrap = one('.slide-item') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    // .slide ul의 너비 조정
    target.style.cssText += `transition:1s;`
  }, 500);
  layerSect = document.querySelector("#layer-section")
  popupBtn = document.querySelector("#popup-btn")
  closeBtn = document.querySelector("#close-btn")
  popupBtn.addEventListener("click", openPopup)
  closeBtn.addEventListener("click", closePopup)
}