const promise = new Promise((resolve, reject) => {
    const arrayNumbers = [];
    for (i = 0; i < 10; i += 1) {
      // arrayNumbers.push(Math.pow(parseInt((Math.random() * 51)),2));
      arrayNumbers.push(parseInt(Math.random() * 51));
    }

    const result = arrayNumbers.map((number) => Math.pow(number, 2))
    .reduce((acc, prevNum) => acc + prevNum, 0);
    
    if (result < 8000) {
      resolve(result);
    }
    else {
      reject(result);
    }
  });

  