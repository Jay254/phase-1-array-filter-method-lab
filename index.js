// Code your solution here
function findMatching(drivers, str){
    let newArr = [];
  for(const x of drivers){
    if(x.toLowerCase()===str.toLowerCase()){
      newArr.push(x);
    }
  }
   return newArr;
}

function fuzzyMatch(drivers, str1){
    let arr = [];
    for(const y of drivers){
        if(y.substring(0, str1.length) === str1){
            arr.push(y);
        }
    }
    return arr;
}

function matchName(drivers, str3){
    let arr1 = [];
     for(const z of drivers){
        if(z.name === str3){
            arr1.push(z);
        }
     }
     return arr1;
}