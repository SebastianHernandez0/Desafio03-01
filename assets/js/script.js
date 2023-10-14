


let cantidad=document.querySelector(".cantidad")
let botonSuma=document.querySelector(".cantidad__suma")
let botonResta=document.querySelector(".cantidad__resta")
let body=document.querySelector("body")
let precioSpan = document.querySelector(".precio-inicial");
let PrecioFinal= document.querySelector(".valor-total")
let precio = 400000;

let value= cantidad.textContent;
var valueEntero= parseInt(value)



if (valueEntero >= 0) {
    botonSuma.addEventListener("click", function(){
        valueEntero++
        cantidad.innerHTML=valueEntero
        PrecioFinal.innerHTML=precio * valueEntero
        console.log(valueEntero)
    })
    
}




    botonResta.addEventListener("click", function(){
        if(valueEntero > 1){
        valueEntero--
        cantidad.innerHTML=valueEntero
        PrecioFinal.innerHTML=precio * valueEntero
        console.log(valueEntero)
    }
    })





precioSpan.innerHTML=precio






