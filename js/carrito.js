let boxMinus = document.getElementById("boxMinus")
let boxPlus = document.getElementById("boxPlus")
let boxCantidad = document.getElementById("boxCantidad")
let subTotal = document.getElementById("subTotal")
let cop = document.getElementById("cop")

boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML
    let auxCop = cop.innerHTML

    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant
    }
    subTotal.innerHTML = auxCant*auxCop
})

boxMinus.addEventListener("click", function() {
    let auxCanti = boxCantidad.innerHTML
    let auxiCop = cop.innerHTML
    let auxSub = subTotal.innerHTML

    if(auxCanti <= 10 && auxCanti > 0){
        auxCanti--;
        boxCantidad.innerHTML = auxCanti
    }
    subTotal.innerHTML = auxSub-auxiCop
})

