let { student, age } = { student: true, age: 20 };
let 오브젝트 = { student: true, age: 20 };

function 함수1({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수1({ student: true, age: 20 });

function 최댓값(...a: number[]): number {
  let answer = 0;
  a.forEach((i) => {
    if (answer < i) {
      answer = i;
    }
  });
  return answer;
}

function 함수({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

function 숙제3([...a]: (string | number | boolean)[]) {
  console.log(...a);
}
