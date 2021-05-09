function users<T>(obj: T): T {
    const dateNow = new Date();
    
    return {
        ...obj,
        dateNow
    }
}

interface user {
    name: string;
    old: number;
    sal?: number;
}

const resp = users<user>({ name: "Andre", old: 22 });
console.log(resp);
