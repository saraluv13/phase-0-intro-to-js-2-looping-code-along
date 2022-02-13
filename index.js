// Code your solutions in this file
messages = ['Thank you, ${arrayNames[i]}, for the wonderful surprise gift!'];
arrayNames = ["Guadalupe", "Ollie", "Aki"];
writeCards(["Guadalupe", "Ollie", "Aki"],"messages")
  
function writeCards(arrayNames, messages) {
    const arrayMessages = []
    for (let i = 0 ; i < arrayNames.length ; i++) {
        arrayMessages.push( `Thank you, ${arrayNames[i]}, for the wonderful ${messages} gift!`)
    }

    
    return arrayMessages;   

}

function countDown(number){
    while (number > 0){
        console.log(number)
        number -= 1
    }
    console.log(number)
}



