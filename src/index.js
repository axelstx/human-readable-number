module.exports = function toReadable (number) {
  let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let second = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let third = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numToStr = number.toString();
  let result = '';

  if (numToStr.length == 1) {
    result = first[numToStr[0]];
  } else if (numToStr.length == 2 && numToStr[1] == 0) {
    result = third[numToStr[0]];
  } else if (numToStr.length == 2 && number >= 11 && number <= 19) {
    result = second[numToStr[1]];
  } else if (numToStr.length == 2) {
    result = third[numToStr[0]] + ' ' + first[numToStr[1]];
  } else if (numToStr.length == 3 && numToStr[1] == 0 && numToStr[2] == 0) {
    result = first[numToStr[0]] + ' hundred';
  } else if (numToStr.length == 3 && numToStr[2] == 0) {
    result = first[numToStr[0]] + ' hundred ' + third[numToStr[1]];
  } else if (numToStr.length == 3 && numToStr[1] == 0) {
    result = first[numToStr[0]] + ' hundred ' + first[numToStr[2]];
  } else if (numToStr.length == 3 && numToStr.substring(1) >= 11 && numToStr.substring(1) <= 19) {
    result = first[numToStr[0]] + ' hundred ' + second[numToStr[2]];
  } else if (numToStr.length == 3) {
    result = first[numToStr[0]] + ' hundred ' + third[numToStr[1]] + ' ' + first[numToStr[2]];
  } 
   
  return result;
}
