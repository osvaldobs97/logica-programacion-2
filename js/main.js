const tempCesl = document.getElementById("tempCesl");
const resultadoF = document.getElementById("resultadoF");
const resultadoK = document.getElementById("resultadoK");
const resultadofTexto = document.getElementById("resultadofTexto");
const resultadokTexto = document.getElementById("resultadokTexto");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {

    let celcius = Number(tempCesl.value);

    if (!isNaN(celcius) && tempCesl.value.trim() !== "") {

        let farenheit = (celcius * 9 / 5) + 32;
        let kelvin = celcius + 273.15;

        resultadofTexto.innerHTML = `Temperatura en Fahrenheit: <strong>${farenheit.toFixed(2)} °F</strong>`;
        resultadoF.classList.remove("d-none");
        resultadokTexto.innerHTML = `Temperatura en Kelvin: <strong>${kelvin.toFixed(2)} K</strong>`;
        resultadoK.classList.remove("d-none");

    } else {
        alert("Por favor ingresa un número válido.");
    }
});

    btn2.addEventListener("click", function(event){
    event.preventDefault();
    tempCesl.value = "";
    tempCesl.focus();

    resultadoF.classList.add("d-none");
    resultadoK.classList.add("d-none");
    });