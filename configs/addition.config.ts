const thisTestConfig = {
    max_numbers_sum: "123456790",
    addition_integer_sets: [
        { num1: 'five', num2: 'three', expected: '8' },
        { num1: 'zero', num2: 'zero', expected: '0' },
        { num1: 'zero', num2: 'one', expected: '1' },
        { num1: 'nine', num2: 'nine', expected: '18' },
    ],
    addition_decimal_sets: [
        { num1: ['one','five'], num2: ['two','three'], expected: '3.8' },
        { num1: ['five','zero'], num2: ['zero','zero'], expected: '5' },
        { num1: ['one','nine'], num2: ['zero','one'], expected: '2' },
        { num1: ['three','three'], num2: ['six','seven'], expected: '10' },
        { num1: ['zero','zero'], num2: ['zero','one'], expected: '0.1' },
        { num1: ['nine','nine'], num2: ['zero','one'], expected: '10' },
        { num1: ['one','two', 'three'], num2: ['two','seven', 'seven'], expected: '4' }
    ],
    subtraction_neg_or_pos_integer_sets: [
        { num1: 'eight', num2: 'two', isNum2Negative: true, expected: '6' },
        { num1: 'three', isNum1Negative: true, num2: 'four', expected: '1' },
        { num1: 'eight', isNum1Negative: true, num2: 'two', expected: '-6' },
        { num1: 'eight', bothNegative: true, num2: 'two', expected: '-10' },

    ]
};

export default thisTestConfig;
