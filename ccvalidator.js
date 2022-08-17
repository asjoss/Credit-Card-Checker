// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/*----------------------------1st Attempt-------------------------------*/

/* Have been able to iterate through array from right to left, doubling every other digit, subtracting 9 from any number bigger than 9 and returning a new arr of these new numbers.

Testing every array shows that the logic does not work as valid creadit card numbers are coming out as invalid*/

/*const validateCred = arr => {
  let tempArr = [];
  let tempArr2 =[];
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    tempArr.push(arr[i] * 2);
  } let newArr =tempArr.map(element => {
    if (element > 9) {
      return element - 9;
    }
    return element
  });
  console.log(newArr)
  for (let y = 0; y < arr.length; y += 2) {
    tempArr2.push(arr[y]);
  }
  //extracted every other number that was not doubled correctly
  console.log(tempArr2);
  let sumArr = newArr.concat(tempArr2);
  let val = sumArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  if (val % 10 === 0)  {
    return 'valid';
  } else {
    return 'invalid'
  }
}*/

/*----------------------------2nd Attempt--------------------------------*/

//incorrect outcomes aswell!!!

//false outcome for valid5!

/*const validateCred = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
    //console.log(arr)
  let lastDigit = arr.splice(0, 1)[0];
  //console.log(arr);
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};*/


/*---------------------3rd Attempt-------------------------------*/

//This time it worked!!!!!!!!!!


let ltdArr = ['Amex (American Express)', 'Visa', 'Mastercard', 'Discover'];

const findInvalidCards = cardNo => {
  let invalArr = [];
  
  for (let i = 0; i < cardNo.length; i++) {   
    if (validateCred(cardNo[i]) === false) 
    invalArr.push(cardNo[i]);

    } return invalArr;
}   
 
const idInvalidCardCompanies = dodgeArr => {
  //console.log(dodgeArr);
    let compArr = [];
    let dodgyArr = findInvalidCards(dodgeArr);
      for (let i = 0; i < dodgyArr.length; i++) {
        //console.log(dodgeArr[i].indexOf(3));
        if (dodgyArr[i].indexOf(3) === 0) {
        compArr.push(ltdArr[0]);
    } else if (dodgyArr[i].indexOf(4) === 0) {
        compArr.push(ltdArr[1]);
    } else if (dodgyArr[i].indexOf(5) === 0) {
        compArr.push(ltdArr[2]);
    } else if (dodgyArr[i].indexOf(6) === 0) {
        compArr.push(ltdArr[3]);
    } else {
        console.log('Company not found');
    } 
  } let noDupeArr = [];
  compArr.forEach((element) => {
    if (!noDupeArr.includes(element)) {
      noDupeArr.push(element);
    }
  }); return noDupeArr;
};


const validateCred = arr => {
  let lastEl = arr[arr.length - 1]
  //console.log(lastEl);
  let oneLess = Array.from(arr).slice(0, arr.length - 1)
              .reverse();
    //console.log(arr.lastIndexOf -1);
    for (let i = 0; i < oneLess.length; i++)
    oneLess[i] = i % 2 === 0 ? oneLess[i] * 2 : oneLess[i];
    let newArr = oneLess.map((numb, index) => {
    return (numb > 9) ? numb - 9 : numb;
  } ); 
  let newArrTotal = newArr.reduce((accummulator, value) => accummulator + value, 0)
  let total = newArrTotal + lastEl;
  //console.log(total);
  if (total % 10 === 0) {
    return true;
  } else {
    return false;
  };
} 


console.log(`Here is a list of valid & invalid credit card numbers:\n \nvalid1 - ${validateCred(valid1)} \nvalid2 - ${validateCred(valid2)} \nvalid3 - ${validateCred(valid3)}\nvalid4 - ${validateCred(valid4)}\nvalid5 - ${validateCred(valid5)}\ninvalid1 - ${validateCred(invalid1)}\ninvalid2 - ${validateCred(invalid2)}\ninvalid3 - ${validateCred(invalid3)}\ninvalid4 - ${validateCred(invalid4)}\ninvalid5 - ${validateCred(invalid5)}\nmystery1 - ${validateCred(mystery1)}\nmystery2 - ${validateCred(mystery2)}\nmystery3 - ${validateCred(mystery3)}\nmystery4 - ${validateCred(mystery4)}\nmystery5 - ${validateCred(mystery5)}`);
console.log('\n-----------------------------------\n');
console.log('Here is an array of all the invalid credit card numbers:\n \n', findInvalidCards(batch));
console.log('\n-----------------------------------\n');
console.log('Credit Card companies who have issued invalid credit cards:\n \n', idInvalidCardCompanies(batch));