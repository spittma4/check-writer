/*
  Purpose: Convert a number input to text
  Primary Function: numtoText(inputString)
  Example: 
    INPUT: 123.69
    OUTPUT: one hundred twenty three dollars and sixty nine cents
  Developer: Sam Pittman
*/

//get the last two digits of a year. Ex: if it is 2017, testYear = 17	
var upper = "UPPER";
var lower = "LOWER";
function numToText(inputString, outputCase){

  var inputNum = inputString;
  var output = ""

  var inputLength = inputString.length;

  inputNum = stripCommas(inputNum, inputLength);

  inputLength = inputNum.length;
  
  var dollarLength = inputLength - 3;

  var leftSideDollars = "";
  for(i = 0; i < dollarLength; ++i){
    leftSideDollars = leftSideDollars + inputNum[i];
  }

  var cents = inputNum[inputLength - 2 ] + inputNum[inputLength - 1];
  var centsOutput = " and "  + twoDigitNumberOutput(cents) + " cents";



  switch(dollarLength){
    case 1:
      output = singleDigitOutput(leftSideDollars) + " dollars" + centsOutput;
      break; 
    case 2:
      output = twoDigitNumberOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 3:
      output = threeDigitNumberOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 4:
      output = fourDigitNumberOutput(leftSideDollars) + " dollars" + centsOutput
      break;
    case 5:
      output = fiveDigitNumberOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 6:
      output = sixDigitNumberOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 7:
      output = millionOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 8:
      output = tenMillionOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 9:
      output = hundredMillionOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    case 10:
      output = billionOutput(leftSideDollars) + " dollars" + centsOutput;
      break;
    default:
      output = "Cannot parse number";
      break;
  };

  switch(outputCase.toUpperCase()){
    case "UPPER":
      output = output.toUpperCase();
      break;
    case "LOWER":
      output = output.toLowerCase();
      break;
    default:
      output.toLowerCase();
      break;

  }

  return output;	
}

function stripCommas(inputNum, inputLength){
  var strippedNumber = "";

  for(i = 0; i < inputLength; ++i){
    if(inputNum[i] != ","){
      strippedNumber = strippedNumber + inputNum[i];
    }
  }

  return strippedNumber;
}

function billionOutput(tenDigitNum){
  var billionsPlace = tenDigitNum[0];
  var remainder = "";
  for (i = 1; i < 10; ++i){
    remainder = remainder + tenDigitNum[i]
  }

  return singleDigitOutput(billionsPlace) + " billion " + hundredMillionOutput(remainder);
}

function hundredMillionOutput(nineDigitNum){
  var hundredMillionsPlace = nineDigitNum[0] + nineDigitNum[1] + nineDigitNum[2];
  var remainder = "";
  for (i = 3; i < 9; ++i){
    remainder = remainder + nineDigitNum[i]
  }

  return threeDigitNumberOutput(hundredMillionsPlace) + " million " + sixDigitNumberOutput(remainder);
}

function tenMillionOutput(eightDigitNum){
  var tenMillionsPlace = eightDigitNum[0] + eightDigitNum[1];
  var remainder = "";
  for (i = 2; i < 8; ++i){
    remainder = remainder + eightDigitNum[i]
  }

  return twoDigitNumberOutput(tenMillionsPlace) + " million " + sixDigitNumberOutput(remainder); 
}



function millionOutput(sevenDigitNum){
  var millionsPlace = sevenDigitNum[0];
  var remainder = "";
  for (i = 1; i < 7; ++i){
    remainder = remainder + sevenDigitNum[i]
  }

  switch(millionsPlace){
    case "0":
      return sixDigitNumberOutput(remainder)
    case "1":
      return "one million " + sixDigitNumberOutput(remainder);
    case "2":
      return "two million " + sixDigitNumberOutput(remainder);
    case "3":
      return "three million " + sixDigitNumberOutput(remainder);
    case "4":
      return "four million " + sixDigitNumberOutput(remainder);
    case "5":
      return "five million " + sixDigitNumberOutput(remainder);
    case "6":
      return "six million " + sixDigitNumberOutput(remainder);
    case "7":
      return "seven million " + sixDigitNumberOutput(remainder);
    case "8":
      return "eight million " + sixDigitNumberOutput(remainder);
    case "9":
      return "nine million " + sixDigitNumberOutput(remainder);
  }


}

function sixDigitNumberOutput(sixDigitNum){
  //holds a 3 digit number, ex: 16,123: tenThousands = 16
  var hundredThousands = sixDigitNum[0] + sixDigitNum[1] + sixDigitNum[2];
  var hundredsTeensOnes = sixDigitNum[3] + sixDigitNum[4] + sixDigitNum[5];

  return threeDigitNumberOutput(hundredThousands) + " thousand " + threeDigitNumberOutput(hundredsTeensOnes);
}

function fiveDigitNumberOutput(fiveDigitNum){
  //holds a 2 digit number, ex: 16,123: tenThousands = 16
  var tenThousands = fiveDigitNum[0] + fiveDigitNum[1];
  var hundredsTeensOnes = fiveDigitNum[2] + fiveDigitNum[3] + fiveDigitNum[4];

  return twoDigitNumberOutput(tenThousands) + " thousand " + threeDigitNumberOutput(hundredsTeensOnes);
}

function fourDigitNumberOutput(fourDigitNum){
  var thousandsPlace = fourDigitNum[0];
  var hundredsTeensOnes = fourDigitNum[1] + fourDigitNum[2] + fourDigitNum[3];

  switch(thousandsPlace){
    case "0":
      return threeDigitNumberOutput(hundredsTeensOnes)
    case "1":
      return "one thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "2":
      return "two thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "3":
      return "three thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "4":
      return "four thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "5":
      return "five thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "6":
      return "six thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "7":
      return "seven thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "8":
      return "eight thousand " + threeDigitNumberOutput(hundredsTeensOnes);
    case "9":
      return "nine thousand " + threeDigitNumberOutput(hundredsTeensOnes);
  }
}

function threeDigitNumberOutput(threeDigitNum){
  var hundredsPlace = threeDigitNum[0];
  var teensOnes = threeDigitNum[1] + threeDigitNum[2];

  switch(hundredsPlace){
    case "0":
      return twoDigitNumberOutput(teensOnes);
    case "1":
      return "one hundred " + twoDigitNumberOutput(teensOnes);
    case "2":
      return "two hundred " + twoDigitNumberOutput(teensOnes);
    case "3":
      return "three hundred " + twoDigitNumberOutput(teensOnes);
    case "4":
      return "four hundred " + twoDigitNumberOutput(teensOnes);
    case "5":
      return "five hundred " + twoDigitNumberOutput(teensOnes);
    case "6":
      return "six hundred " + twoDigitNumberOutput(teensOnes);
    case "7":
      return "seven hundred " + twoDigitNumberOutput(teensOnes);
    case "8":
      return "eight hundred " + twoDigitNumberOutput(teensOnes);
    case "9":
      return "nine hundred " + twoDigitNumberOutput(teensOnes);
  }
}

function twoDigitNumberOutput(twoDigitInputNum){
  var number = twoDigitInputNum;
  var convertedNumber = Number(number);

  //determine if the number is a teens number, if so, call the teens converter
  if (convertedNumber > 9 && convertedNumber < 20){
    return teensConverter(number);
  }
  else{
    var teensPlace = number[0];
    var onesPlace = number [1];

    switch(teensPlace){
      case "0":
        return singleDigitOutput(onesPlace);
      case "2":
        return "twenty " + singleDigitOutput(onesPlace);
      case "3":
        return "thirty " + singleDigitOutput(onesPlace);
      case "4":
        return "forty " + singleDigitOutput(onesPlace);
      case "5":
        return "fifty " + singleDigitOutput(onesPlace);
      case "6":
        return "sixty " + singleDigitOutput(onesPlace);
      case "7":
        return "seventy " + singleDigitOutput(onesPlace);
      case "8":
        return "eighty " + singleDigitOutput(onesPlace);
      case "9":
        return "ninety " + singleDigitOutput(onesPlace);
    }
  }
}

function singleDigitOutput(singleDigitNum){
  var number = singleDigitNum;

  switch(number){
    case "0":
      return "";
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
  }
}

function teensConverter(teensNum){
  var number = teensNum;

  switch(number){
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "13":
      return "thirteen";
    case "14":
      return "fourteen";
    case "15":
      return "fifteen";
    case "16":
      return "sixteen";
    case "17":
      return "seventeen";
    case "18":
      return "eighteen";
    case "19":
      return "nineteen";
  }
}

var amountNum = "13.69";

console.log("Function Return: ", numToText(amountNum, upper));

