function updateTodo(todo, fieldsToUpdate) {
    return {
        ...todo,
        ...fieldsToUpdate
    };
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter"
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash"
});
const obj = { b: "hello" };
const obj2 = { a: 2, b: "test" };
const artico = {
    title: 'artico'
};
const cats = {
    miffy: { age: 10, breed: "Persain" },
    boris: { age: 2, breed: "Maine coon" },
    mordred: { age: 3, breed: "Bristsh" }
};
const todoPre = {
    title: "Clean room",
    completed: true,
};
