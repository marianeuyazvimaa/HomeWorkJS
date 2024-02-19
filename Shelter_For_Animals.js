// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

// Ex. 1

let shelter = {
    lastName: 'Sunny',
    Type: 'Cat',
    Age: 1,
    Food: 'Wet food',
    getInfo: function() {
      let obj = {};
      for (let i in shelter){
          if (typeof this[i] !== 'function'){
            console.log(`${i}: ${this[i]}`);
          }
          else{
            console.log(`${i}: function - la, la, la :)`);
          }
      }
      // console.log(JSON.stringify(this));
    }
  };

shelter.sterilized = 'yes';
let object = shelter.getInfo();
shelter.city = 'New York';
shelter.getInfo();

