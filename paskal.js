

function calculateRow(n){
    // first entry of resultArr needs to be
    resultArr.push(1);
    
    //logic to fill row
    for (i = 1; i < n-1; i++) {
        resultArr[i] = interimArr[i-1] + interimArr[i];
        
    }
    // last entry of resultArr needs to be 1
    resultArr.push(1);
    return resultArr;
}


function paskal(userInput) {

    let n = parseFloat(userInput);
    if (n === 1) {
        resultArr.push(1);
        console.log(result_array);
    }
    else if (n === 2) {
        console.log(interimArray);
    } else {

        for(j=3; j <= n; j++){
            
            
            let row = calculateRow(j);
            

            // overwirte the interimArr with the current resultArr for further calculation
            interimArr = row
            
            // reset resulArr for further use
            resultArr = [];

        }
        console.log('Current row: '+interimArr);
    }
}

// global variables
let resultArr = [];
let interimArr = [1, 1];

//let interimArr = [1,9,36, 84, 126, 126, 84, 36, 9, 1];

let userInput = prompt('Which row do you want?','1');
//console.log(userInput);
//console.log(typeof(userInput))

paskal(userInput);
