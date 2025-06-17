
//Uma função que imprime um triângulo de tamanho 7 usando o caractere "#".
function loopTriangle(){

//declara uma váriavel vazia str, que será usada para construir o triângulo    
let str = ""

//loop que itera de 1 a 7
for(let i = 1; i<=7; i++){

    //verifica se o tamanho da string é menor ou igual ao índice atual
    if(str.length <=i ){
        //se sim, adiciona o caractere "#" à string
        str +="#";
        //imprime a string atual    
        console.log(str)
    }
}
}

loopTriangle()
