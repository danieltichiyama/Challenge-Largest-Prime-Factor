exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  let arrOfFactors = [];
  let arrOfPrimes = [];

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      arrOfFactors.push(i);
    }
  }

  let isPrime = function(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < arrOfFactors.length; i++) {
    if (isPrime(arrOfFactors[i])) {
      arrOfPrimes.push(arrOfFactors[i]);
    }
  }

  primeNumber = arrOfPrimes[arrOfPrimes.length - 1];

  return primeNumber;
};
