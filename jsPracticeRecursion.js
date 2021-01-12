function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      rangeArray= rangeOfNumbers(endNum-1);
      rangeArray.unshift(rangeArray);
      return rangeArray;
    }
  };