const CelciusE1 = document.getElementById("Celcius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelivnE1 = document.getElementById("Kelivn");
function computeTemp(){
    //Add + to avoid string problem
        const currentValue =+event.target.value;

        switch (event.target.name) {
            case "Celcius":
             KelivnE1.value = currentValue + 273.15;
             FahrenheitE1.value = currentValue *1.8 + 32;
             break; 

             case "Fahrenheit":
                CelciusE1.value = (currentValue -32) / 1.8;
                KelivnE1.value = (currentValue - 32) /1.8 + 273.15;
                break; 

                case "Kelivn":
                    CelciusE1.value = currentValue + 273.15;
                    FahrenheitE1.value = (currentValue - 275.15) *1.8 + 32;
                    break; 

             default:
                break;

        }
}