interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 10 };
logPoint(point) // log 12 and 10

const point2 = { x: 10, y: 5, z: 30 };
logPoint(point2) // log 12 and 5. Not return 30;

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newPoint = new VirtualPoint(2, 10);
logPoint(newPoint);