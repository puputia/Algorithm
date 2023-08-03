function solution(s) {
    var answer = 0;
    if(s >= 0) {
        answer = s;
    }
    else {
        answer = -1 * -1 * s;
    }
    
    return parseFloat(answer);
}