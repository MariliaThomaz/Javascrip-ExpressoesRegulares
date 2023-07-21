


// vamos  mais de  um dados  para isto usa []
// qando  quer  procura  uma gama de numeros usa usa o  traço como --> [0-9]

const reg1 =/[12346789]/;

console.log(reg1.test("tem o numero 6"));

console.log(reg1.test("tem o numero 5"));

console.log(reg1.test("tem o numero 66"));//ele  não devia aceita  mias ele  não faz  distinção

// melhor é usar é -> [0-9]
const reg2 = /[0-9]/;
console.log(reg2.test("tem o valor: 1555"));

console.log(reg2.test("tem o valor"));//usa esta espreção  para tambem ver  só numeros