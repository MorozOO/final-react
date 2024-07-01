import { startArray } from "./startArray";

export const shuffle = (size) => {
    // const array = [1,2,3,4,5,6,7,8,9,10,11,"",13,14,15,12];
    let array = startArray(size);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}