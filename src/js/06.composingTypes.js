function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string")
        return [obj];
    else
        return obj;
}
function names(arr) {
    return arr;
}
const usersName = names([
    { name: "Andre" },
    { name: "Ferreira" }
]);
const object = backpack.get();
