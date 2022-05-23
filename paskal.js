function paskal(userInput) {
    let result_array = [];
    let interimArray = [1, 1];
    let n = parseFloat(userInput);
    if (n === 1) {
        result_array.push(1);
        console.log(result_array);
    }
    else if (n === 2) {
        console.log(interimArray);
    } else {
        result_array[0] = 1;
        result_array[result_array.length-1] = 1;
        
        
        console.log(result_array);
    }
}


let userInput = prompt('Which row do you want?','1');
//console.log(userInput);
//console.log(typeof(userInput))

paskal(userInput);