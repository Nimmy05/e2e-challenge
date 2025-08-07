const thisTestConfig = {
    max_numbers_sum: "123456789",
    mul_integer_sets: [
        { num1: 'five', num2: 'three', expected: '15' },
        { num1: 'zero', num2: 'zero', expected: '0' },
        { num1: 'zero', num2: 'one', expected: '0' },
        { num1: 'nine', num2: 'nine', expected: '81' },
        { num1: 'three', num2: 'seven', expected: '21' },
        { num1: 'nine', num2: 'one', expected: '9' },
        { num1: 'two', num2: 'nine', expected: '18' }
    ],

    mul_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['zero', 'zero'], expected: '0' },
        { num1: ['zero', 'zero'], num2: ['zero', 'one'], expected: '0' },
        { num1: ['one', 'two', 'three'], num2: ['zero', 'two', 'three'], expected: '0.2829' }
    ],

    mul_negative_or_positive_integer_sets: [
        { num1: 'eight', num2: 'two', isNum2Negative: true, expected: '-16' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', expected: '-16' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', isNum2Negative: true, expected: '16' },
        { num1: 'two', isNum1Negative: true, num2: 'eight', isNum2Negative: true, expected: '16' },
        { num1: 'two', isNum1Negative: true, num2: 'two', expected: '-4' },
        { num1: 'nine', isNum1Negative: true, num2: 'nine', isNum2Negative: true, expected: '81' },
        { num1: 'zero', isNum1Negative: true, num2: 'zero', expected: '0' }
    ],

    mul_negative_or_positive_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['two', 'zero'], expected: '10' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], expected: '-10' },
        { num1: ['five', 'zero'], num2: ['two', 'zero'], isNum2Negative: true, expected: '-10' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], isNum2Negative: true, expected: '10' },
        { num1: ['one', 'two'], isNum1Negative: true, num2: ['one', 'two'], expected: '-1.44' },
        { num1: ['zero', 'zero'], num2: ['zero', 'zero'], expected: '0' },
        { num1: ['zero', 'zero'], num2: ['one', 'five'], isNum2Negative: true, expected: '0' },
        { num1: ['zero', 'zero'], isNum1Negative: true, num2: ['one', 'five'], expected: '0' },
        { num1: ['zero', 'zero'], isNum1Negative: true, num2: ['zero', 'zero'], isNum2Negative: true, expected: '0' },
        { num1: ['four', 'five'], num2: ['five', 'five'], expected: '24.75' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['zero', 'zero'], expected: '0' },
        { num1: ['two', 'five'], num2: ['zero', 'zero'], isNum2Negative: true, expected: '0' },
        { num1: ['two', 'five'], isNum1Negative: true, num2: ['zero', 'zero'], isNum2Negative: true, expected: '0' },
        { num1: ['five'], num2: ['two', 'five'], expected: '12.5' },
        { num1: ['five'], isNum1Negative: true, num2: ['two', 'five'], expected: '-12.5' },
        { num1: ['nine', 'nine', 'nine', 'nine', 'nine', 'nine'], num2: ['one', 'zero', 'zero', 'zero', 'zero', 'zero'], expected: '9.99999' },
        { num1: ['one', 'zero', 'zero', 'zero', 'one'], isNum1Negative: true, num2: ['zero', 'zero', 'zero', 'zero', 'nine'], expected: '-0.00090009' }
    ]

};

export default thisTestConfig;
