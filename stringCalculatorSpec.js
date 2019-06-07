describe("String calculator", function(){
    it("should return zero for an empty string", function(){
        let result = Add("");
        expect(result).toEqual(0)
    })
    it("should return that number if passed in a single number", function(){
        let result  = Add("1");
        expect(result).toEqual(1);
        result = Add("5")
        expect(result).toEqual(5)
    })
    it("should return the sum of two numbers", function(){
        let result = Add("1,2")
        expect(result).toEqual(3);
        result = Add("5,10");
        expect(result).toEqual(15);
    })
    it("should be able to add unknown amount of numbers", function(){
        let result = Add("1,2,3")
        expect(result).toEqual(6)
        result = Add("5,6,7,8,8,9,4,5,6,7,8,9,9,0,9,3,4,5,64,45,65,8")
        expect(result).toEqual(294);
    })
    it("should be able to handle new lines instead of commas", function(){
        let result = Add("1\n2,3")
        expect(result).toEqual(6)
    })
    it("should be able to support different delimeters", function(){
        let result = Add("//;\n1;2")
        expect(result).toEqual(3);
    })
    it("should add function with a negative should throw an error 'negative not allowed' and the negative that was passed", function(){
        let result = Add("-5");
        expect(result).toEqual("negatives not allowed " + [-5])
        result = Add("-5,-3,-8,-3,-13,12")
        expect(result).toEqual("negatives not allowed " + [-5,-3,-8,-3,-13]);
        result = Add("9,-5,8,-8,9,-10");
        expect(result).toEqual("negatives not allowed " + [-5,-8,-10])
    })
    it("number bigger than 1000 should be ignored", function(){
        let result = Add("10001")
        expect(result).toEqual(0)
        result = Add("1001,9,1,9,2")
        expect(result).toEqual(21)
        result = Add("-10,2000,9,1")
        expect(result).toEqual("negatives not allowed " +[-10])

    })
})