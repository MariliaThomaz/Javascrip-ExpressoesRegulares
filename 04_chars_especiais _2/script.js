

const dia = /\d\d/;//estou vendo se tenho doi caraquites

//para 2019 ser não ser coresido tem  faz trtameto faldo qual é compriemto
console.log(dia.test("2019") && "2019" .length == 2);
console.log(dia.test("5asd"));
console.log(dia.test("05") && "05".length ==2);
let valor = dia.test("08") && "05".length ==2;
console.log("valor é: ",valor);


const palavraTreLetras = /\w\w\w/;
console.log("lentras w/w/w: ");
console.log(palavraTreLetras.test("asd"));
console.log(palavraTreLetras.test("asddd"));// aqui vai dar certo poisa ela  tem 3 lentras  ela  olhando para comprimeto
console.log(palavraTreLetras.test("sd"));
