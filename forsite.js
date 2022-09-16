const calculation = "(9+3)*(-2+2-7/2+√9)";

const paddedcalculation = calculation
  .replaceAll("(", " ( ")
  .replaceAll(")", " ) ");
console.log("padded Klammern", paddedcalculation);

const splittedcalculation = paddedcalculation.split(" ");

console.log("splitted", splittedcalculation);

while (splittedcalculation.includes("(") && splittedcalculation.includes(")")) {
  let index;
  for (index = 0; index < splittedcalculation.length; index++) {
    const element = splittedcalculation[index];
    console.log(element);
    if (element === "(") {
      console.log("teyt",Number(myFunction(splittedcalculation[index + 1])));
      const Klammerergebnis = Number(
        myFunction(splittedcalculation[index + 1])
      );
      splittedcalculation[index] = Klammerergebnis
      splittedcalculation.splice (index + 1, 2)
      index = 0;
      console.log(Klammerergebnis);
    }
  }
}

console.log(splittedcalculation)







// console.log(myFunction(calculation)); // ruft die funktion auf, sonst "passiert gar nichts"

function myFunction(calculation) {
  let newstring = calculation.split(
    /(?<=[0-9])(\+|\-|\*|\/)(?=[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\-[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\√[0-9])/
  );
  newstring = newstring.filter((a) => a);

  console.log(newstring);

  const calculationArray = newstring;

  console.log(calculationArray);

  while (
    calculationArray.includes("√") ||
    calculationArray.includes("*") ||
    calculationArray.includes("/")
  ) {
    let counter;
    for (counter = 0; counter < calculationArray.length; counter++) {
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
        calculationArray.splice(counter, 2);
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
        calculationArray.splice(counter, 2);

        counter = 0;
        console.log(calculationArray);
      }
      if (element[0] === "√") {
        console.log("test", element.replace("√", ""));
        const number = Number(element.replace("√", ""));
        console.log(calculationArray);
        calculationArray[counter] = Math.sqrt(number);
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
        calculationArray.splice(counter, 2);
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
        calculationArray.splice(counter, 2);
        counter = 0;
        console.log(calculationArray);
      }
    }
  }
  return calculationArray[0]; //notwendig, damit man damit weiter rechnen kann (z.Bsp für Klammern), es wird kein
  // Array, in diesem Fall auch nur mit einem Element ausgegeben; z.Bsp [25], sondern eine Zahl (oder in anderen Fällen ein String)
}
