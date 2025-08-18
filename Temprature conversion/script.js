let numberValue = document.getElementById("toConvert");
let Celsius = document.getElementById("toCelsius");
let Fahrenheit = document.getElementById("toFahrenheit");
let Button = document.getElementById("btn");
let result = document.getElementById("result");
let temp;

function convert(){
    if(Celsius.checked){
        temp = (numberValue.value -32) *5/9;
        result.textContent= temp.toFixed(2);
    }
    else if(Fahrenheit.checked){
        temp = (numberValue.value *9/5)+32;
        result.textContent=temp.toFixed(2);
    }
    else{
       result.textContent="Select the Correct Unit"; 
    }
}