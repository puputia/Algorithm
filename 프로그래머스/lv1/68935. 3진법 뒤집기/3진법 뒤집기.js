function solution(n) {
    var Arr = n.toString(3).split("").reverse().join("");
    return parseInt(Arr, 3);
}