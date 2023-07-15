function converterTemperature(request) {
  const degreesFahrenheit = (9 / 5) * request + 32;
  alert(`Температура в градусах Фаренгейта ${degreesFahrenheit.toFixed(2)}`);
}

function userRequest() {
  let requestDegrees = prompt("Введите температуру в градусах Цельсия:");
  if (isNaN(requestDegrees)) {
    alert("Введенное число некоректно. Попробуйте еще раз.");
    userRequest();
  } else {
    request = parseFloat(requestDegrees);
    return request;
  }
}

let request;
userRequest();
converterTemperature(request);
