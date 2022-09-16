const calculation = "9+3*-2";

let newstring = calculation.split(
  /(?<=[0-9])(\+|\-|\*|\/)(?=[0-9])|(?<=[0-9])(\+|\-|\*|\/)(?=\-[0-9])/
);
newstring = newstring.filter((a) => a);

console.log(newstring);

const calculationArray = newstring;

console.log(calculationArray);

const origin = ["√", "*", "+", "/", "-"];
let unicodeArray = []; // der neue Array, für die CharCodes
console.log(origin[3].charCodeAt(0).toString());
for (let i = 0; i < calculationArray.length; i++) {
  unicodeArray.push(origin[i].charCodeAt(0).toString()); // pushed in den unicodeArray an erster Stelle den Code/Unicode von der Wurzel;
  // Übersetzt von Dezimal in Unicode, to.String macht String draus;
}

{
  origin[0].normalize(); // falls diese Rechenzeichen vorhanden sind, normalize?
  console.log(origin); // Anzeigen von origin
}
console.log(unicodeArray); // Array zum Überprüfen
console.log(String.fromCharCode(Number(test))); // Test, ob Nummern raus kommen

while (
  unicodeArray.includes("8730") || 
  unicodeArray.includes("42") || 
  unicodeArray.includes("47") 
) {
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
      console.log(Math.sqrt(Number(calculationArray[counter + 1])));
      const ergebnis = Math.sqrt(Number(calculationArray[counter + 1]));
      console.log(ergebnis);
      calculationArray[counter + 1] = ergebnis;
      calculationArray[counter] = y;
      calculationArray.splice(calculationArray.indexOf("y"), 1);
      counter = 0;
      console.log(calculationArray);
    }
  }
}
while (unicodeArray.includes("43") || unicodeArray.includes("45")) {
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
