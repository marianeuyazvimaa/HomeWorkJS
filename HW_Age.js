let num = prompt ('Хєй, друже! Скільки тобі років?');
let realnum = Number(num);
let remainder_division_10 = realnum % 10;
/**для наших довгожителів **/
let remainder_division_100 = realnum % 100; 

if (typeof(realnum) == 'number' && realnum > 0)
{
    if (remainder_division_10 === 1 && remainder_division_100 !== 11 )
    {
        console.log(`${realnum} рік`)
    } else if (remainder_division_10 >= 2 && remainder_division_10 <= 4 && !(remainder_division_100 >= 12 && remainder_division_100 <= 14))
    {
        console.log(`${realnum} роки`)
    } else {
        console.log(`${realnum} років`)
    }
}
 
else 
{
    console.log('А давай ти спробуєш ввести ще раз і в цей раз це буде ціле позитивне число, як і ми з тобоюю :3');
}