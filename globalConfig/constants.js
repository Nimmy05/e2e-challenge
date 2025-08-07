export const constants = {
    data_test_ids: {

        "digits": {
            "zero": "digit-0",
            "one": "digit-1",
            "two": "digit-2",
            "three": "digit-3",
            "four": "digit-4",
            "five": "digit-5",
            "six": "digit-6",
            "seven": "digit-7",
            "eight": "digit-8",
            "nine": "digit-9"
        },

        "operators": {
            "addition": "operator-+",
            "multiplication": "operator-×",
            "subtraction": "operator--",
            "division": "operator-÷",
            "equals": "operator-=",
        },
        "functions": {
            "decimal": "decimal",
            "percentage": "function-percent",
            "plus_or_minus": "function-plus-minus",
            "clear": "function-ac",
            "result": "result"
        }
    },
}

export const timeout = 5000;
export const baseUrl = process.env.VITE_APP_BASE_URL;
