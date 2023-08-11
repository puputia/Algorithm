function solution(n) {
    let array = [];
    for(let i =1; i<=n; i++) {
        if(n%i ===0) {
            array.push(i) 
        }
    }
    
    let sum = 0;
    for(let i=0; i<array.length; i++) {
        sum += array[i] 
}
    
    return sum;
}