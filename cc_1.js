//let bill = 275;
//let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
//let total = tip+bill;
//console.log("The bill was " + bill + ", the tip was " + tip + ", and the total was " + total + ".");

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
//calculates tip based on bill input
}
let bills = [[275,40,430],[125,555,44]];
//matrix with both data sets
let tips = [
    [calcTip(bills[0][0]),calcTip(bills[0][1]),calcTip(bills[0][2])],
    [calcTip(bills[1][0]),calcTip(bills[1][1]),calcTip(bills[1][2])]
];
//utilizing calcTip function to create respective tip matrix
let totals = [
    [bills[0][0]+tips[0][0],bills[0][1]+tips[0][1],bills[0][2]+tips[0][2]],
    [bills[1][0]+tips[1][0],bills[1][1]+tips[1][1],bills[1][2]+tips[1][2]]
];
//summing each value in each respective matrix
console.table(bills);
console.table(tips);
console.table(totals);