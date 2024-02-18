// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price
// "Послуги" можуть додаватися по ходу роботи: services['Розбити скло'] = "200 грн";
// Ex. 2

var services = {
    Haircut : "60 грн",
    Shaving : "80 грн",
    WashingHair : "100 грн",
  
    // Метод, який обчислює та повертає загальну вартість "наданих послуг"
    price: function(){
        var total = 0;
        for (var service in this) {
            if (typeof this[service] === 'string' && this[service].includes('грн')){
                total += parseInt(this[service].split(' ')[0]);
            }
        }
        return total + ' грн';
    },
  
    // Метод, який повертає мінімальний price
    minPrice: function() {
      var min = Infinity;
      for (var service in this) {
        if (typeof this[service] === 'string' && this[service].includes('грн')) {
          var price = parseInt(this[service].split(' ')[0]);
          min = Math.min(min, price);
        }
      }
      return min + ' грн';
    },
  
    // Метод, який повертає максимальну вартість послуг
    maxPrice: function() {
      var max = -Infinity;
      for (var service in this) {
        if (typeof this[service] === 'string' && this[service].includes('грн')) {
          var price = parseInt(this[service].split(' ')[0]);
          max = Math.max(max, price);
        }
      }
      return max + ' грн';
    }
  };
  
  services['GlassBreaks'] = '200 грн';

  console.log("Загальна вартість послуг: " + services.price());
  console.log("Мінімальна вартість послуг: " + services.minPrice());
  console.log("Максимальна вартість послуг: " + services.maxPrice());
  