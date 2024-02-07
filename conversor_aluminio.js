

let resistividade = 0.0282    // 0,0282 Ω. mm²/m codutor de cobre

let comprimento = 1555
let areaTransversal = 2.5    // o valor minimo é 1 para não dividir por zero
let resistencia = 0 

resistencia = (resistencia * comprimento) / areaTransversal

console.log("O valor da resistência é= " , resistencia)

