// 1. Asociamos el id del toggle-box
// 2. Verificamos que clase se enceuntra en choice-box
// 2.1 Al dar click quitamos la clase por defecto de choice-box y agragmos la clase que venia con el hover de choice-box

let container = document.getElementById("container");
let containerDos = document.getElementById("containerDos");

container.addEventListener("click", function(){
    if(containerDos.classList.contains("container-dos-off")){
        containerDos.classList.add("container-dos-on");
        containerDos.classList.remove("container-dos-off");
        container.classList.add("container-on");
        container.classList.remove("container-off");
    }

else{
    containerDos.classList.remove("container-dos-on");
        containerDos.classList.add("container-dos-off");
        container.classList.remove("container-on");
        container.classList.add("container-off");
}
});