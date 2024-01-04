function solution(a, b) {

    const atob = String(a) + String(b);
    const twice = 2 * a * b;
        

    return atob > twice ? Number(atob) : twice
}