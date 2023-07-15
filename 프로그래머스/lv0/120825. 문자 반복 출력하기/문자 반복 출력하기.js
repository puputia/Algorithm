function solution(my_string, n) {
    let answer = "";
    let str = my_string.split("");
    for(let i = 0; i < str.length; i++) {
        for(let j=0; j<n; j++) {
            answer += str[i];
        }
    }
    return answer;
}