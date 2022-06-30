// Def Prime number: if p is prime, 1 | p and p | p
// Verify the number is prime number.
// 1. Create a function named isPrime
// 2. isPrime function return as bool (true, false)
// นายปฏิวัฒน์ กฤษฏิ์สุภารัตน 65122250031 CS

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
    if (num === 2) {
        return true;
    }
    else if (num === 1) {
        return false
    }
}

console.log(isPrime(1));
