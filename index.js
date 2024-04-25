function evenAndOdd(array) {
    let odd = [];
    let even = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    return {even,odd};
}


console.log(evenAndOdd([1,2,3,4,5,6,7,8,9,10])); // { even: [ 2, 4, 6, 8, 10 ], odd: [ 1, 3, 5, 7, 9 ] }