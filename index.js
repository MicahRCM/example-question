const getNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const product_Range = (a, b) => {
    var prd = a,
        i = a;

    while (i++ < b) {
        prd *= i;
    }
    return prd;
}

const sortIntArr = (arr) => {
	return arr.sort((a, b) => a - b)
}

const combination = (n, r) => {
    if (n == r) {
        return 1;
    } else {
        r = (r < n - r) ? n - r : r;
        return product_Range(r + 1, n) / product_Range(1, n - r);
    }

}

let class_size = getNumber(5, 12)
let vice_presidents = getNumber(2, class_size - 2)

const answer = class_size * combination(class_size - 1, vice_presidents)

let answer_choices = []
answer_choices[0] = Math.round(answer / 3)
answer_choices[1] = Math.floor(answer_choices[0] * 1.5)
answer_choices[2] = answer
answer_choices[3] = Math.round((answer) * 1.25)

answer_choices[4] = getNumber(answer / 4, answer * 1.5)

answer_choices = sortIntArr(answer_choices)

console.log(answer_choices)

let a = document.getElementById("var_1")
let b = document.getElementById("var_2")

a.innerHTML = class_size
b.innerHTML = vice_presidents

for (let i = 0; i < answer_choices.length; i++) {
	let option = document.getElementById("choice_" + (i + 1))
	option.innerHTML = answer_choices[i]
} 