const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");
const bmiResult = document.getElementById("bmi-result");
const bmiImage = document.getElementById("bmi-image");




function calculateBMI(){

const weight = parseFloat(weightInput.value);
const height = parseFloat(heightInput.value);

if (weight <= 0 || height <= 0 || weightInput.value.trim() === "" || heightInput.value.trim() === "") {
    bmiResult.textContent = "Please enter valid weight and height!";
    bmiImage.style.display = "none";
    return;
}

const bmi = weight / (height * height);
bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

if (bmi < 18.5) {
    bmiImage.src = "./images/underweight.jpg"; 
} else if (bmi >= 18.5 && bmi < 24.9) {
    bmiImage.src = "./images/normal.jpg"; 
} else if (bmi >= 25 && bmi < 29.9) {
    bmiImage.src = ".images/overweight.jpg";  
} else {
    bmiImage.src = ".images/obese.jpg"; 
}

bmiImage.style.display = "block";

}

function resetFields(){
weightInput.value = "";
heightInput.value = "";
bmiResult.textContent = "Results will appear here."
bmiImage.style.display = "none";
}
