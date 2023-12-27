function calculateOilAmount(fuelLiters, ratio) {
    let oilLiters = fuelLiters / ratio;
    return oilLiters * 1000;
}


document.addEventListener("DOMContentLoaded", function () {
    let fuelInput = document.getElementById("fuel");
    let ratioInput = document.getElementById("ratio");
    let ratioLabel = document.getElementById("ratio-label");
    let resultDiv = document.querySelector(".result");
    let resultParagraph = resultDiv.querySelector("p");

    function calculateAndDisplayResult() {
        let fuel = parseFloat(fuelInput.value);
        let ratio = parseFloat(ratioInput.value);

        if (!isNaN(ratio)) {
            if (ratio > 100) {
                ratio = 100;
                ratioInput.value = 100;
            } else if (ratio < 0) {
                ratio = 50;
                ratioInput.value = 50;
            }
        }else{
            ratio = 1;
        }

        ratioLabel.textContent = "Ratio (1:" + ratio + ")";

        if (!isNaN(fuel) && !isNaN(ratio)) {

            let oilAmount = calculateOilAmount(fuel, ratio);
            resultParagraph.textContent = "Oil amount: " + oilAmount + " milliliters";
            resultDiv.style.display = "block";
        } else {
            resultDiv.style.display = "none";
        }
    }

    fuelInput.addEventListener("input", calculateAndDisplayResult);
    ratioInput.addEventListener("input", calculateAndDisplayResult);
});
