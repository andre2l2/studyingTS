function sum(x: number, y: number): number {    
    return x + y;
}

// last paramter is not required || you can use to lastName?: string too.
function buildName(firstName: string, lastName: string = ''): string {
    return `${firstName} ${lastName}`;
}

// Rest Paramters
function buildNewName(firstNAme: string, ...restName: string[]): string {
    return firstNAme + ' ' + restName.join(' ');
}