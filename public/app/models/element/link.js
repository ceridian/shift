"use strict";
var Link = (function () {
    function Link(options) {
        this.id = options.id;
        this.dest = options.dest;
        this.targ = options.targ;
        this.type = options.type;
        this.x1 = options.x1;
        this.y1 = options.y1;
        this.x2 = options.x2;
        this.y2 = options.y2;
    }
    return Link;
}());
exports.Link = Link;
//# sourceMappingURL=link.js.map