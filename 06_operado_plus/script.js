
//Siquifica que via ter  monte  de elementos que  via repeti varias veses 
const umOumMaisNumeros =/\d+/;
//aceita monta lentra  ou nuemro \d+
console.log("aceita qualquer nuemro: ");
console.log(umOumMaisNumeros.test("1540"));
console.log(umOumMaisNumeros.test(" "));
console.log(umOumMaisNumeros.test(" DARassdfsd"));
console.log(umOumMaisNumeros.test("4 "));
console.log(umOumMaisNumeros.test("4275463821957216572"));

