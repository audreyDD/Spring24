
function LRU(frames, pages) {
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
                let smallest = 0
                for(let n = 0; n < tUsed.length; n++) {
                    if(tUsed[n] < tUsed[smallest]) smallest = n
                }
                //the LRU frame is replaced with value
                table[smallest] = num
                //The index of the newest value added in pages is put in tUsed in the same index it is stored
                //in the table
                tUsed[smallest] = i
                faults ++
            default:
                //It is already in table
                tUsed[possibleIndex] = i
        }
        console.log("\nAfter adding:")
        console.log("New table: " + table)
        console.log("New time table: " + tUsed + "\n")
        console.log("faults: " + faults)
    }
    console.log("Total faults: " + faults)
}

let pageReference = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3]
console.log("Example 1: ")
LRU(4, pageReference)
/*
let pageRef2 = [6, 1, 1, 2, 0, 3, 4, 6, 0, 2, 1, 2, 1, 2, 0, 3, 2, 1, 2, 0]
console.log("Example 2:")
LRU(3, pageRef2)*/


