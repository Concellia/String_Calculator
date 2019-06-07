function Add(string){
    let result = 0;
    if(string == ""){
        return 0
    }
    let number = string.split(/,|\n/)
    if(number.length == 1 && number >= 0 && number <= 1000){
        return parseInt(number)
    }
    let Array = [];
    let negatives = number.filter(function(value){
        return value < 0;
    });

    for(let i = 0; i<number.length; i++){
        if(number[i] > 1000)
        continue;
        if(!isNaN(number[i])){
        result += parseInt(number[i]);
        }
        if(number[i] < 0){
            Array.push(number[i]);
            return "negatives not allowed " + negatives;
        }
    }
    let regEx = /^(\/\/.*\n)/;
    let matchRegEx = regEx.exec(string);
    if(matchRegEx && matchRegEx.length > 0){
        let strng1;
        strng1 = string.replace(regEx, "");
        let strng2 = strng1.split(/;|\n/);
        for(let a = 0; a<strng2.length; a++){
            result += parseInt(strng2[a])
        }
        return result;
    }
    
    return result;
}
