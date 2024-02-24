var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function validation(email) {
    const rex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/i;
    return rex.test(email);
}

function objectValidate (arr) {
    const saveObjects = [];

    arr.forEach((obj, index)=>{
        if(!validation(obj.email)) {
            saveObjects.push(index);
        }
    });
    return saveObjects;
}
const searchEmail = objectValidate(arr);

if (searchEmail.length > 0) {
    console.log('Не валідний емейл. Спробуй ще :3');
    searchEmail.forEach((index) => {
        console.log(arr[index]);
    });
} else {
    console.log('Чудовий варіант для емейлу - одобрюю!');
}
