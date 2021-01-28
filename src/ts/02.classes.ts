class Animal {
    logAnimal(): void {
        console.log('aniaml');
    }

    sleep(): void {
        console.log('sliping... zzz');
    }
}

class Dog extends Animal {
    brak(): void {
        console.log('AuAu');
    }
}

// dog receve all metods of the Animal.
const dog = new Dog();

// animal have 2 metods.
const aniaml = new Animal();

// -----How difference between Private and protected-----------

class A {
    private x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class B extends A {
    multiply(): any {
        // return this.x * this.y; // return a error x is provate. But y is protected.
    }
}

// ---------------------------------------------

