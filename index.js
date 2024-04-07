const closure = () => {
    const arr = [1,2,3,4,5]
    function returnArray() {
        return arr
    }

    function returnEvenArray() {
        return arr.filter((el)=> el%2 === 0)
    }

    function returnOddArray() {
        return arr.filter((el)=>el%2 !== 0)
    }

    function returnSumArray() {
        let res = 0;
        for(let i=0;i<arr.length;i++){
            res+=arr[i]
        }
        return res
    }

    function addNum(num) {
        if(typeof num === 'number') arr.push(num)
        return arr
    }

    return {returnArray,returnEvenArray,returnOddArray,returnSumArray,addNum }

}

const {returnArray, returnEvenArray,returnOddArray,returnSumArray,addNum } = closure()

console.log(returnArray())
console.log(returnEvenArray())
console.log(returnOddArray())
console.log(returnSumArray())
console.log(addNum(10))
