export const startArray = (size) => {
    let array = [];
    for (let i =1; i < size; i++) {
        array.push(i);
    }
    array.push("");
    return array;
}