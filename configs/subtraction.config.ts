const thisTestConfig = {
    max_numbers_sum: "123456788",
    subtraction_integer_sets: [
        { num1: 'five', num2: 'three', expected: '2' },
        { num1: 'zero', num2: 'zero', expected: '0' },
        { num1: 'zero', num2: 'one', expected: '-1' },
        { num1: 'nine', num2: 'nine', expected: '0' },
        { num1: 'three', num2: 'seven', expected: '-4' },
        { num1: 'nine', num2: 'one', expected: '8' },
        { num1: 'two', num2: 'nine', expected: '-7' }
    ],

    subtraction_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['zero', 'zero'], expected: '5' },
        { num1: ['zero', 'zero'], num2: ['zero', 'one'], expected: '-0.1' },
        { num1: ['nine', 'nine'], num2: ['zero', 'one'], expected: '9.8' },
        { num1: ['one', 'two', 'three'], num2: ['zero', 'two', 'three'], expected: '1' }
    ],

    subtraction_neg_or_pos_integer_sets: [
        { num1: 'eight', num2: 'two', isNum2Negative: true, expected: '10' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', expected: '-10' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', isNum2Negative: true, expected: '-6' },
        { num1: 'two', isNum1Negative: true, num2: 'eight', isNum2Negative: true, expected: '6' },
        { num1: 'two', isNum1Negative: true, num2: 'two', expected: '-4' },
        { num1: 'nine', isNum1Negative: true, num2: 'nine', isNum2Negative: true, expected: '0' }
    ],

    subtraction_neg_or_pos_decimal_sets: [
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], expected: '-7' },
        { num1: ['five', 'zero'], num2: ['two', 'zero'], isNum2Negative: true, expected: '7' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], isNum2Negative: true, expected: '-3' },
        { num1: ['one', 'two'], isNum1Negative: true, num2: ['one', 'two'], expected: '-2.4' }
    ],


};

export default thisTestConfig;
