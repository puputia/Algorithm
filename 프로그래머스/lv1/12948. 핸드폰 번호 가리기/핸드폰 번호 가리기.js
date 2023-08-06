function solution(phone_number) {
    var answer = "";
    var length = phone_number.length;

    // 뒷 4자리를 제외한 나머지 숫자를 '*'로 바꾸는 과정
    var stars = "*".repeat(length - 4);

    answer = stars + phone_number.substring(length - 4);
    return answer;
}





