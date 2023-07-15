function solution(num_list) {
    // map 함수를 통해, 배열 모든 원소 나누기 2
    const num_list2 = num_list.map(x => x % 2);
    
    // 홀수의 갯수 odd에 할당
    const odd = num_list2.filter(x => 1 === x).length;
    
    // 짝수의 갯수 even에 할당
    const even = num_list2.filter(x => 0 === x).length;
    
    // 배열 return
    return [even, odd];
}