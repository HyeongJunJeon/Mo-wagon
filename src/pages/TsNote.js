function 함수(x) {
    for (var i = 0; i < x.length; i++) {
        if (typeof x[i] === "string") {
            Number(x[i]);
        }
        else if (typeof x[i] === "number") {
        }
        return;
    }
}
console.log(["1", 2, "3"]);
