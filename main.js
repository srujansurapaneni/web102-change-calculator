// Write your JavaScript here
var docBody = document.body;


function calculateChange() {
    var getSaleprice = document.getElementById("amount-due").value;
    var getCustomerpaid = document.getElementById("amount-received").value;
    var diffAmounttotal = getCustomerpaid-getSaleprice;
    var diffRounded = Math.floor(diffAmounttotal).toFixed(0);
    var diffTwodecimals = diffAmounttotal.toFixed(2);
    var diffAmount =  (diffTwodecimals-diffRounded) * 100;

	var calcQuarter = Math.floor(diffAmount/25);
        diffAmount = diffAmount%25;

	var calcDime= Math.floor(diffAmount/10);
        diffAmount = diffAmount%10;

	var calcNickel = Math.floor(diffAmount/5);
        diffAmount = diffAmount%5;

    var calcPenny = Math.round(diffAmount/1);
    
    document.getElementById("dollars-output").textContent = diffRounded;
    document.getElementById("quarters-output").textContent = calcQuarter;
    document.getElementById("dimes-output").textContent = calcDime;
    document.getElementById("nickels-output").textContent = calcNickel;
    document.getElementById("pennies-output").textContent = calcPenny;
}
