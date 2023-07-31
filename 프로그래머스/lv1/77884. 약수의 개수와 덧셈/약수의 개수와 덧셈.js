function countCalc(num) {
    let count = 0
    for (let i = 1; i < num + 1; i++){
        if (num % i === 0){
            count = count + 1;
        }
    }
//약수구하기   
    if (count % 2 === 0) {
        return num
    } else {
        return -num
    }
}
//약수 짝수일때, 홀수일때

function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        answer += countCalc(i)
    }
    return answer;
}
//약수의갯수구하기