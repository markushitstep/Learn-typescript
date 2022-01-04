const add = (a: number, b: number) => {
    return a + b;
};

const substract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => { // if return nothing
    console.log(message);
    //return null
    //return undefined
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
}

// ES2015 
// const logWeather1 = ({date, weather}) => {
//     console.log(date);
//     console.log(weather);
// }

logWeather(todayWeather);

