function revArr() {
    let arr = [1,2,3,4,5]
    arr.slice().reverse().forEach(function f(element) {
        console.log(element);
    })
}
revArr()