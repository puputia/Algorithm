function solution(array, n) {
    var answer = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) { // 배열의 각 원소와 n을 비교하여 일치하는지 확인
            answer++; // 일치하면 answer 증가
        }
    }
    
    return answer;
}