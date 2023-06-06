// 아래에 코드를 작성해 주세요.

let num = parseInt(prompt("숫자를 입력하세요"));

if (num % 2 == 0) {
    document.write(`${num}은 짝수입니다.`);
} else if (num % 2 == 1) {
    document.write(`${num}은 홀수입니다.`);
} else {
    document.write(`${num}은 숫자가 아닙니다.`);
}