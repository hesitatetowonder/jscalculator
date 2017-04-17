var temp = [];
var tot = [];
tot.push('3');
tot.push('+');
tot.push('1');
tot.push('*');
tot.push('2');
for(i=0; i<tot.length; i++) {
  if (isNaN(tot[i]))
  switch (tot[i]) {
    case "*" :
      temp.push(parseInt(tot[i-1]*tot[i+1]));
      tot.splice((i-1),3,temp);
      continue;

    case '/' :
      temp.push(parseInt(tot[i-1]/tot[i+1]));
      continue;

    case '+' :
      temp.push(parseInt(tot[i-1])+parseInt(tot[i+1]));
      tot.splice((i-1),3,temp);
      continue;

    case '-' :
      temp.push(parseInt(tot[i-1])-parseInt(tot[i+1]));
      continue;

    default :
      console.log("should not be here on operands");
      continue;
  }
}
  console.log("tot = " + tot);
  console.log("temp = " + temp);
