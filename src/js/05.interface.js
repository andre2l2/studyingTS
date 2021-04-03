class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount('Andre Ferreira', 1);
function getAdminUser() {
    return {
        name: "Name of the test",
        id: 123
    };
}
function deleteUser(user) {
    return user;
}
