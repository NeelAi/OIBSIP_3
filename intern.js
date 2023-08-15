

function convertTocelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var celsiusInput = document.getElementById("celsiusInput");
    
    if (fahrenheitInput.value) {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    
    if (celsiusInput.value) {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = celsius * 9 / 5 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }
  