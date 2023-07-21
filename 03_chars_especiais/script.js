const ponToRegex = /./; // aceita tudo
console.log(" o \.\:  ");
console.log(ponToRegex.test("asasd"));
console.log(ponToRegex.test(" "));
console.log(ponToRegex.test("424522"));
console.log(ponToRegex.test("asda1fd5asd2 sd58"));


const dRegez = /\d/; // [0-9] 

console.log(" o \d: ");
console.log(dRegez.test("712"));
console.log(dRegez.test(" "));
console.log(dRegez.test("asd471as s5d5"));
console.log(dRegez.test("adasde"));

const dRegez2 = /\D/; // [^0-9]  Chapesinho como fose  um não 

console.log(" o \D: ");// quwr tudo tem letras menosn umeros
console.log(dRegez2.test("712"));
console.log(dRegez2.test(" "));
console.log(dRegez2.test("asd471as s5d5"));
console.log(dRegez2.test("adasde"));

const sRegez = /\s/; //ele só uira dar  vedade quando tem esço na letra

console.log(" o \s: ");
console.log(sRegez.test("712"));
console.log(sRegez.test(" "));
console.log(sRegez.test("asd471as s5d5"));
console.log(sRegez.test("adasde"));

const wRegez = /\w/; //ele  aceiita nuemos e letras

console.log(" o \w: ");
console.log(wRegez.test("712"));
console.log(wRegez.test(" "));
console.log(wRegez.test("asd471as s5d5"));
console.log(wRegez.test("adasde"));