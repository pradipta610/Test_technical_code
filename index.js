console.log('test data');

let a = document.getElementById(clickNumber);
console.log(a)
function generateSegitiga(panjang) {
    let number = panjang.toString().split('');
    let separateNumber = number.map(Number)
    let result = 0;
    for (let i = 0; i < panjang.toString().length; i++) {
        for (let j = 0; j <= i; j++) {
            result += separateNumber[i] 
        }
        result += '\n'
    }

    return result;


}
function generateBilanganGanjil(number) {
    let result = [];
    for (i = 0; i <= number; i++) {
        let a = i % 2 === 0
        if (!a) {
            result += i
        }
        result += '\n'

    }

    return result
}
function generateBilanganPrima(number) {
    let result = [];
    for (j = 1; j < number; j++) {
        let pembagi = 0;
        for (i = 0; i <= j; i++) {
            if (j % i == 0) {
                pembagi++
            }
        }
        if (pembagi == 2) {
            result += j
            result += '\n'

        }


    }
    return result

}

console.log(generateBilanganPrima(100))