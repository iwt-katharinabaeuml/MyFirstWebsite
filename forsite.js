// const calculation = "(40/10*2)/(2*2)+(√9*2)";


document.getElementById("button-1").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "1";
};
document.getElementById("button-2").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "2";
};
document.getElementById("button-3").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "3";
};
document.getElementById("button-4").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "4";
};
document.getElementById("button-5").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "5";
};
document.getElementById("button-6").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "6";
};
document.getElementById("button-7").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "7";
};
document.getElementById("button-8").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "8";
};
document.getElementById("button-9").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "9";
};
document.getElementById("button--").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "-";
};
document.getElementById("button-+").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "+";
};
document.getElementById("button-0").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "0";
};
document.getElementById("button-.").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + ".";
};
document.getElementById("button-/").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "/";
};
document.getElementById("button-*").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "*";
};
document.getElementById("button-(").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + "(";
    
};document.getElementById("button-)").onclick = function () {
  document.getElementById("result").innerText =
    document.getElementById("result").innerText + ")";
};

document.getElementById("C").onclick = function () {
  document.getElementById("result").innerText = " ";
};

document.getElementById("button-=").onclick = function () {
  rechnung = document.getElementById("result").innerText;
  ergebnis = ""
//

const calculation = rechnung
const paddedcalculation = calculation
  .replaceAll("(", " ( ")
  .replaceAll(")", " ) ");
console.log("padded Klammern", paddedcalculation);

let splittedcalculation = paddedcalculation.split(" ");

splittedcalculation = splittedcalculation.filter((a) => a);

console.log("splitted", splittedcalculation);

while (splittedcalculation.includes("(") && splittedcalculation.includes(")")) {
  let index;
  for (index = 0; index < splittedcalculation.length; index++) {
    const element = splittedcalculation[index];
    console.log(element);
    if (element === "(") {
      console.log("teyt", Number(myFunction(splittedcalculation[index + 1])));
      const Klammerergebnis = Number(
        myFunction(splittedcalculation[index + 1])
      );
      splittedcalculation[index] = Klammerergebnis;
      splittedcalculation.splice(index + 1, 2);
      index = 0;
      splittedcalculation = splittedcalculation.filter((a) => a);
      console.log(Klammerergebnis);
    }
  }
}

const stringsplittedcalculation = splittedcalculation.join("");
console.log(stringsplittedcalculation);

myFunction(stringsplittedcalculation);

// console.log(myFunction(calculation)); // ruft die funktion auf, sonst "passiert gar nichts"

function myFunction(calculation) {
  let newstring = calculation.split(
    /(?<=[0-9])(\+|\-|\*|\/)(?=[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\-[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\√[0-9])/
  );
  newstring = newstring.filter((a) => a);

  console.log(newstring);

  const calculationArray = newstring;

  console.log(calculationArray);

  while (calculationArray.includes("√")) {
    for (counter = 0; counter < calculationArray.length; counter++) {
      const element = calculationArray[counter];
      console.log(element);
      if (element[0] === "√") {
        console.log("test", element.replace("√", ""));
        const number = Number(element.replace("√", ""));
        console.log(calculationArray);
        calculationArray[counter] = Math.sqrt(number);
        console.log(calculationArray);
        counter = 0;
      }
    }
  }

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
        counter = 0;
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
  }console.log("testytest",calculationArray[0]);
 document.getElementById("result").innerText = calculationArray[0]
  return calculationArray[0]; //notwendig, damit man damit weiter rechnen kann (z.Bsp für Klammern), es wird kein
  // Array, in diesem Fall auch nur mit einem Element ausgegeben; z.Bsp [25], sondern eine Zahl (oder in anderen Fällen ein String)

  

}
}

