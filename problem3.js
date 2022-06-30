// Def Prime number: if p is prime, 1 | p and p | p
// Verify the number is prime number.
// 1. Create a function named isPrime
// 2. isPrime function return as bool (true, false)
// นายปฏิวัฒน์ กฤษฏิ์สุภารัตน 65122250031

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // console.log(false);
            return false;
            break;
        }
        else {
            // console.log(true);
            return true;
        }
    }
    if (num === 2) {
        return true;
    }
}

// isPrime(2);
console.log(isPrime(2));