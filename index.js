function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function () { return 60 + 9; }) 
function returnsANamedFunction() {
    return function daddy() {
        3 + 4;
    }
}
function returnsAnAnonymousFunction() {
    return function () {
        7 ** 7;
    }
}