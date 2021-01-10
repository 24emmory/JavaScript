function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const numset= countdown(n-1);
      
  
      numset.unshift(n);
  
      return numset;
    }
  
  }
  
  