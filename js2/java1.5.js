alert("calculo de area geometrica")

let escolha=prompt("digite um numero da figura geometrica :\n1.triangulo\n2.quadrado\n3.retangulo\n4.circulo")

if(escolha == 1){
//triangulo//
let base =parseFloat(prompt("digitea base"))

let latura =parseFloat(prompt("digite altura")) 

calculo= base*latura/2
alert("resultado:"+calculo)

}else if(escolha ==3){
//retangulo//
let base =parseFloat(prompt("digitea base"))

let latura =parseFloat(prompt("digite altura")) 

calculo= base*latura
alert("resultado:"+calculo)

}else if(escolha ==2){
    //quadrado//
    let base =parseFloat(prompt("digitea lado"))
    
    calculo= base*base
    alert("resultado:"+calculo)
    
    }else if(escolha ==4){
        //circulo//
        let base =parseFloat(prompt("digitea base"))
        
        calculo= base*3.14
        alert("resultado:"+calculo)
        
        }