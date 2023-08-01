function solution(n) {
    let reverseArray = String(n).split("").reverse();
    var answer = reverseArray.map(Number);
    return answer;
}