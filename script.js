const array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// filtruje array i zwraca elementy, które spełniają warunek w nowej array
const filtered = array.filter((number) => number >= 0);
console.log(filtered);

// forEach wykonuje callBack function dla każdego elemetu w array. Zmienia Array
array.forEach((number, index) => {
  console.log("index[" + index + "]" + " " + number);
});

//Map to samo co forEach tylko, że tworzy nową array
const mapped = array.map((number) => number * 10);
console.log(mapped);

//Join, łączy array w stringa. Defaultowo jest ,
const joined = mapped.join("");
console.log("To jest string -> ", joined);

// Zamienie wszystkie elementy w array w single value jakim jest accumulator
// 1 - accumulator -5, currentValue -4 => -9
// 2 - accumulator -9, currentValue -3 => -12
// 3 - accumualtor -12, currentValue -2 => -14
// itd
const reduced = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("Wszystkie elementy dodane ", reduced);

//Nie tworzy nowej array. Usuwa wszystkie elementy z array, które są poza parametrami.
//Pierwszy parametr od którego zaczyanmy drugi na ktorym konczymy
const sliced = array.slice(0, 10);
console.log("Kopiuje od indexu 0 do 10 ", sliced);

//splice może zastąpić elementy w array.
//Parametry to index strat, finished, następne co ma się zastapić
const spliced = array.map((i) => i);
spliced.splice(1, 3, 1, 2, 3);
console.log(
  "Wszystko od indexu 1 do 3 zostało usuniete i wstawione w to 1,2,3 ",
  spliced
);

//split, zmienia stringa w array.
//Pierwszey parametr to separator, jak pusty string to element w array dodaje się każda litera.
// Drugi to limit do SŁÓW.
const sentence = "hello my beautiful world we live in";
const splited = sentence.split(" ", 1);
console.log("Tylko pierwszy wyraz -> ", splited);

//find znajduje pierwszy element w array. Parametry element,index.
const found = array.find((element) => (element = element));
console.log("Znaleziony pierwszy element array ", found);

let array2 = [
  [1, 2],
  [3, 4, 5, 6],
  [1, 1, 3],
];
/*
let garage = [
  ["Mustang", "F-150", "Explorer"],
  ["Corvette", "Silverado", "Equinox"],
  ["Camry", "Highlander", "Tacoma"],
];

console.log(garage[2][2]);
for (let i = 0; i < garage.length; i++) {
  for (let j = 0; j < garage[i].length; j++) {
    console.log(garage[i][j]);
  }
}
*/
array2.forEach(function (row) {
  row.forEach(function (element) {
    console.log(element);
  });
  console.log("-------");
});
