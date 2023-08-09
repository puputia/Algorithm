function solution(numbers, k) {
    var answer = numbers[(k*2-2) % numbers.length];
    return answer;
}
