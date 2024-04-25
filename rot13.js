let dict_1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
let dict_2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const fs = require('node:fs');

fs.readFile('preCalc.txt', 'utf8', (err, data) => 
{
    if (err)
    {
        console.error(err);
        return;
    }

    console.log(rot13(data, dict_1, dict_2));
});


function rot13(text, listOne, listTwo)
{
    text = text.split("");
    
    for(let i = 0; i < text.length; i++)
    {
        if(listOne.includes(text[i]))
        {
            text[i] = listTwo[listOne.indexOf(text[i])];
        }

        else if(listTwo.includes(text[i]))
        {
            text[i] = listOne[listTwo.indexOf(text[i])];
        }

        else if(listOne.includes(text[i].toLowerCase()))
        {
            text[i] = listTwo[listOne.indexOf(text[i].toLowerCase())].toUpperCase();
        }

        else if(listTwo.includes(text[i].toLowerCase()))
        {
            text[i] = listOne[listTwo.indexOf(text[i].toLowerCase())].toUpperCase();
        }
    }
    return text.join("");
}