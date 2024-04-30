
function FIFO(frames, pages) {
    let faults = 0
    let table = new Array(frames)
    let tUsed = new Array(frames).fill(-1)
    for(const i in pages) {
        num = pages[i]
        console.log("Current iteration: " + i)
        possibleIndex = table.indexOf(num)
        console.log("Is " + num + " in table: " + possibleIndex)
        switch(possibleIndex) {
            case -1:
                //smallest = oldest entry
                let smallest = 0
                for(let n = 0; n < tUsed.length; n++) {
                    if(tUsed[n] < tUsed[smallest]) smallest = n
                }
                //the frame is replaced with value
                table[smallest] = num
                //The index of the newest value added in pages is put in tUsed in the same index it is stored
                //in the table
                tUsed[smallest] = i
                faults ++
            default:
                //It is already in table

        }
        console.log("\nAfter adding:")
        console.log("New table: " + table)
        console.log("New time table: " + tUsed + "\n")
        console.log("faults: " + faults)
    }
    console.log("Total faults: " + faults)
}
/*
let pageReference = [6, 1, 1, 2, 0, 3, 4, 6, 0, 2, 1, 2, 1, 2, 0, 3, 2, 1, 2, 0]
console.log("Example 1: ")
FIFO(3, pageReference)
//Correct number of faults is 12
*/
let pageRef2 = [3, 2, 1, 0, 3, 2, 4, 3, 2, 1, 0, 4]
console.log("Example 2:")
FIFO(4, pageRef2)
//correct number of faults is 10


