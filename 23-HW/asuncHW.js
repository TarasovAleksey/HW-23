
// function printNumber(i) {
//     if (i < 10) {
//         setTimeout(function () {
//             console.log(i);
//             printNumber(i + 1);
//         }, 1000);
//     }
// }
//
// printNumber(0);
//

// let i = 0;
// const intervalId = setInterval(function() {
//     console.log(i);
//     i++;
//     if (i === 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);

//
// const printNumberWithPromise = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// };
//
// const printSequentialNumbers = async () => {
//     for (let i = 0; i < 10; i++) {
//         await printNumberWithPromise(i);
//     }
// };
//
// printSequentialNumbers();


function printNumbersWithClosure() {
    let i = 0;
    function printNumber() {
        setTimeout(function() {
            console.log(i);
            i++;
            if (i < 10) {
                printNumber();
            }
        }, 1000);
    }
    printNumber();
}

printNumbersWithClosure();