//Variáveis para armazenar nome, vitórias e derrotas.
let nomeHeroi = "Otávio"
let vitorias = 105
let derrotas = 34

//Chamada da função como resultado.
let resultado = calcularNivel(vitorias, derrotas)

//Função para calcular o resultado e nível do herói.
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    } 
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } 
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } 
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } 
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } 
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } 
    else {saldoVitorias > 100 
        nivel = "Imortal";
    }

    return {saldoVitorias, nivel};
}

// Mensagem final
console.log("O Herói " + nomeHeroi + " tem de saldo de "
+ resultado.saldoVitorias + " vitórias e está no nível " + resultado.nivel)

