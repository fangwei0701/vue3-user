// 添加千分隔离符号
export function thousandthSign(num: string | number, sign = ",") {
  const decimal = String(num).split(".")[1] || ""; //小数部分
  const tempArr: string[] = [];
  const revNumArr = String(num).split(".")[0].split("").reverse(); //倒序
  const length = revNumArr.length;
  revNumArr.forEach((v, i) => {
    tempArr.push(v);
    if ((i + 1) % 3 === 0 && i !== length - 1) {
      tempArr.push(sign);
    }
  });
  const integerNum = tempArr.reverse().join(""); //整数部分
  return decimal ? integerNum + "." + decimal : integerNum;
}
