function users<T>(user: T): T {
    return user;
}

const named = users<object>({
    name: "Algusto",
    email: "algusto@g.com"
});



