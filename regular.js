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

function objectValidate(arr) {

    return arr.filter(obj => validation(obj.email)).map(obj => obj.email);
}
    const validEmails = objectValidate(arr);

    if (validEmails.length > 0) {
        console.log('Чудовий варіант для емейлу - одобрюю!');
        console.log(validEmails);
    } else {
        console.log('Трішки не підходить емейл. Спробуй ще :3');
    }
