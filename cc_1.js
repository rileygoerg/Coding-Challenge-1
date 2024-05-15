let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
let total = tip+bill
console.log("The bill was " + bill + ", the tip was " + tip + ", and the total was " + total + ".")