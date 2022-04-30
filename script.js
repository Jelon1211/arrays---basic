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
console.log(joined);

// Zamienie wszystkie elementy w array w single value jakim jest accumulator
// 1 - accumulator -5, currentValue -4 => -9
// 2 - accumulator -9, currentValue -3 => -12
// 3 - accumualtor -12, currentValue -2 => -14
// itd
const reduced = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduced);
