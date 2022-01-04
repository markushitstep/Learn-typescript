"use strict";
// const addOne = (a: number): number => {
//     return a + 1;
// }
// const addTwo = (a: number): number => {
//     return a + 2;
// }
// ////////////////////////////////////////////////////////////////
// const add = (a: number, b: number): number => {
//     return a + b;
// }
//add(10, 2);
// class HoldNumber {
//     data: number = 0;
// }
// class HoldString {
//     data: string = "0";
// } 
// const holdNumber = new HoldNumber();
// holdNumber.data = 1001;
// const holdString = new HoldString();
// holdString.data = "1001";
//Generics
// class HoldAnithing<TypeOfData> {
//     data: TypeOfData;
// }
// const holdNumber = new HoldAnithing<number>();
// holdNumber.data = 111;
// const holdString = new HoldAnithing<string>();
// holdString.data = "111";
// Composition misconception
// const rectangular = (state) => {
//     return {
//         area: () => {
//             return state.height * state.width;
//         }
//     };
// };
// const openable = (state) => {
//     return {
//         toogleOpen: () => {
//             state.open = !state.open;
//         }
//     }
// };
// const buildRectanglerWindow = (state) => {
//     return Object.assign(state, rectangular(state), openable(state))
// }
// const reactagleWindow = buildRectanglerWindow({
//     height: 30,
//     width: 30,
//     open: false
// })
