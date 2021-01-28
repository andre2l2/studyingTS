function sum(x, y) {
    return x + y;
}
function buildName(firstName, lastName = '') {
    return `${firstName} ${lastName}`;
}
function buildNewName(firstNAme, ...restName) {
    return firstNAme + ' ' + restName.join(' ');
}
