const thisTestConfig = {
    max_numbers_sum: "123456790",
    addition_integer_sets: [
        { num1: 'five', num2: 'three', expected: '8' },
        { num1: 'zero', num2: 'zero', expected: '0' },
        { num1: 'zero', num2: 'one', expected: '1' },
        { num1: 'nine', num2: 'nine', expected: '18' },
    ],
    addition_decimal_sets: [
        { num1: ['one', 'five'], num2: ['two', 'three'], expected: '3.8' },       
        { num1: ['five', 'zero'], num2: ['zero', 'zero'], expected: '5' },        
        { num1: ['one', 'nine'], num2: ['zero', 'one'], expected: '2' },          
        { num1: ['three', 'three'], num2: ['six', 'seven'], expected: '10' },     
        { num1: ['zero', 'zero'], num2: ['zero', 'one'], expected: '0.1' },       
        { num1: ['nine', 'nine'], num2: ['zero', 'one'], expected: '10' },        
    ],
    addition_neg_or_pos_integer_sets: [
        { num1: 'eight', num2: 'two', isNum2Negative: true, expected: '6' },     
        { num1: 'eight', isNum1Negative: true, num2: 'two', expected: '-6' },   
        { num1: 'eight', isNum1Negative: true, num2: 'two', isNum2Negative: true, expected: '-10' }, 
        { num1: 'two', isNum1Negative: true, num2: 'eight', isNum2Negative: true, expected: '-10' }, 
        { num1: 'two', isNum1Negative: true, num2: 'two', expected: '0' },       
        { num1: 'nine', isNum1Negative: true, num2: 'nine', isNum2Negative: true, expected: '-18' }, 
        { num1: 'zero', isNum1Negative: true, num2: 'zero', expected: '0' }
    ],
    addition_neg_or_pos_decimal_sets: [
        { num1: ['five', 'zero'], num2: ['two', 'zero'], expected: '7' },             
        { num1: ['one', 'seven'], num2: ['one', 'seven'], expected: '3.4' },          
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], expected: '-3' },  
        { num1: ['five', 'zero'], num2: ['two', 'zero'], isNum2Negative: true, expected: '3' },   
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['two', 'zero'], isNum2Negative: true, expected: '-7' },  
        { num1: ['one', 'two'], isNum1Negative: true, num2: ['one', 'two'], expected: '0' },  
        { num1: ['zero', 'zero'], num2: ['zero', 'zero'], expected: '0' },                
        { num1: ['zero', 'zero'], num2: ['one', 'five'], isNum2Negative: true, expected: '-1.5' },  
        { num1: ['zero', 'zero'], isNum1Negative: true, num2: ['one', 'five'], expected: '1.5' },   
        { num1: ['zero', 'zero'], isNum1Negative: true, num2: ['zero', 'zero'], isNum2Negative: true, expected: '0' }, 
        { num1: ['nine', 'nine'], num2: ['zero', 'one'], expected: '10' },                
        { num1: ['four', 'five'], num2: ['five', 'five'], expected: '10' },              
        { num1: ['zero', 'one'], num2: ['nine', 'nine'], expected: '10' },               
        { num1: ['five', 'zero'], isNum1Negative: true, num2: ['zero', 'zero'], expected: '-5' },      
        { num1: ['two', 'five'], num2: ['zero', 'zero'], isNum2Negative: true, expected: '2.5' },      
        { num1: ['two', 'five'], isNum1Negative: true, num2: ['zero', 'zero'], isNum2Negative: true, expected: '-2.5' }, 
        { num1: ['one', 'one', 'two', 'three', 'four', 'five', 'six'], num2: ['two', 'six', 'five', 'four', 'three', 'two', 'one'], expected: '3.777777' }, 
        { num1: ['zero', 'zero', 'zero', 'one'], num2: ['zero', 'zero', 'zero', 'two'], expected: '0.003' }, 
        { num1: ['five'], num2: ['two', 'five'], expected: '7.5' },
        { num1: ['five'], isNum1Negative: true, num2: ['two', 'five'], expected: '-2.5' },
        { num1: ['zero', 'nine', 'nine', 'nine', 'nine', 'nine', 'nine'], num2: ['zero', 'zero', 'zero', 'zero', 'zero', 'zero', 'one'], expected: '1' },
        { num1: ['nine', 'nine', 'nine', 'nine', 'nine', 'nine'], num2: ['one', 'zero', 'zero', 'zero', 'zero', 'zero'], expected: '10.99999' },
        { num1: ['one', 'zero', 'zero', 'zero', 'one'], isNum1Negative: true, num2: ['zero', 'zero', 'zero', 'zero', 'nine'], expected: '-0.9992' }
    ]

};

export default thisTestConfig;
