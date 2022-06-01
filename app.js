

// function filterArray(numbers, value) {

//   let result = []
//    for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       result.push(numbers[i])
//     }
    
//   }
//   return result
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))




// function getCommonElements(array1, array2) {
//   let result = []

//   for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(array1[i]) == true) {
//           result.push(array1[i])
// }
// }

// return result
// }
// console.log(getCommonElements([7, 2, 3], [2, 4, 9, 7]))




// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i of order) {
//   total += i
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))


// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let arr = []
//  for (let i = start; i < end + 1; ++i) {
//    if (i % 2 === 0){
//      arr.push(i) 
//    }
//  }
//  return arr


//    // Change code above this line
//  }


//  console.log(getEvenNumbers([1, 2, 3, 4, 5], 3))



//   const win1 = rps('scissors','paper') // Player 1 won!
//   const win2 = rps('scissors','rock') // Player 2 won!
//   const win3 = rps('paper','paper') // Draw!
    // if (p1 === 'scissors' & p2 === 'paper') {
    //     return 'Player 1 won!'
    // }
    // if (p1 === 'paper' & p2 === 'scissors') {
    //     return 'Player 2 won!'
    // }
    // if (p1 === 'scissors' & p2 === 'scissors'){
    //     return 'Draw!'
    // }
    // if (p1 === 'rock' & p2 === 'rock'){
    //     return 'Draw!'
    // }
    // if (p1 === 'paper' & p2 === 'paper'){
    //     return 'Draw!'
    // }
    // if (p1 === 'scissors' & p2 === 'rock'){
    //     return 'Player 2 won!'
    // }
    // if (p1 === 'rock' & p2 === 'scissors'){
    //     return 'Player 1 won!'
    // }
    // if (p1 === 'rock' & p2 === 'paper'){
    //     return 'Player 2 won!'
    // }
    // if (p1 === 'paper' & p2 === 'rock'){
    //     return 'Player 1 won!'
    // }
// };

// function fakeBin(x){

//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
    
// }
// console.log(fakeBin('45385593107843568'))


//     function removeSmallest(numbers){
//         //сделать копию исходного массива без мутации
//            const copy = numbers.slice(0)
//         //найти наименьшее значение в массиве
//          let smallestValue = numbers.indexOf(Math.min(...numbers))
//         //Удалить наименьший элемент в массиве 
//          copy.splice(smallestValue, 1);
//         //Return the array without the smallest element
//         return copy
//         }

//         function removeSmallest(numbers) {
//             let copy = numbers.slice(0)
//           let min = Math.min(...numbers) 
//             let arr = numbers.filter(i => i === min)
//               return arr.slice(copy, 1)
//           //  
//               throw "TODO: removeSmallest";
//           }
// console.log(removeSmallest([2, 2, 1, 2, 1]))


// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }

// console.log(printerError('aaabbbbhaijjjm'))




// if (year % 100 > 0) {
//     if (year % 100 >= 50) {
//     return Math.round(year / 100);
//     } else {
//         return Math.round((year / 100) + 1);
//     }
//   } else {
//     return Math.round((year / 100) + 1);
//   }


// let string = 'sdfsdf dsfsdf f fdffffffdf fdf fdf'
//    let arr = string.split(' ')
//    let maxLength = 0
//    for (let i = 0; i < arr.length; i++) {
//     maxLength = arr[1].length
//      if (arr[i].length > maxLength) {
//        maxLength = arr[i]
//      }
     

//    }
  
   
 
//    const findLongestWord = function(str) {
//     let arrStr = str.split(' ');
//     let wordLength = 0;
  
  
//     for (let i = 0; i < arrStr.length; i += 1) {
//       wordLength = arrStr[1].length;
  
//       if (arrStr[i].length > wordLength) {
//         longestWord = arrStr[i];
  
//         return longestWord;
//       }
  
//     }
//   };


// var countSheep = function (num){
//     let result = ''
//     for (let i = 1; i < num + 1; i++) {
       
//     result += i + ' sheep...' 
 
//     } //your code here
//     return result
//    }
   
//    console.log(countSheep(5))

//    for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// const stringToNumber = function(str){
//     // put your code here
//     return parseInt(str)


  
//   }

// var number = function(busStops){
//     return busStops.map(x => x[0] - x[1]).reduce((a, b) => a + b);
 
//   }
// function getMiddle(s)
// {
//     let word = (s.length - 1) / 2
//   if (s.length % 2 === 0) {
//       return s.slice(word, word + 2)
//   }
//   return s.slice(word, word + 1)ф
//     //Code goes here!
// }

// function sumArray(array) {
//     if (array == null) {
//         return 0
//     }
//     if(array.length < 2) {
//         return 0
//     } 

//     array = array.sort((a, b) => a - b)
//     let total = 0
//     for (let i = 1; i <array.length - 1; i++){
//         total +=array[i]
//     }
//     return total
// }


// console.log(sumArray([]))

// const base = addTodo(autor, post){
//     const todo = {
//         id: 'td' + (base.todo.length +1),
//         autor: autor,
//         post: post,
//         ready: false,
//     };
// };

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const total = document.getElementById('total')
let e = 0
btn.addEventListener('click', (i) => {

    // result.innerHTML += `<li>${input.value}</li>`
    if (input.value === '') {return}
    createDelelement(input.value)
    input.value = ''
    
})

function createDelelement (value) { 

    e++
    const li = document.createElement('li')
  
    li.className = 'li'
    li.textContent = value
  
    result.appendChild(li)

    

    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.textContent = ''
    li.appendChild(btn)
    
    btn.addEventListener('click', (i) => {
        result.removeChild(li)
        e--
        total.textContent = e
    })
    total.textContent = e
}
