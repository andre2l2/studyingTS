interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount('Andre Ferreira', 1); // UserAccount return a object User

// I can use interfaces for annotate paramters and return values to function
function getAdminUser(): User {
    return {
        name: "Name of the test",
        id: 123
    }
}

function deleteUser(user: User) {
    return user;
}