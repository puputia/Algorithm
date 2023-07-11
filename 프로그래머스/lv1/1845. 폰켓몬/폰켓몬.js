function solution(nums) {
    var answer = [];
    var maxPocket =  nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < maxPocket) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}