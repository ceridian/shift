"use strict";
var Action = (function () {
    function Action(options) {
        this.id = options.id;
        this.type = options.type;
        this.label = options.label;
        this.typeTotal = options.typeTotal;
        this.typeCount = options.typeCount;
        this.parentX = options.parentX;
        this.parentY = options.parentY;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.r = options.r || 10;
        this.docked = options.docked || true;
    }
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=action.js.map