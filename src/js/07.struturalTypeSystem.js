function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 10 };
logPoint(point);
const point2 = { x: 10, y: 5, z: 30 };
logPoint(point2);
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new VirtualPoint(2, 10);
logPoint(newPoint);
