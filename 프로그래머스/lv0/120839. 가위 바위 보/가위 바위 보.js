function solution(rsp) {
    let answer = '';
    for (let i = 0; i < rsp.length; i++) {
        const currentChar = rsp[i];
        if (currentChar === '2') {
            answer += '0';
        } else if (currentChar === '0') {
            answer += '5';
        } else if (currentChar === '5') {
            answer += '2';
        }
    }
    return answer;
}