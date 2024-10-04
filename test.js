// const sym1 = Symbol("id");
// const sym2 = Symbol("id");

// console.log(sym1 === sym2);

// const user = { name: "Dave", [sym1]: 123 };

// console.log(user[sym1]);
// console.log(Object.keys(user));

// const str = "  Hello World   ";

// console.log(str.trimStart());
// console.log(str.trimEnd());

// const text = "apple, banana, apple";
// const newText = text.replaceAll("apple", "orange");

// console.log(newText);

const p1 = new Promise((_, reject) => setTimeout(reject, 100, "에러 1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, "성공 2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, "성공 3"));

Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
