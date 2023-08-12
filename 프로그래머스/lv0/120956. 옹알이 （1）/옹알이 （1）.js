function solution(babbling) {
    var answer = [];
    let talk =  ["aya", "ye", "woo", "ma"];
    for(let i=0; i<babbling.length; i++) {
        if(babbling[i] === talk) {
            answer.push(i);
        }
    }
    return answer;
}