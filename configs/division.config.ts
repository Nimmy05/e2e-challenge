const thisTestConfig = {
    max_numbers_sum: "123456789",
    div_integer_sets: [
        { num1: 'nine', num2: 'three', expected: '3' },
        { num1: 'zero', num2: 'one', expected: '0' },
        { num1: 'nine', num2: 'nine', expected: '1' },
        { num1: 'nine', num2: 'one', expected: '9' }
    ],
    div_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['two', 'five'], expected: '2' }, 
        { num1: ['nine', 'nine'], num2: ['zero', 'one'], expected: '99' }, 
        { num1: ['zero', 'zero'], num2: ['one', 'zero'], expected: '0' }, 
        { num1: ['five'], num2: ['two', 'zero'], expected: '2.5' } 
    ],
    div_negative_or_positive_integer_sets: [
        { num1: 'eight', num2: 'two', isNum2Negative: true, expected: '-4' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', expected: '-4' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', isNum2Negative: true, expected: '4' },
        { num1: 'two', isNum1Negative: true, num2: 'eight', isNum2Negative: true, expected: '0.25' },
        { num1: 'two', isNum1Negative: true, num2: 'two', expected: '-1' },
        { num1: 'nine', isNum1Negative: true, num2: 'nine', isNum2Negative: true, expected: '1' },
        { num1: 'zero', isNum1Negative: true, num2: 'one', expected: '0' }
    ],
    div_negative_or_positive_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['two', 'zero'], expected: '2.5' },
        { num1: ['one', 'seven'], num2: ['one', 'seven'], expected: '1' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], expected: '-2.5' },
        { num1: ['five', 'zero'], num2: ['two', 'zero'], isNum2Negative: true, expected: '-2.5' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], isNum2Negative: true, expected: '2.5' },
        { num1: ['one', 'two'], isNum1Negative: true, num2: ['one', 'two'], expected: '-1' },
        { num1: ['zero', 'zero'], num2: ['one', 'five'], isNum2Negative: true, expected: '0' },
        { num1: ['zero', 'zero'], isNum1Negative: true, num2: ['one', 'five'], expected: '0' },
        { num1: ['nine', 'nine'], num2: ['zero', 'one'], expected: '99' },
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['zero', 'five'], expected: '-10' },
        { num1: ['two', 'five'], num2: ['zero', 'five'], isNum2Negative: true, expected: '-5' },
        { num1: ['two', 'five'], isNum1Negative: true, num2: ['zero', 'five'], isNum2Negative: true, expected: '5' },
        { num1: ['five'], isNum1Negative: true, num2: ['two', 'five'], expected: '-2' },
        {
            num1: ['nine', 'nine', 'nine', 'nine', 'nine', 'nine'],
            num2: ['one', 'zero', 'zero', 'zero', 'zero', 'zero'],
            expected: '9.99999'
        }
    ]
};

export default thisTestConfig;
