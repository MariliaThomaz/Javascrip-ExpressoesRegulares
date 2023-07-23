


function Veficando(num) {

    let conta = (7777 - num) / 7777;

    if (num >= 1000 && num <= 1999) {
        alert("muito loge  valor baixo ", conta.toFixed(2), num);
        console.log("num >= 1000 && num  <= 1999", num);

    } else if (num >= 2000 && num <= 2999) {
        alert("muito loge  valor baixo ", conta.toFixed(2));
        console.log("num >= 2000 && num  <= 2999", num);

    } else if (num >= 3000 && num <= 3999) {
        alert("muito loge  valor baixo ", conta.toFixed(2));
        console.log("num >= 3000 && num  <= 3999", num);

    } else if (num >= 4000 && num <= 4999) {
        alert("muito loge  valor baixo"), conta.toFixed(2);
        console.log("num >= 4000 && num  <= 4999", num);

    } else if (num >= 5000 && num <= 5999) {
        alert("muito  baixo ", conta.toFixed(2));
        console.log("num >= 5000 && num  <= 5999", num);

    } else if (num >= 6000 && num <= 6999) {
        alert("muito  baixo  mais esta  perto 600", conta.toFixed(2));
        console.log("num >= 6000 && num  <= 6999", num);

    } else if (num >= 7000 && num <= 7776) {
        alert(" esta  muito perto", conta.toFixed(2));
        console.log("num >= 7000 && num  <= 7999", num);
    } else if (num == 7777) {


        alert("parabes vc acho nuemro ", conta.toFixed(2));

    } else if (num >= 7776 && num <= 8999) {
        alert("muito  axima ", conta.toFixed(2));
        console.log("num >= 8000 && num  <= 8999", num);

    } else if (num >= 9000 && num == 9999) {
        alert("muito  muito axima", conta.toFixed(2));
        console.log("num > 9000 && num  == 9999", num);
    }

    
    while (num != 7777) {

        let num = prompt("Digite um número 2");
         resultado = checarNumero(num);
    
        if (num == 7777) {
            break;
        }
    
    }

}

const n = /^\d{4}$/;


function checarNumero(num) {


    // Transformando mesmo que o valor seja uma string em número
    let number = Number(num);

    // Verificando se o número é um número
    if (Number.isNaN(number)) {
        alert("Digitou errado, passe apenas números para o programa.");
    } else if (!n.test(num)) {
        alert("Digitou errado, a quantidade de números não é quatro.");
    } else {
        alert("Correto, a quantidade de números é quatro.");
        Veficando(number);
    }

    return number;
}

let num = prompt("Digite um número");
let resultado = checarNumero(num);

if (resultado !== null && resultado !== false) {
    alert("O número verificado é: " + resultado);
} 