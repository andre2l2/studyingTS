class Animal {
    logAnimal() {
        console.log('aniaml');
    }
    sleep() {
        console.log('sliping... zzz');
    }
}
class Dog extends Animal {
    brak() {
        console.log('AuAu');
    }
}
const dog = new Dog();
const aniaml = new Animal();
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
class B extends A {
    multiply() {
    }
}
