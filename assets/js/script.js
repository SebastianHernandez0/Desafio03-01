
let preciofinal=parseInt(document.querySelector(".final__span").textContent)
let preciofinal2=document.querySelector(".final__span")
let precio1=parseInt(document.querySelector(".card__precio1").textContent) 
let suma1= document.querySelector(".button__agregar-1")
let resta1= document.querySelector(".button__disminuir-1")
let cantidad=parseInt(document.querySelector(".buttons__cantidad-1").textContent)  
let cantidad2=document.querySelector(".buttons__cantidad-1")
//2
let precio2=parseInt(document.querySelector(".card__precio2").textContent) 
let suma2= document.querySelector(".button__agregar-2")
let resta2= document.querySelector(".button__disminuir-2")
let cantidad__=parseInt(document.querySelector(".buttons__cantidad-2").textContent)  
let cantidad__2=document.querySelector(".buttons__cantidad-2")
//3
let precio3=parseInt(document.querySelector(".card__precio3").textContent) 
let suma3= document.querySelector(".button__agregar-3")
let resta3= document.querySelector(".button__disminuir-3")
let cantidad_3=parseInt(document.querySelector(".buttons__cantidad-3").textContent)  
let cantidad__3=document.querySelector(".buttons__cantidad-3")
//4
let precio4=parseInt(document.querySelector(".card__precio4").textContent) 
let suma4= document.querySelector(".button__agregar-4")
let resta4= document.querySelector(".button__disminuir-4")
let cantidad_4=parseInt(document.querySelector(".buttons__cantidad-4").textContent)  
let cantidad__4=document.querySelector(".buttons__cantidad-4")
//5
let precio5=parseInt(document.querySelector(".card__precio5").textContent) 
let suma5= document.querySelector(".button__agregar-5")
let resta5= document.querySelector(".button__disminuir-5")
let cantidad_5=parseInt(document.querySelector(".buttons__cantidad-5").textContent)  
let cantidad__5=document.querySelector(".buttons__cantidad-5")
//6
let precio6=parseInt(document.querySelector(".card__precio6").textContent) 
let suma6= document.querySelector(".button__agregar-6")
let resta6= document.querySelector(".button__disminuir-6")
let cantidad_6=parseInt(document.querySelector(".buttons__cantidad-6").textContent)  
let cantidad__6=document.querySelector(".buttons__cantidad-6")
//7
let precio7=parseInt(document.querySelector(".card__precio7").textContent) 
let suma7= document.querySelector(".button__agregar-7")
let resta7= document.querySelector(".button__disminuir-7")
let cantidad_7=parseInt(document.querySelector(".buttons__cantidad-7").textContent)  
let cantidad__7=document.querySelector(".buttons__cantidad-7")
//8
let precio8=parseInt(document.querySelector(".card__precio8").textContent) 
let suma8= document.querySelector(".button__agregar-8")
let resta8= document.querySelector(".button__disminuir-8")
let cantidad_8=parseInt(document.querySelector(".buttons__cantidad-8").textContent)  
let cantidad__8=document.querySelector(".buttons__cantidad-8")

suma1.addEventListener("click",function(){

    if (cantidad >=0) {
        cantidad++
        preciofinal=precio1+preciofinal
        cantidad2.innerHTML=cantidad
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta1.addEventListener("click",function(){
    if (cantidad>0) {

        cantidad--
        preciofinal=preciofinal-precio1
        cantidad2.innerHTML=cantidad
        preciofinal2.innerHTML=preciofinal
    }
})

//2

suma2.addEventListener("click",function(){

    if (cantidad__ >=0) {
        cantidad__++
        preciofinal=precio2+preciofinal
        cantidad__2.innerHTML=cantidad__
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta2.addEventListener("click",function(){
    if (cantidad__>0) {

        cantidad__--
        preciofinal=preciofinal-precio2
        cantidad__2.innerHTML=cantidad__
        preciofinal2.innerHTML=preciofinal
    }
})

//3
suma3.addEventListener("click",function(){

    if (cantidad_3 >=0) {
        cantidad_3++
        preciofinal=precio3+preciofinal
        cantidad__3.innerHTML=cantidad_3
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta3.addEventListener("click",function(){
    if (cantidad_3>0) {

        cantidad_3--
        preciofinal=preciofinal-precio3
        cantidad__3.innerHTML=cantidad_3
        preciofinal2.innerHTML=preciofinal
    }
})
//4
suma4.addEventListener("click",function(){

    if (cantidad_4 >=0) {
        cantidad_4++
        preciofinal=precio4+preciofinal
        cantidad__4.innerHTML=cantidad_4
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta4.addEventListener("click",function(){
    if (cantidad_4>0) {

        cantidad_4--
        preciofinal=preciofinal-precio4
        cantidad__4.innerHTML=cantidad_4
        preciofinal2.innerHTML=preciofinal
    }
})
//5
suma5.addEventListener("click",function(){

    if (cantidad_5 >=0) {
        cantidad_5++
        preciofinal=precio5+preciofinal
        cantidad__5.innerHTML=cantidad_5
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta5.addEventListener("click",function(){
    if (cantidad_5>0) {

        cantidad_5--
        preciofinal=preciofinal-precio5
        cantidad__5.innerHTML=cantidad_5
        preciofinal2.innerHTML=preciofinal
    }
})
//6
suma6.addEventListener("click",function(){

    if (cantidad_6 >=0) {
        cantidad_6++
        preciofinal=precio6+preciofinal
        cantidad__6.innerHTML=cantidad_6
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta6.addEventListener("click",function(){
    if (cantidad_6>0) {

        cantidad_6--
        preciofinal=preciofinal-precio6
        cantidad__6.innerHTML=cantidad_6
        preciofinal2.innerHTML=preciofinal
    }
})
//7
suma7.addEventListener("click",function(){

    if (cantidad_7 >=0) {
        cantidad_7++
        preciofinal=precio7+preciofinal
        cantidad__7.innerHTML=cantidad_7
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta7.addEventListener("click",function(){
    if (cantidad_7>0) {

        cantidad_7--
        preciofinal=preciofinal-precio7
        cantidad__7.innerHTML=cantidad_7
        preciofinal2.innerHTML=preciofinal
    }
})
//8
suma8.addEventListener("click",function(){

    if (cantidad_8 >=0) {
        cantidad_8++
        preciofinal=precio8+preciofinal
        cantidad__8.innerHTML=cantidad_8
        preciofinal2.innerHTML=preciofinal
        
    }
    console.log("click")
})

resta8.addEventListener("click",function(){
    if (cantidad_8>0) {

        cantidad_8--
        preciofinal=preciofinal-precio8
        cantidad__8.innerHTML=cantidad_8
        preciofinal2.innerHTML=preciofinal
    }
})

