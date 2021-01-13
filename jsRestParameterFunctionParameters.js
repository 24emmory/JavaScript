const sum = (...args) => {
 
    return args.reduce((a, b) => a + b, 0);
  }

  //or, alternatively:
  //const sum = (...args) => args.reduce((a, b) => a + b, 0);
