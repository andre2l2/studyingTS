class User
{
    data = new Array();
    err = 'err';

    constructor(id: Number, name: String, typeClass: Boolean)
    {
        this.data.push({ id, name, typeClass });
    }

    list(val: String)
    {  
        if (val == '*') {
            return this.data;
        } else {
            return this.data[Number(val)];
        }
    }

    add(id: Number, name: String, typeClass: Boolean)
    {
        this.data.push({ id, name, typeClass });
    }
}

const user = new User(1, "Mike", true);
user.add(2, 'gof', false);


const data = user.list('0');

console.log(data);