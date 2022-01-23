// alert(RegExp("[1-9]").test("asd"))
// alert(/^[1-9]*$/.test("a1sd"))
// alert(/^[1-9]*$/.test("123"))
//

// const result = prompt("che po browseru?");
// if (result === "explorer") {
//     alert("pshel na....");
// }
// if (result === "chrome" || result === "safari" || result === "edge") {
//     alert(result);
// } else {
//     alert("BARADA");
// }

let arr = [1, 2, 3, 4];
alert(arr.age);
const testObj = {name: "oleg", age: 15};
localStorage.setItem("first", "25");
localStorage.setItem("second", "30");
localStorage.setItem("third", 30);
localStorage.setItem("obj", JSON.stringify(testObj));
console.log(localStorage.getItem("first"));
console.log(localStorage.getItem("second"));
console.log(localStorage.getItem("obj"));
console.log(localStorage.getItem("third"));
console.log(JSON.parse(localStorage.getItem("obj")));
