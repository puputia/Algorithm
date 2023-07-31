function solution(n, k) {
   
    let sheep = 12000;
    let drink = 2000;
    
  
    let answer = (sheep*n) + (drink*k) -  parseInt(n/10)*drink ;
    return answer;
}