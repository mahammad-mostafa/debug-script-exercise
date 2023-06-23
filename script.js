function getEvenNumbers(array) {
  let result = [];
  array.forEach(element => {
    result.push(element);
  });
  console.log(result);
}
function getSecondMax(array) {
  let max = 0;
  array.forEach(element => {
    if (element < max) {
      max = element;
    }
    console.log(max);
  });
}
const array = [3, 4, 7, 2, 8, 9];
getEvenNumbers(array);
getSecondMax(array);