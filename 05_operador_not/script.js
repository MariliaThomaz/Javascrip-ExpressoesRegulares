

const notb =/[^ab]/;

console.log("não vou aceitar ");// ele não aceita a  e  b mas vir esolada    ela são aceita 
console.log(notb.test("a"));
console.log(notb.test("b"));
console.log(notb.test("adas"));
console.log(notb.test("bsdf"));




;

const notdeaz=/[^a-z]/;

console.log("letras de a - z ");
console.log(notb.test("a"));
console.log(notb.test("z"));
console.log(notb.test("adassdfsz"));
console.log(notb.test("bsdfsdasda"));
console.log(notb.test("bs52da"));