let 숙제1: [string, number, ...boolean[]] = ["동서녹차", 4000, true];

function 함수(...a: [string, boolean, ...(number | string)[]]) {}

function 숙제2(...a: (string | number)[]) {
  let result: [string[], number[]] = [[], []];
  a.forEach((item) => {
    if (typeof item === "string") {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  });
  return result;
}
