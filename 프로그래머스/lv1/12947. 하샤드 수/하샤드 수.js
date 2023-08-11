function solution(x) {
    var answer = true;
    
    let split = String(x).split("");
    let sum = 0;
    for(let i=0; i<split.length; i++) {
        sum+=parseInt(split[i]);
    }
    if(!(x%sum === 0)) {
        answer = false;
    }
    
    return answer;
}