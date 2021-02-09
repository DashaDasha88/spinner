const spinner2 = function() {

  let spinnerBits = ['|','/','-','\\','|'];

  for (let i = 0; i < spinnerBits.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinnerBits[i]}`);
      if (i === spinnerBits.length - 1) {
        process.stdout.write('\n');
      }
    }, 170 * i);
  }
};

spinner2();