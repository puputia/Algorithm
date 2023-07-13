function solution(bridge_length, weight, truck_weights) {
    // queue 초기화
    let queue = new Array(bridge_length).fill(0);
    let seconds = 0; //모든 트럭이 다리를 건너는데 소요되는 시간
    
    while (queue.length) {
        // queue 하나씩 실행
        queue.shift();
        seconds++;
        
        let queueSum = queue.reduce((acc,cur) => acc + cur, 0);
        
        if (truck_weights.length) { 
            if (queueSum + truck_weights[0] <= weight) {
                // 1. 현재 queueSum과 truck_weights[0] 합이 weight보다 같거나 작으면 -> queue에 push();
                let temp = truck_weights.shift();
                queue.push(temp); 
            } else {
                // 2. 현재 queueSum과 truck_weights[0] 합이 weight를 넘으면 -> queue에 push(0)
                queue.push(0);
            }
        }
    }
    
    return seconds;
}