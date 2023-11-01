let imgMain = document.getElementById("img-principal")
let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")
let img4 = document.getElementById("img-4")
let img5 = document.getElementById("img-5")
let modal = document.getElementById("box-modal")
let close = document.getElementById("close")

window.onload = () => {
    modal.classList.remove("box-modal")
}

function setActive(img){
    var images = document.querySelectorAll(".img-reducidas")
    images.forEach(function (image) {
        image.classList.remove('active')
    })
    img.classList.add('active');
}

img1.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img1.src
    setActive(img1)
    
})

img2.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img2.src
    setActive(img2)
    
})

img3.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img3.src
    setActive(img3)
    
})

img4.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img4.src
    setActive(img4)
    
})

img5.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img5.src
    setActive(img5)
    
})

close.addEventListener("click", function() {
    modal.classList.remove("visible")
})

function abrir(){
    modal.classList.add("visible")
}
