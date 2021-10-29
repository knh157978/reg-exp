#정규표현식(RegExp)
정규식, Regular Expression
## 역할
-문자검색
-문자대체
-문자추출
##테스트 사이트
https://regexr.com/

##정규식 생성
```js
//생성자
nex RegExp('표현','옵션')
nex RegExp('[a-z]','gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 메소드

메소드 | ㅂ문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match|  `문자열.match(정규식)`  | 일치하는 문자의 배열(Array) 반환
replace |`문자열.repalce(정규식,대체문자)` |일치하는 문자를 대체

##예제문자
const str = `
010-1234-5678
thesecon@gmail.com
https://www.sedaily.com
The auick brown fox jumps over the lazy dog.
abbcccdddd
`

## 플래그

플래그 |	설명
--|--
g | 모든 문자와 여러 줄 일치(global)
i | 영어 대소문자를 구분 않고 일치(insensitive, ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)
정규식패턴	 | 설명
--|--
^	| 줄(Line)의 시작에서 일치, /^abc/
$	| 줄(Line)의 끝에서 일치, /xyz$/
.	| 임의의 한 문자와 일치
a&verbar;b	|a 또는 b와 일치, 인덱스가 작은 것을 우선 반환
{3} |	3(숫자)개 연속 일치
{3,}|	3개 이상 연속 일치
{3,5}|	3개 이상 5개 이하(3~5개) 연속 일치
{3,5}?|	3개 이상 5개 이하(3~5개) 연속 중 가능한 적은 3개 연속 일치(lazy), {3}와 동일
