window.addEventListener("resize", e => {
    console.log(window.innerWidth);

    document.querySelector(".img-mask").style.left = `${(window.innerWidth / 2) - 228}px`;
    document.querySelector(".text-mask").style.left = `${(window.innerWidth / 2) - 651}px`;
    document.querySelector(".sub-text-mask").style.left = `${(window.innerWidth / 2) - 615}px`;
})