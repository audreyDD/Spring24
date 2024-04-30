
function MRU(frames, pages) {
    let faults = 0
    let table = new Array(frames)
    let tUsed = new Array(frames).fill(900)
    for(const i in pages) {
        num = pages[i]
        console.log("Current iteration: " + i)
        possibleIndex = table.indexOf(num)
        console.log("Is " + num + " in table: " + possibleIndex)
        switch(possibleIndex) {
            case -1:
                let largest = 0

                for(let n = 0; n < tUsed.length; n++) {
                    console.log(typeof tUsed[n])
                    console.log(typeof tUsed[largest])
                    if(parseInt(tUsed[n], 10) > parseInt(tUsed[largest], 10)) largest = n
                }
                table[largest] = num
                tUsed[largest] = i
                faults ++
                break
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

/*let pageReference = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3]
console.log("Example 1: ")
MRU(4, pageReference)*/

let pageRef2 = [6, 1, 1, 2, 0, 3, 4, 6, 0, 2, 1, 2, 1, 2, 0, 3, 2, 1, 2, 0]
console.log("Example 2:")
MRU(3, pageRef2)


