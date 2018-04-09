window.onload = function () {
    
    document.getElementById("calculate").onclick = function () {
        const calculator = new BMICalculator();
        calculator.validate() ? calculator.calculate() : alert("Please fill all inputs");
    }

    class BMICalculator {
        constructor() {
            const radioButtons = document.getElementsByName("unit");
            let radioBtnValue = radioButtons[0].checked ? radioButtons[0].value : '';

            this.height = parseInt(document.getElementsByName("height")[0].value);
            this.weight = parseInt(document.getElementsByName("weight")[0].value);
            this.unit = radioBtnValue;

            if (this.unit === "english") {
                this.height = this.height * 0.0254;
                this.weight = this.weight * 0.4536;
            }
        }

        validate() {
            return !(isNaN(this.height) || isNaN(this.weight) || this.unit === undefined);
        }

        calculate() {
            const bmi = this.weight / (this.height * this.height);
            let outputField = document.getElementById("output");
            outputField.innerText ='';
            outputField.innerText += outputField.innerText + bmi.toFixed(2);

            if(bmi < 18.5) {
                outputField.innerText += outputField.innerText + " - Underweight";
            } else if(bmi < 25) {
                outputField.innerText += outputField.innerText + " - Normal";
            } else if(bmi < 30) {
                outputField.innerText += outputField.innerText + " - Overweight";
            } else {
                outputField.innerText += outputField.innerText + " - Obese";
            }
        }
    }
}