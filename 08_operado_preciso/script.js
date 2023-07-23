
//etipoe vendo formato do cep

const cep=/\d{5}-\d{3}/;

console.log("verificando o cep: ");
console.log(cep.test("88117-500"));
console.log(cep.test("abacai"));


//validar  tefone
const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log("validando tel: ");
console.log(tel.test("(19)1514-1257"));
console.log(tel.test("(48)42356-1257"));