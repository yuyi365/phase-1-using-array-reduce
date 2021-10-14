const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//create a variable totalBatteries that holds the sum of all of the battery amounts in the batteryBatches array

const reducerTool = (accumulator, item) => {
    return accumulator += item; // sum of total per item in the array
}
// returns each acculated amount by item

let totalBatteries = batteryBatches.reduce(reducerTool, 0);
totalBatteries;

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//     return batches + total
//     }
//   )