let precio1=parseInt(document.querySelector(".card__precio1").textContent) 
let suma1= document.querySelector(".button__agregar-1")
let resta1= document.querySelector(".button__disminuir-1")
let preciofinal=parseInt(document.querySelector(".final__span").textContent)
let preciofinal2=document.querySelector(".final__span")
let cantidad=parseInt(document.querySelector(".buttons__cantidad").textContent)  
let cantidad2=document.querySelector(".buttons__cantidad")

function sumar(precio,cantidad,preciofinal){
    if (cantidad >=0) {
        cantidad++
        preciofinal==precio+preciofinal
        cantidad2.innerHTML=cantidad
        preciofinal2.innerHTML=preciofinal
        
    }
}

suma1.addEventListener("click",sumar(precio1,cantidad,preciofinal))
