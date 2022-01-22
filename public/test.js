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
import {logDOM} from "@testing-library/react";

try {
    let test = prompt("test");
    test = +test;
    console.log(typeof test);
    console.log(test);
    let test2 = +prompt("test");
    console.log(typeof test2);
    console.log(test2);
    let test3 = prompt("test");
    console.log(parseInt(test3));
    console.log(test3);
    throw Error;
} catch (Error) {
    alert(Error)
}

let arr = [1, 2, 3, 4];
alert(arr.age);
