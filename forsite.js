
const calculation = "5+8+12*5";
const calculationArray = calculation.replaceAll("+", " + ").replaceAll("*", " * ").split(" ");

console.log(calculationArray)

while (calculationArray.includes ("*")){
for (let counter = 0; counter < calculationArray.length; counter++) {
    const element =calculationArray[counter];
    console.log(element)
if (element==="*") {
    console.log(calculationArray[counter-1]*calculationArray[counter+1])
    const ergebnis = calculationArray[counter-1]*calculationArray[counter+1]
    calculationArray[counter-1]= ergebnis
    calculationArray[counter+1]= ""
    calculationArray[counter]= ""
   
    console.log(calculationArray)
}    
}
}
while (calculationArray.includes ("+")){
for (let counter = 0; counter < calculationArray.length; counter++) {
  const element = calculationArray[counter]
  console.log(element)
if (element ==="+"){
    console.log(calculationArray[counter-1]+calculationArray[counter+1])
    const ergebnis = Number(calculationArray[counter-1])+Number(calculationArray[counter+1])
    calculationArray[counter-1]= ergebnis
    calculationArray[counter+1]= ""
    calculationArray[counter]= ""
    console.log (calculationArray)
}
}
}

let Endergebnis = 0
for (let counter = 0; counter < calculationArray.length; counter++) {
   
    Endergebnis += Number(calculationArray[counter]);
    console.log(Endergebnis)
}