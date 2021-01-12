function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      var rangeArray= rangeOfNumbers(startNum, endNum-1);
      rangeArray.push(endNum);
      return rangeArray;
    }
  };