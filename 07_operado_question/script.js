
//ele usa  ? para ser palavra  ou letra  opisonal 

const opicional=/abacax?i/
;
//aceita monta lentra  ou nuemro \d+
console.log("não impota ter  o x na  plalabra: ");
console.log(opicional.test("abacaxi"));
console.log(opicional.test("abacai"));
