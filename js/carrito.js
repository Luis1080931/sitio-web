let boxMinus = document.getElementById("boxMinus")
let boxPlus = document.getElementById("boxPlus")
let boxCantidad = document.getElementById("boxCantidad")
let subTotal = document.getElementById("subTotal")
let cantidad = document.getElementById("cantidadProducto")
let numero = document.getElementById("numeroProducto")
let valorProducto = 4000000
let txtProducto = document.getElementById("txtProducto")

let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto)
document.getElementById("cop").innerHTML = auxValorProducto

boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML

    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant
        cantidad.innerHTML = auxCant
        determinarSingularPlural(auxCant)
        calcularTotal()
    }
})

boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML
    let auxSub = subTotal.innerHTML

    if(auxCant <= 10 && auxCant > 0){
        auxCant--;
        boxCantidad.innerHTML = auxCant
        cantidad.innerHTML = auxCant
        determinarSingularPlural(auxCant)
        calcularTotal()
    }
})

function calcularTotal(){
    let auxCantidad = boxCantidad.innerHTML
    let subTotal = document.getElementById("subTotal").innerHTML = valorProducto * Number(boxCantidad.innerHTML)

    let auxSubTotal = new Intl.NumberFormat("de-DE").format(subTotal)
    document.getElementById("subTotal").innerHTML = auxSubTotal
}
function determinarSingularPlural(auxCant){
    if(auxCant == 0 || auxCant > 1){
        numero.innerText = "productos"
    }else if(auxCant == 1){
        numero.innerText = "producto"
    }
}

