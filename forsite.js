const calculation = "L9";

let newstring = calculation.split(
  /(?<=[0-9])(\+|\-|\*|\/)(?=[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\-[0-9])/
);

newstring = newstring.filter((a) => a);

console.log(newstring);

const calculationArray = newstring;

console.log(calculationArray);

if (calculationArray.includes("L")){
  console.log("works")
}

while (calculationArray.includes("/") || calculationArray.includes("*")) {
  let counter;
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
      counter = 0;
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
      counter = 0;
      console.log(calculationArray);
    }
    if (element === "√") {
      console.log(Math.sqrt(Number(calculationArray[counter + 1])
      ))
      const ergebnis =
      Math.sqrt(Number(calculationArray[counter + 1]))
      console.log(ergebnis)
      calculationArray[counter + 1] = ergebnis
      calculationArray[counter] = y;
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      counter = 0;
      console.log(calculationArray);
  }
}
}
while (calculationArray.includes("+") || calculationArray.includes("-")) {
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
      counter = 0;
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
      counter = 0;
      console.log(calculationArray);
    }
  }
}