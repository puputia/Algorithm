function solution(my_string) {
    
    var answer = '';
    var splitArray = my_string.split("");
    var reverseArray = splitArray.reverse();
    var answer = reverseArray.join("");
    return answer;
}