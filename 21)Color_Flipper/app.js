const newColourBtnElement = document.getElementById('new-colour-button');
const currentColourElement = document.getElementById('current-colour');

//0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F... NO GOING FOR 10

const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const RandomHexValue = hexValues[randomIndexPosition];

    return RandomHexValue;
     
}

function getRandomHexString(stringLength){
    let hexString = '';
    for (let i=0; i<stringLength; i++){
        hexString += getRandomHexValue();
    }
    return hexString;
}


newColourBtnElement.addEventListener('click', function(){
    const randomHexString = '#' + getRandomHexString(6);
    // alert(randomHexString);
    document.body.style.setProperty('background-color', randomHexString);

    currentColourElement.textContent = randomHexString;
});


// Math.random() * hexValues.length gives us the decimal
// Math.floor(Math.random() * hexValues.length); gives us the whole number
// const randomHexString = getRandomHexString(6);
// call it with a value of six to give us the "six charachters" in the string 