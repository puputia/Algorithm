function solution(n)
{
    var answer = 0;

    let m = String(n);
    for(i=0; i<m.length; i++) {
        answer += parseInt(m[i]);
    }
    return answer;
}