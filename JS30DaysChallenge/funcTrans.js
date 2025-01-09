//Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = (...args) => {
    return args.length;
}

console.log(argumentsLength(1, 2, 3));