// ///////////////////////////////////////////////////////////////////////////
// funtion declation 1
// function calculate(wrapper) {
//   console.log(`hello from ${wrapper}`);
// }

// calculate("Uzbekistan");
// calculate("Tachikistan");

// funtion declation arry and for
// const borserOfUzbekistan = [
//   "Tachikistan",
//   "Kyrygistan",
//   "Kazakistan",
//   "Uzbekistan",
// ];
// function declation(wrapper) {
//   console.log(`Hello from ${wrapper}`);
// }
// for (let i = 0; i < borserOfUzbekistan.length; i++) {
//   declation(borserOfUzbekistan[i]);
// }

// for 2 usuli
// const borserOfUzbekistan = [
//   "Tachikistan",
//   "Kyrygistan",
//   "Kazakistan",
//   "Uzbekistan",
// ];
// function declation(wrapper) {
//   console.log(`Hello from ${wrapper}`);
// }
// for (let border of borserOfUzbekistan) {
//   declation(border);
// }

// function declation 2 ta funcition chaqirish
// function loop(a, b) {
//   return function (name, old) {
//     console.log(`mening ismim ${name}`);
//     console.log(`yoshim ${old}`);
//   };
// }

// loop()("Muhammadnazar", 17);

// ////////////////////////////////////////////////////////////////////
// function expression 2
// const calculate = function (name) {
//   return `Hello ${name}`;
// };

// calculate("muhammadnazar");

// ////////////////////////////////////////////////////////////////////
// arrow function
// const calculate = (name) => {
//   return `Hello ${name}`;
// };

// calculate("Nazarov__mk");

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// misollar
// misol 1
function sum(x, y) {
  return x + y;
}

sum(3, 2);

// misol 2

function toSekund(minutes) {
  return minutes * 60;
}

toSekund(5);

// misol 3
function butunSon(int) {
  return int + 1;
}

butunSon(9);

// misol 4
function wrapper(asos, balandlik) {
  return (S = (asos * balandlik) / 2);
}

wrapper(3, 2);

// misol 5
function years(odl) {
  return odl * 365;
}

years(5);

// misol 6
function misol(kub) {
  return kub * kub * kub;
}

misol(3);

// misol 7
function firstElement(arr) {
  return arr[0];
}

let arr = [1, 2, 3, 4, 5];
firstElement(arr);

// misol 8
function power(x, y) {
  return x * y;
}

power(23, 10);

// misol 9
function secunts(hours) {
  return hours * 3600;
}

secunts(2);

// misol 10
function tomonlar(tomon1, tomon2) {
  return tomon1 + tomon2 - 1;
}

tomonlar(5, 10);

// misol 11
function misolQoldiq(number1, number2) {
  return number1 % number2;
}

misolQoldiq(3, 4);

// misol 12
function torBurchak(boyi, eni) {
  return boyi * eni;
}

torBurchak(6, 7);

// misol 13
function string(text) {
  return `Something ${text}`;
}

string("is better than nothing");

// misol 14
function kopayturuv(a) {
  return a * a;
}

kopayturuv(9);

// misol 15
function zero(num) {
  return num <= 0;
}

zero(-4);

// misol 16
function Burchak(n) {
  return (n - 2) * 180;
}

Burchak(3);

// misol 17
function ochkolar(x, y) {
  return x * 2 + y * 3;
}

ochkolar(7, 5);

// misol 18
function text(string) {
  return `Mubashir ${string}`;
}

text("Edabit");

// misol 19
function yuzdanKichikSon(p, j) {
  return p + j < 100;
}

yuzdanKichikSon(15, 60);

// misol 20
function arrey(one) {
  let results = [];
  for (let i = 1; i < one; i++) {
    results.push(i);
  }
  return results;
}

arrey(4);

// misol 21
function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

oyoqlar(2, 3, 5);

// misol 22
function boolean(s, n) {
  return s && n;
}

boolean(true, true);

// misol 23
function skin(x, u) {
  return x === u;
}

skin(5, 5);

// misol 24
function fudbol(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}

fudbol(3, 4, 2);

// misol 25
function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}

sekundlar(1, 3);

// misol 26
function fun(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
fun(7);

// misol 27
function skinString(p, v) {
  return p === v;
}

skinString(7, 7);

// misol 28
function booleanString(or) {
  return String(or);
}

booleanString(false);

// misol 29
const calculate = (name) => {
  return name;
};

calculate(3);

// misol 30
function frameSoni(minut, frame) {
  return minut * 60 * frame;
}

frameSoni(10, 25);

// misol 31
function calc(str) {
  return eval(str);
}

calc("23+4");

// misol 32
function ten(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}

ten(1 + 9);

// misol 34
function raqam(a, b) {
  return a > b ? a : b;
}

raqam(7, 8);

// misol 35
function arrow(s, f) {
  return [s, f];
}

arrow(571, 52);

// misol 36
function strings(str1, str2) {
  return str1.length === str2.length;
}

strings("AB", "CD");

// masala 37
function boshStr(oyu) {
  return oyu.length < 1;
}

boshStr("");

// masala 38
function fiveLine(keys) {
  return keys % 5 === 0;
}

fiveLine(5);

// misol 39
function oneHundred(numbers) {
  return numbers % 100 === 0;
}

oneHundred(100);

// misol 40 - misol 33 tushinmadim!!!!
