function solution(food) {
    let arrange = ''
    
    for (let i = 1; i < food.length; i++) {
            arrange += String(i).repeat(~~(food[i] / 2));
    }
    
    return arrange + 0 + arrange.split('').reverse().join('')
}