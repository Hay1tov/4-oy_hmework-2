// 1. function name() {}    declaration function
// 2. const name = function () {}   expression function
// 3. const name = () => {};   arrow function
// 4. (function() {})()    IIFE function


//                                  No_1

// (function(a, n) {
//   let result = a ** n;
//   console.log(`Natija ${result}`);

// })(3, 5)


//                                  No_2


// function mean(a, b) {
//   let result = (a + b) / 2;
//   let result2 = Math.sqrt(a * b);
//   console.log(`O'rta arimtetigi ${result}`);
//   console.log(`O'rta geometrigi ${result2}`);
// }

// mean(12, 48)


//                                  No_3


// function sign(n) {
//   if (n > 0) {
//     console.log(`Natija 1`);
//   } else if (n < 0) {
//     console.log(`Natija -1`);
//   } else {
//     console.log(`Natija 0`);
//   }
// }

// sign(-1);


//                                  No_4


// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     console.log(`Natija 2`);
//   } else if (D == 0) {
//     console.log(`Natija 1`);
//   } else {
//     console.log(`Natija 0`);
//   }
// }

// numberOfRoots(-1, -6, 9);


//                                  No_5


// function areaCircle(R) {
//   let S = Math.PI * R ** 2;

//   console.log(`Natija ${S.toFixed(2)}`);
// }

// areaCircle(20)


//                                  No_6


// function sumRange(A, B) {
//   let result = 0;
//   if (A <= B) {
//     for (let i = A; i <= B; i++) {
//       result += i;
//     }
//     console.log(`Natija ${result}`);
//   } else {
//     return 0;
//   }
// }


// sumRange(8, 1);


//                                  No_7


// function calc(A, B, S) {
//   let result = 0;
//   switch (S) {
//     case '+':
//       result = A + B;
//       console.log(`Natija ${result}`);
//       break;
//     case '-':
//       result = A - B;
//       console.log(`Natija ${result}`);
//       break;
//     case '/':
//       result = A / B;
//       console.log(`Natija ${result}`);
//       break;
//     case '*':
//       result = A * B;
//       console.log(`Natija ${result}`);
//       break;
//     default:
//       console.log(`Natija 0`)
//   }
// }

// calc(4,8,'/');


//                                  No_8


// function isEven(K) {
//   if (K % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false)
//   }
// }

// isEven(10);


//                                  No_9


// function sortABC(a, b, c) {
//   let min = null;
//   let mid = null;
//   let max = null;

//   if (a <= b && a <= c) {
//     min = a;
//     if (b <= c) {
//       mid = b;
//       max = c;
//     } else {
//       mid = c;
//       max = b;
//     }
//   } else if (b <= a && b <= c) {
//     min = b;
//     if (a <= c) {
//       mid = a;
//       max = c;
//     } else {
//       mid = c;
//       max = a;
//     }
//   } else {
//     min = c;
//     if (a <= b) {
//       mid = a;
//       max = b;
//     } else {
//       mid = b;
//       max = a;
//     }
//   }

//   console.log(`Natija ${min} ${mid} ${max}`);
// }

// sortABC(10, 5, 8);


//                                  No_10


// function isPowerN(K, N) {
//   if (K <= 0 || N <= 1) {
//     return 0;
//   }

//   while (K % N === 0) {
//     K = K / N;
//   }

//   return K === 1;
// }

// console.log(isPowerN(1, 5));


//                                  No_11


// function isPrime(N) {
//   let loop = 0;
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       loop++;
//     }
//   }
//   if (loop == 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPrime(4) // N > 0 shart bo'yicha son kiriting


//                                  No_12


// let tub = 0;

// function isPrime(N) {
//   let loop = 0;
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       loop++;
//     }
//   }
//   if (loop == 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function numberOfPrime(number) {
//   let count = 0;
//   for (let j = 1; j <= number; j++) {
//     if (isPrime(j)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(numberOfPrime(10));


//                                  No_13


// function digitCount(K) {
//   return K.toString().length;
// }

// function digitNth(K, N) {
//   let count = digitCount(K);

//   if (N > count) {
//     return -1;
//   }

//   return parseInt(K.toString()[N - 1]);
// }

// console.log(digitNth(105782, 5));


//                                  No_14


// function inverseNumber(N) {
//   let inverse = '';

//   while (N != 0) {
//     birlik = N % 10;
//     inverse += birlik;
//     N = Math.floor(N / 10);
//   }
//   console.log(`Natija ${inverse}`);

// }

// inverseNumber(56814)


//                                  No_15


// function inverseNumber(N) {
//   let inverse = '';

//   while (N != 0) {
//     birlik = N % 10;
//     inverse += birlik;
//     N = Math.floor(N / 10);
//   }

//   return Number(inverse);
// }

// function isPalindrom(N) {

//   return N == inverseNumber(N)
// }

// console.log(isPalindrom(1678761));


//                                  No_16


// function factorial(N) {
//   let result = 1;
//   if (N >= 0) {
//     for (let i = 1; i <= N; i++) {
//       result *= i;
//     }
//     return result;
//   } else {
//     return 1;
//   }

// }

// console.log(factorial(5));


//                                  No_17


// function getSum3(N) {
//   let total = 0;
//   if (N >= 0) {
//     for (let i = 1; i <= N; i++) {
//       if (i % 3 == 0) {
//         total += i;
//       }
//     }
//     console.log(`Natija ${total}`);

//   } else {
//     return 1;
//   }

// }

// getSum3(15);


//                                  No_18


// function sumOddEven(N) {
//   let toq = 0;
//   let juft = 0;
//   if (N > 0) {
//     for (let i = 1; i <= N; i++) {
//       if (i % 2 == 0) {
//         juft += i;
//       } else {
//         toq += i;
//       }
//     }
//     console.log(`juft sonlar yig'indisi ${juft}`);
//     console.log(`toq sonlar yig'indisi ${toq}`);

//   } else {
//     return 1;
//   }

// }

// sumOddEven(10);


//                                  No_19


// function invertTime(H, M, S) {
//   let T = 0;

//   T += H * 3600;
//   T += M * 60;
//   T += S;

//   return T;
// }

// console.log(invertTime(0, 6, 40));


//                                  No_20


// function decTime(H, M, S) {
//   S -= 1;

//   if (S < 0) {
//     S = 59;
//     M -= 1;

//     if (M < 0) {
//       M = 59;
//       H -= 1;

//       if (H < 0) {
//         H = 23;
//       }
//     }
//   }

//   let hh = String(H).padStart(2, '0');
//   let mm = String(M).padStart(2, '0');
//   let ss = String(S).padStart(2, '0');


//   return `${hh}:${mm}:${ss}`;
// }

// console.log(decTime(0, 6, 0));


//                                  No_21


// function isLeapYear(Y) {
//   if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2024));


//                                  No_22

// function isLeapYear(Y) {
//   if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function monthDays(M, Y) {
//   if (M < 1 || M > 12) {
//     return -1;
//   }

//   if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return 30;
//   }

//   if (M === 2) {
//     if (isLeapYear(Y)) {
//       return 29;
//     } else {
//       return 28;
//     }
//   }

//   return 31;
// }

// console.log(monthDays(3, 2021));


//                                  22 bilan 23 ishlay olmadim!


//                                  No_25


// function getDividersNumberAndSum(N) {
//   let count = 0;
//   let total = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       count++;
//       total += i;
//     }
//   }
//   return `Natija ${count}, ${total}`
// }

// console.log(getDividersNumberAndSum(12));