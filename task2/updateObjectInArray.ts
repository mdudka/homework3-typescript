function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: keyof ObjectShape,
    value: ObjectShape[keyof ObjectShape],
    patch: Partial<ObjectShape>
): ObjectShape[] {
    const clonedArray = [...initialArray]
    for (let i = 0; i < clonedArray.length; i++) {
        if (clonedArray[i][key] === value) {
            clonedArray[i] = {...clonedArray[i], ...patch};
        }
    }
    return clonedArray;
}

// For testing:
//
// interface ObjectShape {
//     id: number;
//     name: string;
//     age: number;
// }
//
// const initialTestArray: ObjectShape[] = [
//     {
//         id: 1,
//         name: 'Kate',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'John',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Jack',
//         age: 34
//     },
//     {
//         id: 4,
//         name: 'John',
//         age: 33
//     },
// ]
//
// console.log('Updated:')
// console.log(updateObjectInArray<ObjectShape>(initialTestArray, 'name', 'John', {age: 40}));
// console.log('Initial:')
// console.log(initialTestArray)
