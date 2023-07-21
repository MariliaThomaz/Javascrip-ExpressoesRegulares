
//usando uma expreção regular RegExp para  testa  esta escrito --> Bola

const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola"));
console.log(reg1.test("não  tem"));

//outra forma é

const reg2 = /bola/;

let text = 'tem  bola na seta';
console.log(reg2.test("tem bola"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));

//outra  forma 
console.log(/quadrado/.test("tem quadrado"));
console.log(/quadrado/.test("tem QUADRADO"));// o  tesr -e  um meto 