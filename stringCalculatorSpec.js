describe("String calculator", function() {
  it("should return zero for an empty string", function() {
    let result = stringCalculator("");
    expect(result).toEqual(0);
  });
  it("should return that number if passed in a single number", function() {
    let result = stringCalculator("1");
    expect(result).toEqual(1);
    result = stringCalculator("5");
    expect(result).toEqual(5);
  });
  it("should return the sum of two numbers", function() {
    let result = stringCalculator("1,2");
    expect(result).toEqual(3);
    result = stringCalculator("5,10");
    expect(result).toEqual(15);
  });
  it("should be able to add unknown amount of numbers", function() {
    let result = stringCalculator("1,2,3");
    expect(result).toEqual(6);
    result = stringCalculator("5,6,7,8,8,9,4,5,6,7,8,9,9,0,9,3,4,5,64,45,65,8");
    expect(result).toEqual(294);
  });
  it("should be able to handle new lines instead of commas", function() {
    let result = stringCalculator("1\n2,3");
    expect(result).toEqual(6);
  });
  it("should be able to support different delimeters", function() {
    let result = stringCalculator("//;\n1;2");
    expect(result).toEqual(3);
  });
  it("should add function with a negative should throw an error 'negative not allowed' and the negative that was passed", function() {
    let result = stringCalculator("-5");
    expect(result).toEqual("negatives not allowed " + [-5]);
    result = stringCalculator("-5,-3,-8,-3,-13,12");
    expect(result).toEqual("negatives not allowed " + [-5, -3, -8, -3, -13]);
    result = stringCalculator("9,-5,8,-8,9,-10");
    expect(result).toEqual("negatives not allowed " + [-5, -8, -10]);
  });
  it("number bigger than 1000 should be ignored", function() {
    let result = stringCalculator("10001");
    expect(result).toEqual(0);
    result = stringCalculator("1001,9,1,9,2");
    expect(result).toEqual(21);
    result = stringCalculator("-10,2000,9,1");
    expect(result).toEqual("negatives not allowed " + [-10]);
  });
  it("be able to handle multiple delimiters of any length", function() {
    let result = stringCalculator("//[***]\n1***2***3");
    expect(result).toEqual(6);
  });
  it("be able to handle multiple delimiters", function() {
    let result = stringCalculator("//[*][%]\n1*2%3");
    expect(result).toEqual(6);
  });
  it("should handle multtiple delimeter with length of more than one char", function() {
    let result = stringCalculator(
      "@#$#@$%@@&@^%@$#^^#&@%@&@&@^%@^@&@&@^@$#^&*~~^%~%~~9%%%%6"
    );
    expect(result).toEqual(15);
  });
});
