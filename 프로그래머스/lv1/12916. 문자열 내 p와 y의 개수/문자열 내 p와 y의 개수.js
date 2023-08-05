function solution(s){
var answer = true;

// s의 모든 영문을 소문자로 바꿔준다(같은 것을 찾을 때 확실히 하기위해서)
let str = s.toLowerCase();
// 소문자로 바꾼 s의 문자열들을 배열로 하나씩 나눠준다.
str = [...str];

// 먼저 변수 p,y 에 값을 0으로 선언해준다.
let p = 0;
let y = 0;

// for문으로 i를 str의 총 배열 갯수만큼 증가시키고 str[i]의 값과 "p" 가 일치할 때마다 p를 증가, 같은 방법으로 y와도 일치할 시 y도 증가시켜준다.
for(let i=0; i<str.length; i++){
    if(str[i] == 'p'){
        p++;
    } else if (str[i] == 'y'){
        y++;
    }
}

// 그렇게 증가시켜준 값이 들어간 p 와 y 의 수가 같으면 answer에 true를 대입
if(p == y){
    answer = true;
// 그게 아니면 answer에 false를 대입해준다.
} else {
    answer = false;
}

return answer;
}