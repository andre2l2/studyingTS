class User {
    constructor(id, name, typeClass) {
        this.data = new Array();
        this.err = 'err';
        this.data.push({ id, name, typeClass });
    }
    list(val) {
        if (val == '*') {
            return this.data;
        }
        else {
            return this.data[Number(val)];
        }
    }
    add(id, name, typeClass) {
        this.data.push({ id, name, typeClass });
    }
}
const user = new User(1, "Mike", true);
user.add(2, 'gof', false);
const data = user.list('0');
console.log(data);
