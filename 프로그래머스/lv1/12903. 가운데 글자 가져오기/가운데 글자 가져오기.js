function solution(s) {
    var answer = '';
    if(s.length % 2 === 0) {
       answer = s[s.length/2-1] + s[s.length/2];  
    }
      
  
    else {
        answer = s[Math.floor(s.length/2)]; //홀 수 일경우 
    }
    return answer;
}