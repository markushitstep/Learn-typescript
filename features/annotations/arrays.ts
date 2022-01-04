const color: string[] = ["red", "blue", "yellow"];

const dates = [new Date(), new Date()];

const fruitsByColor = [
    ["tomato"],
    ["apple"],
    ['lemon']
];

const fruitsByColor1: string[][] = [];

// Help with inference when extracting values
const color1 = color[0];
const color2 = color.pop();

// Prevent incopatible values
//color.push(true);

// Help with 'map
color.map((color: string): string => {
    return color.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021');
importantDates.push(new Date());