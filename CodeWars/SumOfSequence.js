const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if(begin > end) return 0;
    let result = 0
    
    for( let i = begin ; i<=end ; i += step ) {
      result +=  i
      
    }
    
    return result
  };