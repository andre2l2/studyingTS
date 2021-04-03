// Unions
type MyBool = true | false;
type WindowStates = "open" | "closed" | 'minimized';
type OddNumbersUnderTen = 1 | 2 | 3 | 6 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") return [obj];
    else return obj
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

function names(arr: ObjectWithNameArray) {
    return arr;
}

const usersName = names([
    { name: "Andre" },
    { name: "Ferreira" }
])

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();
