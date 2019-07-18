exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  let arrOfPrimes = [];

  let isPrime = function(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i < n; i++) {
    if (n % i === 0 && isPrime(i)) {
      arrOfPrimes.push(i);
    }
  }

  primeNumber = arrOfPrimes[arrOfPrimes.length - 1];

  return primeNumber;
};
