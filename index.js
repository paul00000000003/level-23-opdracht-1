const optellen = (...nums) => nums.reduce((som, element) => som + element, 0);

const optellen2 = (num1, num2, num3, num4, num5, num6) => (num1 + num2 + num3 + num4 + num5 + num6);


console.log(optellen(1, 2, 3, 4, 5, 6));
console.log(optellen2(1, 2, 3, 4, 5, 6));