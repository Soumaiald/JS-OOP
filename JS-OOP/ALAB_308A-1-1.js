
/******************************************* Part One *************************************/
console.log("******************************************* Part One *************************************")
let count = 0

function incrementCounter(){
    count = count+1
    return incrementCounter()
}

try {
    incrementCounter()
} catch (error){
    console.log("the counter value is : " + count)
    console.log("this is the error : "+error)
}


/******************************************* Part Two *************************************/

console.log("******************************************* Part Two *************************************")

const nestes = [[[[1, 2, [[3, 4, [5, 6]]]]]]]
let counter = 0
function deepNested(arr){
    if (JSON.stringify(arr) === JSON.stringify(arr.flat())) return arr
    return () => deepNested(arr.flat())
}


const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
}

const arrflat = trampoline(deepNested(nestes))

console.log(arrflat)