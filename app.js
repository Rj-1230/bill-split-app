/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billTotalInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let numberOfPeople = document.getElementById('numberOfPeople');
let perPersonTotal = document.getElementById('perPersonTotal');


// Get number of people from number of people div
let noPeople = numberOfPeople.innerText;

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let totalBill = Number(billTotalInput.value);
  
    // get the tip from user & convert it into a percentage (divide by 100)
    let tip = Number(tipInput.value);
    tip/=100;
  
    // get the total tip amount
    tip = tip*totalBill;
  
    // calculate the total (tip amount + bill)
    totalBill+=tip;
  
    // calculate the per person total (total divided by number of people)
   let splittedBill = totalBill/noPeople;
   splittedBill=splittedBill.toFixed(2);
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText=splittedBill;
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    noPeople++;
  
    // update the DOM with the new number of people
    numberOfPeople.innerText=noPeople;
  
    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(noPeople==1)
    return;
    
    // decrement the amount of people
    noPeople--;
  
    // update the DOM with the new number of people
    numberOfPeople.innerText=noPeople;
  
  
    // calculate the bill based on the new number of people
    calculateBill();
  }