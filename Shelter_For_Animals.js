// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

// Ex. 1
var shelter = {
    lastName: 'Sunny',
    Type: 'Cat',
    Age: 1,
    Food: 'Wet food'
  };
  
  console.log(shelter);
  shelter.sterilized = 'yes';
  console.log(shelter); 
