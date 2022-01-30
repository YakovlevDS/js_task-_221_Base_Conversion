// solution 1
// function isPrime(num) {
//       for(let i =2, s=Math.sqrt(num);i<=s; i++){
//         if(num%i===0) return false;
//       }
//       return num>1;
//      }
  

// solution 3
// const isPrime = num => {
//       for (let i = 2; i <= num ** .5; i++) {
//         if (!(num % i)) return false;
//       }
//       return num > 1;
//     }
// solution 4

// function isPrime(num) {
//       if (num < 2) {
//          return false;
//       }
//     if (num === 2) {
//          return true;
//       }
      
//      const maxDiv = num**0.5 + 1;
      
//     for (let i = 2; i < maxDiv; i++) {
//          if (num % i === 0) {
//            return false;
//          }
//       }
//     return true;
//     }

console.log(isPrime(0));
