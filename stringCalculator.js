function stringCalculator(string) {
  let result = 0;
  if (string == "") {
    return 0;
  }
  let number = string.split(/(?:[^a-zA-Z0-9 -])+/);
  if (number.length == 1 && number >= 0 && number <= 1000) {
    return parseInt(number);
  }
  let negatives = number.filter(function(value) {
    return value < 0;
  });

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 1000 || number[i] == "") continue;
    if (!isNaN(number[i])) {
      result += parseInt(number[i]);
    }
    if (number[i] < 0) {
      throw new Error("negatives not allowed " + negatives);
    }
  }

  return result;
}
