module.exports = function count(s, pairs) {
  
  let n = 1;
  let set = new Set();
  
  for(let i = 0; i < pairs.length; i++) {
    n *= pairs[i][0] ** pairs[i][1];
  }
    
  if (n > 100000000) return 0;

  for(let k = 0; k < n; k++) {

    let flag = true;

		for(let j = 0; j < s.length; j++) {

      let firstCondition = (s[j] === '0' && nod(k+j, n) !== 1);
      let secondCondition = (s[j] === '1' && nod(k+j, n) === 1);

      if(!(firstCondition || secondCondition)) {
        flag = false;
        break;
      }

    }
    
    if(flag) {
      set.add(k);
    }

  }

  return set.size % 1000000007;
}

function nod(a, b) {
	if (b === 0) {
		return a;	
	}
	return nod(b, a % b);
}