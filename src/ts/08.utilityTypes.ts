
// Partial<Type>
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
        ...todo,
        ...fieldsToUpdate
    }
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter"
}

const todo2 = updateTodo(todo1, { // log todo2 show { title: 'organize desk', description: 'throw out trash' }
    description: "throw out trash"
})

// Required<Type>
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { b: "hello" };
const obj2: Required<Props> = { a: 2, b: "test" };

// Readonly<Type>
interface Artico {
    title: string;
}

const artico: Readonly<Artico> = {
    title: 'artico'
}

// Record<Keys, Type>
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persain" },
    boris: { age: 2, breed: "Maine coon" },
    mordred: { age: 3, breed: "Bristsh" }
}

// Pick<Type, Keys>
interface TodoPre {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<TodoPre, "title" | "completed">;

const todoPre: TodoPreview = {
    title: "Clean room",
    completed: true,
}
