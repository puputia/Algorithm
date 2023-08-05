function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6 || isNumeric(s)){
        answer = true;
    }
    else {
        answer = isNaN(s);
    }
    return answer;
}