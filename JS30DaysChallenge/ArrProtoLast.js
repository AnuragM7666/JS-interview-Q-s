//Write code that enhances all arrays such that you can call the array.last() 
// method on any array and it will return the last element. If there are no elements in the array,
//  it should return -1.

//You may assume the array is the output of JSON.parse.A
Array.prototype.last = function () {
    const n = this.length;
    
    return n == 0 ? -1 : this[n - 1];
}

// Example usage:
const arr = [1, 2, 3, 4, 5];    
console.log(arr.last()); 