import moment from 'moment';
import lodash from 'lodash';

let dateFormatRoot = document.querySelector('.date-format');
let dateValidityRoot = document.querySelector('.date-validity');
let dateManipulateRoot = document.querySelector('.date-manipulate');
let dateDifferenceRoot = document.querySelector('.date-difference');
let isDateAfterRoot = document.querySelector('.is-date-after');
let isLeapYearRoot = document.querySelector('.is-leap-year');

let dateFormats = ['MMMM Do YYYY', 'h:mm:ss a', 'ddd MMM Do YY'];
let dateValids = ['2020-01-01', '2020-14-01'];

// CreateUI

function createUI() {
  // Print date in different formats using MomentJS
  let timeNow = new Date();
  for(let i = 0; i < dateFormats.length; i++) {
    let li = document.createElement('li');
    li.innerText = moment(timeNow).format(dateFormats[i]);
    dateFormatRoot.append(li);
  }
  
  // Check validity of dates
  for(let i = 0; i < dateValids.length; i++) {
    let p = document.createElement('p');
    if(moment(dateValids[i]).isValid()) {
      p.innerText = `${dateValids[i]} 👉 Valid Format`;
    } else {
      p.innerText = `${dateValids[i]} 👉 Invalid Format`;
    }
    dateValidityRoot.append(p)
  }
  
  // Manipulating Dates
  let liItems = ['addSevenDays', 'addSevenMonths', 'addSevenYears', 'subtractSevenDays', 'subtractSevenMonths', 'subtractSevenYears'];
   liItems[0] = 'Adding 7 days to current time 👉 '+ moment(timeNow).add(7, 'd').format('MMMM Do YYYY, h:mm:ss a');
   liItems[1] = 'Adding 7 months to current time 👉 '+ moment(timeNow).add(7, 'M').format('MMMM Do YYYY, h:mm:ss a');
   liItems[2] = 'Adding 7 years to current time 👉 '+ moment(timeNow).add(7, 'y').format('MMMM Do YYYY, h:mm:ss a');
   liItems[3] = 'Subtracting 7 days from current time 👉 '+ moment(timeNow).subtract(7, 'd').format('MMMM Do YYYY, h:mm:ss a');
   liItems[4] = 'Subtracting 7 months from current time 👉 '+ moment(timeNow).subtract(7, 'M').format('MMMM Do YYYY, h:mm:ss a');
   liItems[5] = 'Subtracting 7 years from current time 👉 '+ moment(timeNow).subtract(7, 'y').format('MMMM Do YYYY, h:mm:ss a');

  let span = document.createElement('span');
  span.innerText = 'Time right now is 👉 ' + moment().format('MMMM Do YYYY, h:mm:ss a');
  dateManipulateRoot.append(span);
  for(let i = 0; i < liItems.length; i++) {
    let li = document.createElement('li');
    li.innerText = liItems[i];
    dateManipulateRoot.append(li);
  }
  
  // Difference between dates
  let dateOne = moment('2015-09-11');
  let dateTwo = moment('2014-11-11');
  let dateOneItemDiff = document.createElement('li');
  dateOneItemDiff.innerText = 'Date 1 is ' + dateOne.format('MMMM Do YYYY');
  let dateTwoItemDiff = document.createElement('li');
  dateTwoItemDiff.innerText = 'Date 2 is ' + dateTwo.format('MMMM Do YYYY');
  let dateDifference = dateOne.diff(dateTwo, 'days');
  let dateDifferenceItem = document.createElement('li');
  dateDifferenceItem.innerText = 'The difference between the above dates is ' + dateDifference + ' days';
  dateDifferenceRoot.append(dateOneItemDiff, dateTwoItemDiff, dateDifferenceItem);
  
  // Is Date After or Before
  
  function isDateAfter() {
    let dateOne = moment('2020-01-01');
    let dateTwo = moment('2018-01-01');
    let dateThree = moment('2010-01-01');
    let checkDateOne = dateOne.isAfter(dateTwo, 'year');
    let checkDateTwo = dateThree.isAfter(dateOne, 'year');
    let dateOneItem = document.createElement('li');
    dateOneItem.innerText = 'Does ' + dateOne.format('MMMM Do YYYY') + ' come after ' + dateTwo.format('MMMM Do YYYY') + '? 👉 ' + checkDateOne;
    let dateTwoItem = document.createElement('li');
    dateTwoItem.innerText = 'Does ' + dateThree.format('MMMM Do YYYY') + ' come after ' + dateOne.format('MMMM Do YYYY') + '? 👉 ' + checkDateTwo;
    isDateAfterRoot.append(dateOneItem, dateTwoItem);
  }
  isDateAfter();

  // Is Leap Year
  function isLeapYear() {
    let dateOne = moment('2019');
    let dateTwo = moment('2020');
    let checkDateOne = dateOne.isLeapYear();
    let checkDateTwo = dateTwo.isLeapYear();
    let dateOneItem = document.createElement('li');
    dateOneItem.innerText = 'Is ' + dateOne.format('YYYY') + ' a leap year? 👉 ' + checkDateOne;
    dateTwoItem.innerText = 'Is ' + dateTwo.format('YYYY') + ' a leap year? 👉 ' + checkDateTwo;
    isLeapYearRoot.append(dateOneItem, dateTwoItem);
  }
  isLeapYear();
}

createUI();