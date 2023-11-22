let start1 = document.getElementById("start1")
let start2 = document.getElementById("start2")
let start3 = document.getElementById("start3")
let start4 = document.getElementById("start4")
let start5 = document.getElementById("start5")
let puntuacion = document.getElementById("cali").innerText = 4.7
    
    if(puntuacion >= 0 && puntuacion <= 0.2) {
        start1.setAttribute("class", "start fa-regular fa-star")
        start2.setAttribute("class", "start fa-regular fa-star")
        start3.setAttribute("class", "start fa-regular fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
        start1.setAttribute("class", "start fa-solid fa-star-half-stroke")
        start2.setAttribute("class", "start fa-regular fa-star")
        start3.setAttribute("class", "start fa-regular fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-regular fa-star")
        start3.setAttribute("class", "start fa-regular fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 1.3 && puntuacion <= 1.7){
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star-half-stroke")
        start3.setAttribute("class", "start fa-regular fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-regular fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star-half-stroke")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 2.8 && puntuacion <= 3.2){
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star")
        start4.setAttribute("class", "start fa-regular fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star")
        start4.setAttribute("class", "start fa-solid fa-star-half-stroke")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star")
        start4.setAttribute("class", "start fa-solid fa-star")
        start5.setAttribute("class", "start fa-regular fa-star")
    }
    else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star")
        start4.setAttribute("class", "start fa-solid fa-star")
        start5.setAttribute("class", "start fa-solid fa-star-half-stroke")
    }
    else if(puntuacion >= 4.8 && puntuacion <= 5){
        start1.setAttribute("class", "start fa-solid fa-star")
        start2.setAttribute("class", "start fa-solid fa-star")
        start3.setAttribute("class", "start fa-solid fa-star")
        start4.setAttribute("class", "start fa-solid fa-star")
        start5.setAttribute("class", "start fa-solid fa-star")
    }

let imgMain = document.getElementById("img-principal")
let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")
let img4 = document.getElementById("img-4")
let img5 = document.getElementById("img-5")

let modal = document.getElementById("box-modal")
let close = document.getElementById("close")

let imagePrincipal = document.getElementById("imagePrincipal")
let image1 = document.getElementById("image-1")
let image2 = document.getElementById("image-2")
let image3 = document.getElementById("image-3")
let image4 = document.getElementById("image-4")
let image5 = document.getElementById("image-5")

function active(imga){
    var image = document.querySelectorAll(".imagesReducidas")
    image.forEach(function (imagen) {
        imagen.classList.remove('imgActive')
    })
    imga.classList.add('imgActive');
}

image1.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image1.src
    active(image1)
})
image2.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image2.src
    active(image2)
})
image3.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image3.src
    active(image3)
})
image4.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image4.src
    active(image4)
})
image5.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image5.src
    active(image5)
})

window.onload = () => {
    contenedor.classList.add("contenedor2")
    principal.classList.add("infoProductoTop2")
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

let principal = document.getElementById("principal")
let resultados = document.getElementById("resultados")
let contenedor = document.getElementById("contenedor")

close.addEventListener("click", function() {
    modal.classList.remove("visible")
})

function abrir(){
    modal.classList.add("visible")
}

function ir(){
    resultados.classList.add("mainContent2")
    principal.classList.remove("infoProductoTop2")
    contenedor.classList.remove("contenedor2")
}

function volverResults(){
    contenedor.classList.add("contenedor2")
    principal.classList.add("infoProductoTop2")
    resultados.classList.remove("mainContent2")
}