var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistance = function (p) {
        return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        this.x = value;
    };
    return Point;
}());
