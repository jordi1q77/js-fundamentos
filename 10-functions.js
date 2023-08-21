function getPriceByCity(city) {
  var price;

  switch (city) {
    case "Valencia":
      price = 10;
      break;
    case "Madrid":
      price = 15;
      break;
    case "Barcelona":
      price = 12;
      break;
    default:
      price = 5;
      break;
  }
  return price;
}

var priceByCity = getPriceByCity('Barcelona');

console.log(`La función devuelve el precio: ${priceByCity}`);