// написати функцію findValueByKey(Object, companyName), 
// яка буде приймати значення у вигляді 'Клієнт 1.2' ('Велика Компанія', 'Клієнт 2'... ) та надавати інформацію про цю subCompany.

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// Оптимізоване фінальне рішення  
function list_searсh(list, companyName) {
    for (let i = 0; i < list.length; i++ ){
        if (list[i].name == companyName.toString()){
            console.log(list[i]);
            break;
        }
        if (list[i].partners){
            list_searсh(list[i].partners, companyName)
        }
    }

}

function findValueByKey(obj, companyName) {
    if (obj.name === companyName) {
        console.log(obj);
        return obj;
    }
    let clients = obj.clients;
    let box = list_searсh(clients, companyName);
}
const result = findValueByKey(company, 'Клієнт 1.2.3');


// Першочергове рішення без оптимізації 

// function findValueByKey(obj, companyName) {
//     // console.log(obj.clients[0].partners[0]);
//     if (obj.name === companyName) {
//         return obj;
//     }

//     let clients = obj.clients;
//     for (let i = 0; i < clients.length; i++ ){
//             // console.log(clients[i]);
//         if (clients[i].name == companyName.toString()){
//             console.log(clients[i]);
//         }
//         if (clients[i].partners){
//             let partners = clients[i].partners;
//             for (let o = 0; o < partners.length; o++ ){
//                 // console.log(partners[i]);
//                 if (partners[o].name == companyName.toString()){
//                     console.log(partners[o]);
//                 }
//                 if (partners[o].partners){
//                     let sub_partners = partners[o].partners;
//                     for (let k = 0; k < sub_partners.length; k++ ){
//                         // console.log(partners[i]);
//                         if (sub_partners[k].name == companyName.toString()){
//                             console.log(sub_partners[k]);
//                         }
//                     }
//                 }
//             }
//         }
//     }
    
// }
// const result = findValueByKey(company, 'Клієнт 1');



