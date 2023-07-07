function solution(s){    
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] == "a" && s[i] == ')') {
            stack.pop();
        } else {
            stack.push("a");
        }
    }
    
    return !stack.length;
}