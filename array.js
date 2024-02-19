// function number(numbers) {
//     const even = [];
//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             even.push(num);
//         }
//     }
//     return even;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const evenNumbers = number(numbers);
// console.log(evenNumbers);



// function number(numbers) {
//     const odd = [];
//     for (const num of numbers) {
//         if (num % 2 === 1){
//             odd.push(num)
//         }
//     }
//     return odd;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const odd = number(numbers);
// console.log(odd);



// function number(numbers) {
//     const even = [];
//     let sum = 0;
//     for (const num of numbers) {
//         if (num % 2 === 0){
//            sum = sum + num;
//             even.push(num);
//         }
//     }
//     console.log(even);
//     return sum;  
// }
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumber= number(numbers);
// console.log("even numbers are",evenNumber);




// function number(numbers) {
//     const odd = [];
//     let sum = 0;
//     for (const num of numbers) {
//         if (num % 2 === 1) {
//             sum = sum + num;
//             odd.push(num);
//         }
//     }
//     console.log("odd numbers are", odd);
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = number(numbers);
// console.log("sum of odd numbers is",oddNumbers);



// function getMenu() {
//     console.log("Burger, Pizza, Pasta");
//    }
// getMenu();



// function number(num1,num2,num3,num4){
//     return num1*num2*num3*num4;
// }
// const multiply = number(2,3,4,5)
// console.log(multiply)

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function number(number){
// if (number % 2===1){
//     return number * 2;
// }
// return number / 2;
// }
// console.log(number(4))

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// function number(numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum = sum + num;
//     }
//    const avg = sum / numbers.length;
//     return avg;
// }
// const avg = number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(avg)


// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function countZero(binaryString) {
//     let count = 0;
//     for (let i = 0; i < binaryString.length; i++) {
//         if (binaryString[i] === "0") {
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// const count = countZero("101010101010101010101010")
// console.log(count);




// function countZero(binaryString) {
//     let count = 0;
//     for (let i = 0; i < binaryString.length; i++) {
//         if (binaryString[i] === '0') {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage:
// const binaryStr = "10101010101010101010";
// const zeroCount = countZero(binaryStr);
// console.log("Number of 0s in the binary string:", zeroCount);





function number(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === "0") {
            count++;
        }
    }
    return count;
}
const count = number("100001111111000100100100010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
console.log(count);