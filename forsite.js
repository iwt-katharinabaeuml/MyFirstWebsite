const calculation = "12*4/2*2*3";
const calculationArray = calculation
  .replaceAll("+", " + ")
  .replaceAll("*", " * ")
  .replaceAll("/", " / ")
  .replaceAll("-", " - ")
  .split(" ");

console.log(calculationArray);

while(calculationArray.includes("/") || calculationArray.includes("*")){
  for (let counter = 0; counter < calculationArray.length; counter++) {
    const element = calculationArray[counter];
    console.log(element);
    if (element === "*") {
      console.log(
        Number(calculationArray[counter - 1]) *
          Number(calculationArray[counter + 1])
      );
      const ergebnis =
        Number(calculationArray[counter - 1]) *
        Number(calculationArray[counter + 1]);
      calculationArray[counter - 1] = ergebnis;
      calculationArray[counter + 1] = "x";
      calculationArray[counter] = "y";
      calculationArray.splice(calculationArray.indexOf("x"), 1);
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      console.log(calculationArray);
    }
    if (element === "/") {
      console.log(
        Number(calculationArray[counter - 1]) /
          Number(calculationArray[counter + 1])
      );
      const ergebnis =
        Number(calculationArray[counter - 1]) /
        Number(calculationArray[counter + 1]);
      calculationArray[counter - 1] = ergebnis;
      calculationArray[counter + 1] = "x";
      calculationArray[counter] = "y";
      calculationArray.splice(calculationArray.indexOf("x"), 1);
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      console.log(calculationArray);
    }
  }
}

while(calculationArray.includes("+") || calculationArray.includes("-")){
  for (let counter = 0; counter < calculationArray.length; counter++) {
    const element = calculationArray[counter];
    console.log(element);
    if (element === "+") {
      console.log(
        Number(calculationArray[counter - 1]) +
          Number(calculationArray[counter + 1])
      );
      const ergebnis =
        Number(calculationArray[counter - 1]) +
        Number(calculationArray[counter + 1]);
      calculationArray[counter - 1] = ergebnis;
      calculationArray[counter + 1] = "x";
      calculationArray[counter] = "y";
      calculationArray.splice(calculationArray.indexOf("x"), 1);
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      console.log(calculationArray);
    }
    if (element === "-") {
      console.log(
        Number(calculationArray[counter - 1]) -
          Number(calculationArray[counter + 1])
      );
      const ergebnis =
        Number(calculationArray[counter - 1]) -
        Number(calculationArray[counter + 1]);
      calculationArray[counter - 1] = ergebnis;
      calculationArray[counter + 1] = "x";
      calculationArray[counter] = "y";
      calculationArray.splice(calculationArray.indexOf("x"), 1);
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      console.log(calculationArray);
    }
  }
}
