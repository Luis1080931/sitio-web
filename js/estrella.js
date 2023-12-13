/* let star1 = document.getElementById("star1")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")
let star4 = document.getElementById("star4")
let star5 = document.getElementById("star5")
let puntuacion = document.getElementById("puntuacion").innerText = 2.7

if(puntuacion >= 0 && puntuacion <= 0.2) {
    star1.setAttribute("class", "start fa-regular fa-star")
    star2.setAttribute("class", "start fa-regular fa-star")
    star3.setAttribute("class", "start fa-regular fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
    star1.setAttribute("class", "start fa-solid fa-star-half-stroke")
    star2.setAttribute("class", "start fa-regular fa-star")
    star3.setAttribute("class", "start fa-regular fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-regular fa-star")
    star3.setAttribute("class", "start fa-regular fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 1.3 && puntuacion <= 1.7){
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star-half-stroke")
    star3.setAttribute("class", "start fa-regular fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-regular fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star-half-stroke")
    star4.setAttribute("class", "start fa-regular fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}

else if(puntuacion >= 2.8 && puntuacion <= 3.2){
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star")
    star4.setAttribute("class", "start fa-regular fa-star")

    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star")
    star4.setAttribute("class", "start fa-solid fa-star-half-stroke")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star")
    star4.setAttribute("class", "start fa-solid fa-star")
    star5.setAttribute("class", "start fa-regular fa-star")
}
else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star")
    star4.setAttribute("class", "start fa-solid fa-star")
    star5.setAttribute("class", "start fa-solid fa-star-half-stroke")
}
else if(puntuacion >= 4.8 && puntuacion <= 5){
    star1.setAttribute("class", "start fa-solid fa-star")
    star2.setAttribute("class", "start fa-solid fa-star")
    star3.setAttribute("class", "start fa-solid fa-star")
    star4.setAttribute("class", "start fa-solid fa-star")
    star5.setAttribute("class", "start fa-solid fa-star")
} */


let cal = document.getElementById("cal-box")
let star = document.getElementById("start")

let resul = document.getElementById("resultado")

let barra_cinco = document.getElementById("resultado_cinco")
let barra_cuatro = document.getElementById("resultado_cuatro")
let barra_tres = document.getElementById("resultado_tres")
let barra_dos = document.getElementById("resultado_dos")
let barra_uno = document.getElementById("resultado_uno")
let resultado;

/* const valor5 = 100
const valor4 = 100
const valor3 = 100
const valor2 = 10
const valor1 = 10

star.addEventListener("mouseover", () => {

    cargar();
})

    star.addEventListener("mouseout", () => {
        setTimeout(() => {
            cal.style.display = "none"
        }, 10000)
        
    })

    function cargar(){
        cal.style.display = "inline"
        setTimeout(() => {
            resultado = parseInt(valor5) + parseInt(valor4) + parseInt(valor3) + parseInt(valor2) + parseInt(valor1)

            resul.innerHTML = resultado

            let total_cinco = parseInt(valor5) * 100 / resultado
                barra_cinco.style.width = `${total_cinco}%`

            let total_cuatro = parseInt(valor4) * 100 / resultado
                barra_cuatro.style.width = `${total_cuatro}%`

            let total_tres = parseInt(valor3) * 100 / resultado
                barra_tres.style.width = `${total_tres}%`

            let total_dos = parseInt(valor2) * 100 / resultado
                barra_dos.style.width = `${total_dos}%`

            let total_uno = parseInt(valor1) * 100 / resultado
                barra_uno.style.width = `${total_uno}%`
        }, 1)
        
    } */
    let input_cinco = document.getElementById("input-5")
    let input_cuatro = document.getElementById("input-4")
    let input_tres = document.getElementById("input-3")
    let input_dos = document.getElementById("input-2")
    let input_uno = document.getElementById("input-1")


let btn_resultado = document.getElementById("btn-resultado")



    
    btn_resultado.addEventListener("click", () => {
    
    resultado = parseInt(input_cinco.value) + parseInt(input_cuatro.value) + parseInt(input_tres.value) + parseInt(input_dos.value) + parseInt(input_uno.value)

    resul.innerHTML = resultado

    let total_cinco = parseInt(input_cinco.value) * 100 / resultado
        barra_cinco.style.width = `${total_cinco}%`

    let total_cuatro = parseInt(input_cuatro.value) * 100 / resultado
        barra_cuatro.style.width = `${total_cuatro}%`

    let total_tres = parseInt(input_tres.value) * 100 / resultado
        barra_tres.style.width = `${total_tres}%`

    let total_dos = parseInt(input_dos.value) * 100 / resultado
        barra_dos.style.width = `${total_dos}%`

    let total_uno = parseInt(input_uno.value) * 100 / resultado
        barra_uno.style.width = `${total_uno}%`

    })

    
